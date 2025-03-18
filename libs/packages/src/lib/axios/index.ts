import axios from 'axios';
const CURRENT_LANGUAGE = 'fr';
export const headers: { [key: string]: string } = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const sharedAxiosInstance = (
  baseUrl: string,
  repo: string | null,
  tokenName?: string,
) => {
  const langValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('lang='))
    ?.split('=')[1];
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Language': langValue || CURRENT_LANGUAGE,
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(tokenName || 'token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const token = localStorage.getItem(tokenName || 'token');
      if (
        tokenName &&
        (error.response.status === 401 ||
          error === 'AxiosError: Network Error' ||
          token === null)
      ) {
        localStorage.removeItem(tokenName || 'token');
        if (
          window.location.pathname !== `/${repo}/login` &&
          window.location.pathname !== `/${repo}/forgot-password`
        ) {
          window.location.href = `/${repo}/login`;
        }
      }
      if (error.response.status === 403) {
        if (window.location.pathname !== `/${repo}/forbidden`) {
          window.location.href = `/${repo}/forbidden`;
        }
      }
      return Promise.reject(error);
    },
  );
  return axiosInstance;
};
export { axios, sharedAxiosInstance };

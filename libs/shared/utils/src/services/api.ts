import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { BASE_URL, CURRENT_INTERFACE, TOKEN_KEY } from '../constants';

export const baseQueryFunc = fetchBaseQuery({
  baseUrl: `${BASE_URL}/${CURRENT_INTERFACE}`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const langValue = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('lang='))
      ?.split('=')[1];
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Language', langValue || 'en');
    return headers;
  },
});
const baseQuery = async (args, api, extraOptions) => {
  const result = await baseQueryFunc(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = `/${CURRENT_INTERFACE}/login`;
  }

  if (result.error && result.error.status === 403) {
    window.location.href = `/${CURRENT_INTERFACE}/forbidden`;
  }

  return result;
};

export const sharedApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});

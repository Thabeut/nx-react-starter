export const TOKEN_KEYS = {
  admin: 'adminToken',
};

export const ADMIN_PREFIX = '/admin';

const ARRAY_APPS_URLS = ['admin'];
export const CURRENT_INTERFACE = ARRAY_APPS_URLS.includes(
  window.location.pathname.split('/')[1]
)
  ? window.location.pathname.split('/')[1]
  : '';

export const TOKEN_KEY = TOKEN_KEYS[CURRENT_INTERFACE];

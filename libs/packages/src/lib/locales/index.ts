import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import { allLangs } from './config-lang';
export function useLocales(keyPrefix?: string) {
  const keyperfix = keyPrefix ? 'translation.' + keyPrefix : 'translation';
  const { i18n, t } = useTranslation('', {
    keyPrefix: keyperfix,
  });
  const currentLang = i18n.language;
  const handleChangeLanguage = (newlang: string) => {
    localStorage.setItem('newLang', newlang);
    Cookies.set('lang', newlang);
    window.location.reload();
  };
  window.onload = () => {
    const newlang = localStorage.getItem('newLang');
    if (newlang) {
      i18n?.changeLanguage(newlang);
      localStorage.removeItem('newLang');
    }
  };
  return {
    onChangeLang: handleChangeLanguage,
    t,
    currentLang,
    allLangs,
    i18n,
  };
}
export { default as i18n } from './i18n';
export { t } from './utils/locales';

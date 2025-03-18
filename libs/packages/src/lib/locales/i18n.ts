import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Cookies from 'js-cookie';

import arLocales from './langs/ar';
import enLocales from './langs/en';
import frLocales from './langs/fr';
import { defaultLang } from './config-lang';

const lng = Cookies.get('lang') || defaultLang?.value;

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: enLocales },
    fr: { translations: frLocales },
    ar: { translations: arLocales },
  },
  lng,
  fallbackLng: defaultLang?.value,
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

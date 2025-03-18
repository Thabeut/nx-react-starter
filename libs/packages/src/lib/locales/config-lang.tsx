import FrLanguage from './assets/FRflag';
import EnLanguage from './assets/USAflag';
import TunisiaFlag from './assets/TunisiaFlag';

export const allLangs = [
  {
    label: 'French',
    value: 'fr',
    icon: <FrLanguage />,
  },
  {
    label: 'English',
    value: 'en',
    icon: <EnLanguage />,
  },
  {
    label: 'Arabic',
    value: 'ar',
    icon: <TunisiaFlag />,
  },
];
export const defaultLang = allLangs[0];

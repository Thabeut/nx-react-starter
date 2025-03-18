import i18n from '../i18n';

export const t = (key: string): string => {
  const { t } = i18n;

  return t(`translation.${key}` as string);
};

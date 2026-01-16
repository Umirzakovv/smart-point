import { useTranslation } from 'react-i18next';

export const useLang = () => {
  const { t } = useTranslation();
  const locale = useTranslation().i18n.language;

  return {
    t,
    locale,
  };
};

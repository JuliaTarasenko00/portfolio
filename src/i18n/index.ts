import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './language/en';
import { uk } from './language/uk';
import { LOCAL } from './constants';

const savedLanguage =
  JSON.parse(localStorage.getItem('language') as string) || LOCAL.EN;

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: uk },
    en: { translation: en },
  },
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './english.json';
import ruTranslation from './russian.json';

i18n.use(initReactI18next).init({
  resources: {
    English: {
      translation: enTranslation,
    },
    Russian: {
      translation: ruTranslation,
    },
  },
  compatibilityJSON: 'v3',
  lng: 'English',
  fallbackLng: 'English',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

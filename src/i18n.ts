import i18n from 'i18next';
import { UseTranslationOptions, initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from 'shared/locales/en/translation.json';
import translationRU from 'shared/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export function useTranslation() {
  return useTranslationOrg('translation');
}

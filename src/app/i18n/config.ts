import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from './ru/translation.json';
import uz from './uz/translation.json';
import cy from './cy/translation.json';
import en from './en/translation.json';

i18next.use(initReactI18next).init({
  lng: 'ru',
  debug: true,
  resources: {
    ru: {
      translation: ru,
    },
    uz: {
      translation: uz,
    },
    cy: {
      translation: cy,
    },
    en: {
      translation: en,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});

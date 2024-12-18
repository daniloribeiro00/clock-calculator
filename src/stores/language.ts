import { useTitle } from '@vueuse/core';
import { defineStore } from 'pinia';

type State = {
  language: 'pt' | 'en';
};

export const useLanguageStore = defineStore('languageStore', {
  state: (): State => ({
    language: 'en',
  }),
  actions: {
    setLanguage(language: State['language']) {
      const title = useTitle();

      this.language = language;
      if (language === 'pt') {
        title.value = 'Calculadora de Horas';
      } else {
        title.value = 'Clock Calculator';
      }
    },
  },
});

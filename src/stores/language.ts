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
      this.language = language;
    },
  },
});

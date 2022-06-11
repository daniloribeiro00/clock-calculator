import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    mode: useLocalStorage('mode', 'totalTime'),
  }),
  actions: {
    setMode(mode: string) {
      this.mode = mode;
    },
  },
});

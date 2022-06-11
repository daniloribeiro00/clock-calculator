import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    mode: 'totalTime',
  }),
  actions: {
    setMode(mode: string) {
      this.mode = mode;
    },
  },
});

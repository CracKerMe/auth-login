import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      showBoxTopBool: false,
      boxTopTitle: '',
    };
  },
  getters: {
    getShowBoxTopBool: (state) => state.showBoxTopBool,
    getBoxTopTitle: (state) => state.boxTopTitle,
  },
  actions: {
    setShowBoxTopBool(bool) {
      this.showBoxTopBool = bool;
    },
    setBoxTopTitle(title) {
      this.boxTopTitle = title;
    },
  },
});

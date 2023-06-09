const loaderModule = {
  namespaced: true,
  state() {
    return {
      loader: true,
    };
  },

  getters: {
    getLoader(state) {
      return state.loader;
    },
  },

  mutations: {
    setLoader(state, payload) {
      state.loader = payload;
    },
  },
};

export default loaderModule;

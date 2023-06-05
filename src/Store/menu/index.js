const sideModule = {
  namespaced: true,
  state() {
    return {
      isSideMenuActive: false,
    };
  },

  mutations: {
    setSideMenu(state, payload) {
      state.isSideMenuActive = payload;
    },
  },

  getters: {
    getSideMenu(state) {
      return state.isSideMenuActive;
    },
  },

  actions: {
    hideSideMenu({ commit }, payload) {
      commit("setSideMenu", payload);
    },
  },
  
};

export default sideModule;

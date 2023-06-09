import { completeValueFromFirebase } from "@/Tools/loader.js";

const asideModule = {
  namespaced: true,
  state() {
    return {
      headquarters: "",
      details: "",
    };
  },
  mutations: {
    setHeadquarters(state, payload) {
      state.headquarters = payload;
    },

    setDetails(state, payload) {
      state.details = payload;
    },
  },

  getters: {
    getHeadquarters(state) {
      return state.headquarters;
    },

    getDetails(state) {
      return state.details;
    },
  },

  actions: {
    async getHeadquarters({ commit }) {
      try {
        completeValueFromFirebase(commit, "headquarters", "setHeadquarters");
      } catch (error) {
        console.log(error);
      }
    },

    async getDetails({ commit }) {
      try {
        completeValueFromFirebase(commit, "details", "setDetails");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default asideModule;

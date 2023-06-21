import { completeValueFromFirebase } from "@/Tools/loader.js";

const aboutModule = {
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
        completeValueFromFirebase(commit, "headquartersAbout", "setHeadquarters");
      } catch (error) {
        console.log(error);
      }
    },
    
    async getDetails({ commit }) {
      
      try {
        completeValueFromFirebase(commit, "detailsAbout", "setDetails");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default aboutModule;

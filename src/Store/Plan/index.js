import { completeValueFromFirebase } from "@/Tools/loader.js";

const planModule = {
  namespaced: true,
  state() {
    return {
      details: "",
    };
  },

    getters: {
        getDetails(state) {
            return state.details
        }
  },

  mutations: {
    setDetails(state, payload) {
      state.details = payload;
    },
  },

  actions: {
    async getDetails({ commit }) {
      try {
        completeValueFromFirebase(commit, "plan", "setDetails");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default planModule;

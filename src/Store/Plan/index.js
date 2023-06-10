import { completeValueFromFirebase } from "@/Tools/loader.js";

const planModule = {
  namespaced: true,
  state() {
    return {
      details: "",
      instruction: "",
    };
  },

  getters: {
    getDetails(state) {
      return state.details;
    },
    getInstruction(state) {
      return state.instruction;
    },
  },

  mutations: {
    setDetails(state, payload) {
      state.details = payload;
    },

    setInstruction(state, payload) {
      state.instruction = payload;
    },
  },

  actions: {
    async getDetails({ commit }) {
      try {
        completeValueFromFirebase(commit, "detailsPlan", "setDetails");
      } catch (error) {
        console.log(error);
      }
    },

    async getInstruction({ commit }) {
      try {
        completeValueFromFirebase(commit, "instructionPlan", "setInstruction");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default planModule;

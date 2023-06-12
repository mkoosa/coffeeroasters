import { completeValueFromFirebase } from "@/Tools/loader.js";

const planModule = {
  namespaced: true,
  state() {
    return {
      details: "",
      instruction: "",
      preferences:""
    };
  },

  getters: {
    getDetails(state) {
      return state.details;
    },
    getInstruction(state) {
      return state.instruction;
    },

    getPreferences(state) {
      return state.preferences
    }
  },

  mutations: {
    setDetails(state, payload) {
      state.details = payload;
    },

    setInstruction(state, payload) {
      state.instruction = payload;
    },

    setPreferences(state, payload) {
      state.preferences = payload
    }
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

    async getPreferences({ commit }) {
      try {
        completeValueFromFirebase(commit, "preferencePlan", "setPreferences");
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default planModule;

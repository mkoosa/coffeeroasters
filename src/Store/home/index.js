import { completeValueFromFirebase } from "@/Tools/loader.js";

const homeModule = {
  namespaced: true,
  state() {
    return {
      collection: "",
      reasons: "",
      instruction: "",
    };
  },

  mutations: {
    setCollection(state, payload) {
      state.collection = payload;
    },
    setReasons(state, payload) {
      state.reasons = payload;
    },
    setInstruction(state, payload) {
      state.instruction = payload;
    },
  },

  getters: {
    getCollection(state) {
      return state.collection;
    },
    getReasons(state) {
      return state.reasons;
    },
    getInstruction(state) {
      return state.instruction;
    },
  },

  actions: {
    async getCoffeeCollection({ commit }) {
      try {
        completeValueFromFirebase(commit, "collection", "setCollection");
      } catch (error) {
        console.log(error);
      }
    },

    async getReasons({ commit }) {
      try {
        completeValueFromFirebase(commit, "reason", "setReasons");
      } catch (error) {
        console.log(error);
      }
    },

    async getInstruction({ commit }) {
      try {
        completeValueFromFirebase(commit, "instruction", "setInstruction");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default homeModule;

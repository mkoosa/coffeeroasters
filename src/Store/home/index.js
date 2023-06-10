import { completeValueFromFirebase } from "@/Tools/loader.js";

const homeModule = {
  namespaced: true,
  state() {
    return {
      collection: "",
      reasons: "",
      instruction: "",
      details:""
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
    setDetails(state, payload) {
      state.details = payload;
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
    getDetails(state) {
      return state.details;
    },
  },

  actions: {
    async getCoffeeCollection({ commit }) {
      try {
        completeValueFromFirebase(commit, "collectionHome", "setCollection");
      } catch (error) {
        console.log(error);
      }
    },

    async getReasons({ commit }) {
      try {
        completeValueFromFirebase(commit, "reasonHome", "setReasons");
      } catch (error) {
        console.log(error);
      }
    },

    async getInstruction({ commit }) {
      try {
        completeValueFromFirebase(commit, "instructionHome", "setInstruction");
      } catch (error) {
        console.log(error);
      }
    },

    async getDetails({ commit }) {
      try {
        completeValueFromFirebase(commit, "detailsHome", "setDetails");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default homeModule;

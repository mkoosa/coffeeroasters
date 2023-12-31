import { completeValueFromFirebase } from "@/Tools/loader.js";

const homeModule = {
  namespaced: true,
  state() {
    return {
      collection: "",
      reasons: "",
      instruction: "",
      details: "",
      keepAlive: true,
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
    setKeepAlive(state, payload) {
      state.keepAlive = payload;
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
    getKeepAlive(state) {
      return state.keepAlive;
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

    getKeepalive({ commit }, payload) {
      commit("setKeepAlive", payload);
    },
  },
};

export default homeModule;

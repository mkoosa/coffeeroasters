import { completeValueFromFirebase } from "@/Tools/loader.js";

const planModule = {
  namespaced: true,
  state() {
    return {
      details: "",
      instruction: "",
      preferences: "",
      userPreferences: ["", "", "", "", ""],
      checkOutStatus: false,
      checkoutTxt: "",
      price: "",
      schedule: "",
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
      return state.preferences;
    },

    getUserPreferences(state) {
      return state.userPreferences;
    },

    getCheckOutStatus(state) {
      return state.checkOutStatus;
    },

    getCheckOutTxt(state) {
      return state.checkoutTxt;
    },

    getPrice(state) {
      return state.price;
    },

    getSchedule(state) {
      return state.schedule;
    },
  },

  mutations: {
    setDetails(state, payload) {
      state.details = payload;
    },

    setInstruction(state, payload) {
      state.instruction = payload;
    },

    setPreferences(state, payload) {
      state.preferences = payload;
    },

    setUserPreferences(state, payload) {
      state.userPreferences[payload.index] = payload.value;
    },

    resetUserPreference(state, payload) {
      state.userPreferences[payload] = "";
    },
    resetUserPreferences(state) {
      state.userPreferences = ["", "", "", "", ""];
    },

    setCheckOutStatus(state, payload) {
      state.checkOutStatus = payload;
    },

    setCheckOutTxt(state, payload) {
      state.checkoutTxt = payload;
    },

    setPrice(state, payload) {
      state.price = payload;
    },

    setSchedule(state, payload) {
      state.schedule = payload;
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

    async getPreferences({ commit }) {
      try {
        completeValueFromFirebase(commit, "preferencePlan", "setPreferences");
      } catch (error) {
        console.log(error);
      }
    },

    updateUserPreferences({ commit }, payload) {
      commit("setUserPreferences", payload);
    },

    resetUserPreferences({ commit }) {
      commit("resetUserPreferences");
    },

    resetPreference({ commit }, payload) {
      commit("resetUserPreference", payload);
    },

    changeCheckOutStatus({ commit }, payload) {
      commit("setCheckOutStatus", payload);
    },

    async getCheckOut({ commit }) {
      try {
        completeValueFromFirebase(
          commit,
          "checkOutConfirmation",
          "setCheckOutTxt"
        );
      } catch (error) {
        console.log(error);
      }
    },

    getPrice({ commit }, payload) {
      commit("setPrice", payload);
    },

    async getSchedule({ commit }) {
      try {
        completeValueFromFirebase(commit, "schedule", "setSchedule");
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default planModule;

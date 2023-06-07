/*eslint-disable*/
import { database, ref, onValue } from "../../firebase.js";

const asideModule = {
  namespaced: true,
  state() {
    return {
      headquarters: "",
      details:""
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
        const collectionRef = ref(database, "headquarters");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          commit("setHeadquarters", data);
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getDetails({ commit }) {
      try {
        const collectionRef = ref(database, "details");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          commit("setDetails", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default asideModule;

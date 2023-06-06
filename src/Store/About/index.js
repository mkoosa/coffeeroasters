/*eslint-disable*/
import { database, ref, onValue } from "../../firebase.js";

const asideModule = {
  namespaced: true,
  state() {
    return {
      aboutUsContent: "",
      commitmentContent: "",
      headquarters:""
    };
  },
  mutations: {
    setAboutUsContent(state, payload) {
      state.aboutUsContent = payload;
    },

    setCommitmentContent(state, payload) {
      state.commitmentContent = payload;
    },

    setHeadquarters(state, payload) {
      state.headquarters = payload;
    },
  },

  getters: {
    getAboutUsContent(state) {
      return state.aboutUsContent;
    },

    getCommitmentContent(state) {
      return state.commitmentContent;
    },

    getHeadquarters(state) {
      return state.headquarters;
    },
  },

  actions: {
    async getAboutUsContent({ commit }) {
      try {
        const collectionRef = ref(database, "intrSetails");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          commit("setAboutUsContent", data);
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getCommitmentContent({ commit }) {
      try {
        const collectionRef = ref(database, "details");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          commit("setCommitmentContent", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    
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
  },
};

export default asideModule;

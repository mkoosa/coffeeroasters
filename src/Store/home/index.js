import { database, ref, onValue } from "../../firebase.js";

const homeModule = {
  namespaced: true,
  state() {
    return {
      collection: '',
      reasons:''
    };
  },

  mutations: {
    setCollection(state, payload) {
      state.collection = payload;
    },
    setReasons(state, payload) {
      state.reasons = payload;
    },
  },

  getters: {
    getCollection(state) {
      return state.collection;
    },
    getReasons(state) {
      return state.reasons;
    },
  },

  actions: {
    async getCoffeeCollection({ commit }) {
      try {
        const collectionRef = ref(database, "collection");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          commit("setCollection", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getReasons({ commit }) {
      try {
        const collectionRef = ref(database, "reason");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          commit("setReasons", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  
  
};

export default homeModule;

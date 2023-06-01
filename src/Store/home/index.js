import { database, ref, onValue } from "../../firebase.js";

const homeModule = {
  namespaced: true,
  state() {
    return {
      collection: '',
      reasons: '',
      instruction:''
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
    async getInstruction({ commit }) {
      try {
        const collectionRef = ref(database, "instruction");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          commit("setInstruction", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  
  
};

export default homeModule;

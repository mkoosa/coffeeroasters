import { database, ref, onValue } from "../../firebase.js";

const planModule = {
  namespaced: true,
  state() {
    return {
      details: "",
    };
  },

    getters: {
        getDetails(state) {
            return state.details
        }
  },

  mutations: {
    setDetails(state, payload) {
      state.details = payload;
    },
  },

  actions: {
    async getDetails({ commit }) {
      try {
        const collectionRef = ref(database, "plan");
        onValue(collectionRef, (snapshot) => {
          const data = snapshot.val();
          // console.log(data);
          commit("setDetails", data);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default planModule;

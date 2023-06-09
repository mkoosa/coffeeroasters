import { createStore } from "vuex";

import homeModule from "./home/index";
import sideModule from "./menu/index";
import aboutModule from "./About/index";
import planModule from "./Plan/index";
import loaderModule from "./Loader/index";

const store = createStore({
  modules: {
    home: homeModule,
    side: sideModule,
    about: aboutModule,
    plan: planModule,
    load: loaderModule,
  },
});

export default store;

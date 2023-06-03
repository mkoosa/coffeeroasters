import { createStore } from 'vuex'; 

import homeModule from './home/index';
import sideModule from './menu/index';
console.log(homeModule);

const store = createStore({
    modules: {
        home: homeModule,
        side:sideModule
    }
})

export default store
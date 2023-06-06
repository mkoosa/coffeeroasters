import { createStore } from 'vuex'; 

import homeModule from './home/index';
import sideModule from './menu/index';
import aboutModule from './About/index'
console.log(homeModule);

const store = createStore({
    modules: {
        home: homeModule,
        side: sideModule,
        about:aboutModule
    }
})

export default store
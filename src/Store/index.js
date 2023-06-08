import { createStore } from 'vuex'; 

import homeModule from './home/index';
import sideModule from './menu/index';
import aboutModule from './About/index';
import planModule from './Plan/index';

const store = createStore({
    modules: {
        home: homeModule,
        side: sideModule,
        about: aboutModule,
        plan:planModule
    }
})

export default store
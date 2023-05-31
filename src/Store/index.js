import { createStore } from 'vuex'; 

import homeModule from './home/index';
console.log(homeModule);

const store = createStore({
    modules: {
        home:homeModule
    }
})

export default store
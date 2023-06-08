// /*eslint-disable*/

import { createRouter, createWebHistory } from "vue-router";

// components
import Home from './components/Home/compMain.vue';
import AboutUs from './components/About/compAboutus.vue';
import Plan from './components/Plan/compPlan.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home, 
            name:'home'
        },
        {
            path: '/aboutUs',
            component: AboutUs,
            name: 'about us'
        },
        {
            path: '/plan',
            component: Plan,
            name: 'create your plane'

        }
    ]

})

export default router
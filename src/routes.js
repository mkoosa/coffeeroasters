// /*eslint-disable*/

import { createRouter, createWebHistory } from "vue-router";

// components
import Home from './components/Home/compMain.vue';
import AboutUs from './components/About/compAboutus.vue';
import Create from './components/Create/compCreate.vue'


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
            path: '/createYourLlane',
            component: Create,
            name: 'create your plane'

        }
    ]

})

export default router
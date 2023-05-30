import { createApp } from 'vue'
import App from './App.vue';


import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Store from './Store/index';


// components
import MainButton from './Utils/buttons/compButtonMain.vue';



library.add(fas, far, fab)
dom.watch();
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component('btn-main', MainButton);
app.use(Store);
app.mount('#app');







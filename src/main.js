import {createApp} from 'vue';
import App from './App.vue';

import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import Store from './Store/index';
import Router from './routes';
import {useAccordion} from 'vue3-rich-accordion';
import 'vue3-rich-accordion/accordion-library-styles.css';

// components
import MainButton from './Utils/buttons/compButtonMain.vue';
import CompFooter from './components/Footer/compFooter.vue';
import CompLoader from './Utils/compLoader.vue';

library.add(fas, far, fab);
dom.watch();
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('btn-main', MainButton);
app.component('comp-footer', CompFooter);
app.component('comp-loader', CompLoader);
app.use(Store);
app.use(Router);
app.use(useAccordion);
app.mount('#app');

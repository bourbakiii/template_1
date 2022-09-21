import {createApp} from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router/router.js'
import {createPinia} from 'pinia'


// FONT-AWESOME //////////
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
//////////////////////////

createApp(App)
    // .use(axios)
    .use(createPinia())
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


// AXIOS ////////////////////////////////////////////
import axios from 'axios';

import {$USE_INDEX_STORE} from '@/stores/index.js';

const $MAIN_STORE = $useMainStore()


axios.defaults.baseURL = 'YOUR URL';
axios.defaults.headers.common['Authorization'] = `Bearer PATH TO TOKEN`
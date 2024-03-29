import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'normalize.css';

import App from './App.vue';
import router from './router';
import store from './store/store';

library.add(faInfoCircle);
library.add(faChevronLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

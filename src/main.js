import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store/store';

library.add(faHome, faEnvelope, faSignInAlt);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount('#app');

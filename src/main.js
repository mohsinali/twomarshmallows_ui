import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import 'vue-tel-input/dist/vue-tel-input.css';
import './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
         faUser,
		 faCaretDown,
		 faThumbsUp,
		 faCog,
		 faComments,
		 faUsers,
		 faStar,
		 faHeart,
		 faPaperclip,
		 faMicrophone,
		 faPen,
		 faArrowLeft,
		 faArrowRight,
		 faPlus,
		 faLock,
		 faGraduationCap,
		 faTimesCircle,
		 faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Multiselect from 'vue-multiselect';
import Avataaar from 'vue-avataaar';
import Vuelidate from 'vuelidate';
import VueTelInput from 'vue-tel-input';
import Toasted from 'vue-toasted';
import axios from 'axios';
import store from './store/store';
import router from './router';
import App from './App.vue';

library.add(faUser);
library.add(faCaretDown);
library.add(faThumbsUp);
library.add(faCog);
library.add(faComments);
library.add(faUsers);
library.add(faStar);
library.add(faHeart);
library.add(faPaperclip);
library.add(faMicrophone);
library.add(faPen);
library.add(faArrowLeft);
library.add(faArrowRight);
library.add(faPlus);
library.add(faLock);
library.add(faGraduationCap);
library.add(faTimesCircle);
library.add(faPlusCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('multiselect', Multiselect);
Vue.component('user-avatar', Avataaar);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueTelInput);
Vue.use(Toasted);

Vue.config.productionTip = false;

export const EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Sidebar from '@/components/Sidebar/Sidebar.vue';
import { mapGetters } from 'vuex';

let vm = null;
export default {
  name: 'Home',
  components: {
  	Sidebar,
  },
  created() {
    vm = this;
  },

};

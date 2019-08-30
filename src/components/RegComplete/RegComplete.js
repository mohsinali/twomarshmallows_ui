import { HalfCircleSpinner } from 'epic-spinners';

let vm = null;
export default {
  name: 'RegComplete',
  components: { HalfCircleSpinner },
  created() {
    vm = this;
    setTimeout(() => { vm.$router.push({ name: 'login' }); }, 5000);
  },
};

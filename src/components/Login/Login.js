'use strict';

import { required } from 'vuelidate/lib/validators';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { HalfCircleSpinner } from 'epic-spinners';

let vm = null;
export default {
  name: 'Login',
  components: { HalfCircleSpinner },
  data() {
  	return {
  	  logo: '',
      userId: '',
      password: '',
      dismissSecs: 0,
      dismissCountDown: 0,
      loginInProgress: false,
      loginBtnText: 'Login',
      formErrorMsg: '',

  	};
  },
  validations: {
    userId: {
      required,
    },
    password: {
      required,
    },
  },
  created() {
    vm = this;
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      userVerified: 'getUserVerified',
      userSetup: 'getUserSetup'
    }),
  },
  mounted() {
    vm.logo = require('@/assets/logo.svg');
  },
  methods: {
    ...mapActions([
      'loginUser'
    ]),
    ...mapMutations([
      'setUserId'
    ]),
    countDownChanged(dismissCountDown) {
      vm.dismissCountDown = dismissCountDown;
    },
    resetLoginForm() {
      vm.userId = '';
      vm.password = '';
    },
    async onSubmit(evt) {
      evt.preventDefault();
      // check for form errors
      vm.$v.$touch();
      if (vm.$v.$invalid) {
        vm.formErrorMsg = 'Please fix the highlighted errors!';
        vm.dismissCountDown = 5;
        vm.dismissSecs = 5;
      } else {

        let loginSuccessful = false;
        vm.loginBtnText = 'Logging In ...';
        vm.loginInProgress = true;

        try {
          await vm.loginUser({ userId: vm.userId, password: vm.password});
          loginSuccessful = true;
          vm.setUserId(vm.userId);
        } catch (error) {
          vm.formErrorMsg = 'Error in logging in user, please try again!';
          vm.dismissCountDown = 10;
          vm.dismissSecs = 10;
          console.log(error);
        } finally {
          // reset the form
          vm.resetLoginForm() ;

          vm.loginBtnText = 'Login';
          vm.loginInProgress = false;

          // then go to the reg complete page if registration is successful
          if (loginSuccessful) {
            if (vm.userSetup) {
              vm.$router.push({ name: 'my-community' });
            } else {
              vm.$router.push({ name: 'create-avatar', params: {  modifyAvatar: false}  });
            }
            
          }
        }

      }
    },
  },
};

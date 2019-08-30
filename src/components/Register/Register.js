import { required, email, minLength } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';
import { HalfCircleSpinner } from 'epic-spinners';

let vm = null;
let phoneNumberValid = true;
const phoneMustBeValid = value => phoneNumberValid;

export default {
  name: 'Register',
  components: { HalfCircleSpinner },
  data() {
  	return {
  	  logo: '',
      fullname: '',
      organization: '',
      email: '',
      phone: '',
      phoneCountry: '',
      countryDetails: '',
      dismissSecs: 0,
      dismissCountDown: 0,
      regInProgress: false,
      regBtnText: 'Create Account',
      formErrorMsg: '',
  	};
  },
  validations: {
    fullname: {
      required,
      minLength: minLength(4),
    },
    organization: {
      required,
    },
    email: {
      required, email,
    },
    phone: {
      required, phoneMustBeValid,
    },
  },
  created() {
    vm = this;
  },
  mounted() {
    vm.logo = require('@/assets/logo.svg');
  },
  methods: {
    ...mapActions([
      'registerUser',
    ]),
    countDownChanged(dismissCountDown) {
      vm.dismissCountDown = dismissCountDown;
    },
    resetRegistrationForm() {
      vm.fullname = '';
      vm.organization = '';
      vm.email = '';
      vm.phone = '';
      vm.countryDetails = '';
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
        let regSuccessful = false;
        vm.regBtnText = 'Registering ...';
        vm.regInProgress = true;

        try {
          await vm.registerUser({
            fullname: vm.fullname, 
            organization: vm.organization, 
            email: vm.email, 
            phone: vm.phone, 
            country: vm.countryDetails,
            userIsTutor: true,
          });
          regSuccessful = true;
        } catch (error) {
          vm.formErrorMsg = 'Error in registering user, please try again!';
          vm.dismissCountDown = 10;
          vm.dismissSecs = 10;
        } finally {
          // reset the form
          vm.resetRegistrationForm();

          // then go to the reg complete page if registration is successful
          if (regSuccessful) {
            vm.$router.push({ name: 'registration-complete' });
          }
        }
      }
    },
    onInput({ number, isValid, country }) {
      phoneNumberValid = isValid;
      vm.phoneCountry = country.name;
      vm.countryDetails = country;
    },
  },
};

import { mapActions } from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators';
import { HalfCircleSpinner } from 'epic-spinners';

let vm = null;
export default {
  name: 'AddNewStudent',
  components: { HalfCircleSpinner },
  created() {
    vm = this;
  },
  data() {
  	return {
  	  name:'',
  	  school:'',
  	  grade:'',
  	  age: '',
      email:'',
  	  submitText:"Submit",
      newStudentRegistrationInProgress: false
  	};
  },
  validations: {
    name: {
      required,
    },
    grade: {
      required,
    },
    school: {
      required,
    },
    age: {
      required,
    },
    email: {
      required, email
    },
  },
  methods: {
    ...mapActions([
      'registerUser',
    ]),
    goBackToClass(){
        vm.$router.push({ name: 'my-class' });
    },
    async onSubmit(evt) {
      evt.preventDefault();
      // check for form errors
      vm.$v.$touch();
      if (!vm.$v.$invalid) {
       
      }
    }
  }

};

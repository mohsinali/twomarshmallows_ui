import { mapActions } from 'vuex';
import { required, minLength, sameAs } from 'vuelidate/lib/validators';
import { HalfCircleSpinner } from 'epic-spinners';

let vm = null;
export default {
  name: 'ChangePassword',
  components: { HalfCircleSpinner },
  created() {
    vm = this;
  },
  data() {
  	return {
  	  oldpassword:'',
  	  newpassword:'',
  	  newpasswordconfirm:'',
  	  changePasswordInProgress: false,
  	  changePasswordText:"Change Password",
  	  passwordChangeSuccessful: false,
  	};
  },
  validations: {
    oldpassword: {
      required,
      minLength: minLength(4),
    },
    newpassword: {
      required,
      minLength: minLength(6),
    },
    newpasswordconfirm: {
      required,
      sameAsPassword: sameAs('newpassword')
    },
  },
  methods: {
    ...mapActions([
      'updateUser',
      'loginUser'
    ]),
    async onSubmit(evt) {
      evt.preventDefault();
      // check for form errors
      vm.$v.$touch();
      if (!vm.$v.$invalid) {
        vm.changePasswordInProgress = true;
        vm.changePasswordText = 'Updating ...';

        let oldUserPasswordIsCorrect = false;

        // first of all login the user to verify the old password is correct
        try{
          await vm.loginUser({userId:vm.$store.state.userId, password: vm.oldpassword });
          // login is successful
          oldUserPasswordIsCorrect = true;
        }
        catch(loginError){
          console.log(loginError);
        }
        finally {
            // if old password is correct then update the old password
            if (oldUserPasswordIsCorrect) {
                  try {
                    await vm.updateUser({userId: vm.$store.state.userId, password:vm.newpassword});
                    vm.passwordChangeSuccessful = true;
                  }
                  catch (error) {
                    console.log(error);
                  }
                  finally {
                    vm.changePasswordInProgress = false;
                    vm.changePasswordText = "Change Password"
                    if(vm.passwordChangeSuccessful) {
                      vm.$toasted.show('Password updated successfully',{ 
                          theme: "bubble", 
                          position: "top-right", 
                          duration : 3000
                      });
                    }
                  }
            } else {
                  vm.changePasswordInProgress = false;
                  vm.changePasswordText = "Change Password"
                  vm.$toasted.show('The old password appears to be incorrect, please use the correct one!!',{ 
                        theme: "bubble", 
                        position: "top-right", 
                        duration : 3000
                  });
                  
            }
        }

    	
      }

    }
  }

};

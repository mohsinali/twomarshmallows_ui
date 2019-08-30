import { mapGetters, mapMutations, mapActions } from 'vuex';

let vm = null;
export default {
  name: 'SelectLanguages',
  data() {
    return {
      nativeLanguagesValue: [],
      learningLanguagesValue: [],
      learningLanguagesArray: [],
      nativeLanguagesArray: [],
      modifyLanguages: false
    };
  },
  created() {
    vm = this;
    // set the current step
    vm.setCustomizationStep(3);

    // set the data from the state
    vm.nativeLanguagesValue = vm.nativeLanguages;
    vm.learningLanguagesValue = vm.learningLanguages;
     // set the modification flag
    vm.modifyLanguages = vm.$route.params.modifyLanguages;
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      customizationStep: 'getCustomizationStep',
      // for the languages
      nativeLanguages: 'getNativeLanguages',
      learningLanguages: 'getLearningLanguages',
      languageOptions: 'getLanguages',
    }),
  },
  methods: {
    ...mapMutations([
    	'setCustomizationStep',
      'setNativeLanguages',
      'setLearningLanguages',
      'setLanguages',
    ]),
    ...mapActions([
      'updateUser',
    ]),
  	previousPage() {
      vm.setCustomizationStep(2);
      vm.$router.push({ path: '/select-hashtags' });
    },
    prepareNativeLanguages(nativeLang) {
      nativeLang.forEach((nLang) => {
        vm.nativeLanguagesArray.push({"name": nLang.name, "native": nLang.native, rating: 5});
      });
      vm.setNativeLanguages(vm.nativeLanguagesArray);     
    },
    prepareLearningLanguages(learningLang) {
      learningLang.forEach((lLang) => {
        vm.learningLanguagesArray.push({"name": lLang.name, "native": lLang.native, rating: 0});
      });
      vm.setLearningLanguages(vm.learningLanguagesArray);
    },
  	nextPage() {
      vm.setCustomizationStep(4);
     
    
      if(!vm.nativeLanguages.length) {
        vm.$toasted.show('Please select at least one native language to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });

        return;
      }

      if(!vm.learningLanguages.length) {
        vm.$toasted.show('Please select at least one learning language to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });

        return;

      }
      vm.$router.push({ path: '/user-bio' });
    },

    backToProfile() {
      vm.$router.push({ name: 'my-profile', params: {  usersProfile: true } });
    },
    async updateUserLanguages() {


      if(vm.nativeLanguages <= 0) {
        vm.$toasted.show('Please select at least one native language to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });

        return;
      }

      if(vm.learningLanguages <= 0) {
        vm.$toasted.show('Please select at least one learning language to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });

        return;

      }

      let userDetailsUpdatedSuccessfully = false;
      const userDetails = {
        userId: vm.$store.state.userId,
        languages: {
          native: vm.nativeLanguages,
          learning: vm.learningLanguages,
        },
      };

      try {
        await vm.updateUser(userDetails);
        userDetailsUpdatedSuccessfully = true;
      }
      catch (error) {
        console.log(error);
      }
      finally {
        if(userDetailsUpdatedSuccessfully) {
          vm.$toasted.show('User languages updated successfully',{ 
              theme: "bubble", 
              position: "top-right", 
              duration : 3000
          });
        }
      }

    }
  },
};

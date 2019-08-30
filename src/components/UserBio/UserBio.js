import { mapGetters, mapMutations, mapActions } from 'vuex';

let vm = null;
export default {
  name: 'UserBio',
  data() {
    return {
      userBioValue: '',
    };
  },
  created() {
    vm = this;
    // set the current step
    vm.setCustomizationStep(4);

    vm.userBioValue = vm.userBio;
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      // the current customization step
      customizationStep: 'getCustomizationStep',
      // the user's id
      userId: 'getUserId',
       // for the hair
      avatarHair: 'getAvatarHairOption',
      // for the accessories
      avatarAccessories: 'getAvatarAccessoriesOption',
      // for the facial hair
      avatarFacialHair: 'getFacialHairOption',
      // for the facial hair
      avatarFacialHairColor: 'getFacialHairColorOption',
      // for the hair color
      avatarHairColor: 'getAvatarHairColorOption',
      // for the clothes
      avatarClothes: 'getAvatarClothesOption',
      // for the skin color
      avatarSkinColor: 'getAvatarSkinColorOption',
      // for the hash tags
      userTags: 'getUserTags',
      // for the languages
      nativeLanguages: 'getNativeLanguages',
      learningLanguages: 'getLearningLanguages',
      // for the bio
      userBio: 'getUserBio',
    }),
  },
  methods: {
    ...mapMutations([
    	'setCustomizationStep',
      'setUserBio',
      'setUserSetup'
    ]),
     ...mapActions([
      'updateUser',
    ]),
  	previousPage() {
      vm.setCustomizationStep(3);
      vm.$router.push({ path: '/select-languages' });
    },
  	async completeRegistration() {
      if(!vm.userBioValue.trim().length) {

        vm.$toasted.show('Please enter a user bio to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration: 3000
        });

      } else {
        
        let userDetailsUpdatedSuccessfully = false;
        const userDetails = {
          userId: vm.userId,
          setup: true,
          avatar: {
              avatarHair: vm.avatarHair,
              avatarHairColor: vm.avatarHairColor,
              avatarAccessories: vm.avatarAccessories,
              avatarFacialHair: vm.avatarFacialHair,
              avatarFacialHairColor: vm.avatarFacialHairColor,
              avatarClothes: vm.avatarClothes,
              avatarSkinColor: vm.avatarSkinColor
          },
          tags: vm.userTags,
          languages: {
            native: vm.nativeLanguages,
            learning: vm.learningLanguages,
          },
          bio: vm.userBio,
          grade: "",
          gradeAvailable: false
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
            vm.setUserSetup(true);
            vm.$router.push({ name: 'my-community' });
          }
        }

      }

    },
  },
};

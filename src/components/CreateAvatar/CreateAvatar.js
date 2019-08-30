
import { mapGetters, mapMutations, mapActions } from 'vuex';

let vm = null;
export default {
  name: 'CreateAvatar',
  data() {
  	return {
      hairValue: this.hairOptionValue,
      accessoriesValue: this.accessoriesOptionValue,
      facialHairValue: this.facialHairOptionValue,
      facialHairColorValue: this.facialHairColorOptionValue,
      hairColorValue: this.hairColorOptionValue,
      clothesValue: this.clothesOptionValue,
      skinColorValue: this.skinColorOptionValue,
      modifyAvatar: false
  	};
  },
  created() {
    vm = this;
    // set the current step
    vm.setCustomizationStep(1);
    // set the modification flag
    vm.modifyAvatar = vm.$route.params.modifyAvatar;
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      customizationStep: 'getCustomizationStep',
      // for the hair
      hairOptionValue: 'getAvatarHairOption',
      hairOptions: 'getAvatarHairOptions',
      // for the accessories
      accessoriesOptionValue: 'getAvatarAccessoriesOption',
      accessoriesOptions: 'getAvatarAccessoriesOptions',
      // for the facial hair
      facialHairOptionValue: 'getFacialHairOption',
      facialHairOptions: 'getFacialHairOptions',
      // for the facial hair
      facialHairColorOptionValue: 'getFacialHairColorOption',
      facialHairColorOptions: 'getFacialHairColorOptions',
      // for the hair color
      hairColorOptionValue: 'getAvatarHairColorOption',
      hairColorOptions: 'getAvatarHairColorOptions',
      // for the clothes
      clothesOptionValue: 'getAvatarClothesOption',
      clothesOptions: 'getAvatarClothesOptions',
      // for the skin color
      skinColorOptionValue: 'getAvatarSkinColorOption',
      skinColorOptions: 'getAvatarSkinColorOptions',
    }),
  },
  methods: {
    ...mapMutations([
      'setAvatarHairOption',
      'setAvatarAccessoriesOption',
      'setAvatarFacialHairOption',
      'setAvatarFacialHairColorOption',
      'setAvatarHairColorOption',
      'setAvatarClothesOption',
      'setAvatarSkinColorOption',
      'setCustomizationStep',
      'setUserAvatarSetUp',
    ]),
    ...mapActions([
      'updateUser',
    ]),
    nextPage() {
      vm.setCustomizationStep(2);
      vm.setUserAvatarSetUp(true);
      vm.$router.push({ path: '/select-hashtags' });
    },
    backToProfile() {
      vm.$router.push({ name: 'my-profile', params: {  usersProfile: true } });
    },
    async updateUserAvatar() {

        let userDetailsUpdatedSuccessfully = false;
        const userDetails = {
          userId: vm.$store.state.userId,
          avatar: {
              avatarHair: vm.hairOptionValue,
              avatarHairColor: vm.hairColorOptionValue,
              avatarAccessories: vm.accessoriesOptionValue,
              avatarFacialHair: vm.facialHairOptionValue,
              avatarFacialHairColor: vm.facialHairColorOptionValue,
              avatarClothes: vm.clothesOptionValue,
              avatarSkinColor: vm.skinColorOptionValue
          }
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
            vm.$toasted.show('User avatar updated successfully',{ 
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });
          }
        }

    }
  },
};

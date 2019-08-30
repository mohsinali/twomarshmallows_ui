import { mapGetters, mapActions, mapMutations } from 'vuex';

let vm = null;
export default {
  name: 'MyProfile',
  data() {
  	return {
  		member:{},
      editUsersBio: false,
      editUsersTags: false,
  	}
  },
  created() {
    vm = this;

    vm.member = {
        avatar: {
            hairOptionValue: vm.$store.state.avatarHairOption,
            accessoriesOptionValue: vm.$store.state.avatarAccessoriesOption,
            facialHairOptionValue:vm.$store.state.avatarFacialHairOption,
            facialHairColorOptionValue: vm.$store.state.avatarFacialHairColorOption,
            clothesOptionValue: vm.$store.state.avatarClothesOption,
            skinColorOptionValue: vm.$store.state.avatarSkinColorOption,
        },
        tags: vm.$store.state.userTags,
        fullname: vm.$store.state.username,
        languages:{ native : vm.$store.state.nativeLanguages, learning: vm.$store.state.learningLanguages} ,
        bio: vm.$store.state.userBio,
    };
    
   
  },
  methods: {
    ...mapMutations([
      'setUserBio',
      'setUserTags',
    ]),
    ...mapActions([
      'updateUser',
    ]),
    editUserAvatar() {
       vm.$router.push({ name: 'modify-avatar', params: {  modifyAvatar: true } });
    },
    editBio() {
      vm.editUsersBio = !vm.editUsersBio;
    },
    editTags() {
      vm.editUsersTags = !vm.editUsersTags;
    },
    modifyUserTags() {
      vm.$router.push({ name: 'modify-hashtags', params: {  modifyHashTags: true } });
    },
    modifyUserLanguages() {
      vm.$router.push({ name: 'modify-languages', params: {  modifyLanguages: true } });
    },
    async updateUserDetails(userDetails, detailType) {
        let userDetailsUpdatedSuccessfully = false;
        try {
          await vm.updateUser(userDetails);
          userDetailsUpdatedSuccessfully = true;
        }
        catch (error) {
          console.log(error);
        }
        finally {
          if(userDetailsUpdatedSuccessfully) {
            vm.$toasted.show(detailType + ' updated successfully',{ 
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });
          }
        }
    },
    updateBio(userBio) {
      vm.editUsersBio = !vm.editUsersBio;
        
      const userDetails = {
        userId: vm.$store.state.userId,
        bio: userBio
      };

      vm.updateUserDetails(userDetails, "User bio");
        
    },
    updateTags() {
      vm.editUsersTags = !vm.editUsersTags;

      vm.setUserTags(vm.member.tags);

      const userDetails = {
        userId: vm.$store.state.userId,
        tags: vm.member.tags
      };

      vm.updateUserDetails(userDetails, "User tags");
    },
    deleteTag(tagIndex) {
      vm.member.tags.splice(tagIndex,1);
    }
  }
};
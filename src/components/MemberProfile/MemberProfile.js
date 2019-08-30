import { mapGetters, mapActions, mapMutations } from 'vuex';

let vm = null;
export default {
  name: 'MemberProfile',
  data() {
  	return {
  		member:{},
      editUsersBio: false,
      editUsersTags: false,
  	}
  },
  created() {
    vm = this;
    
    vm.member = vm.$route.params.member;
   
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
    },
  	goBackToCommunity() {
  		vm.$router.push({ name: 'my-community' });
  	}
  }
};
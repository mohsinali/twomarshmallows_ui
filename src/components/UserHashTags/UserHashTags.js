import { mapGetters, mapMutations, mapActions } from 'vuex';

let vm = null;
export default {
  name: 'SelectHashTags',
  props: {},
  data() {
    return {
      tags: [
        { value: '#love', selected: false },
        { value: '#life', selected: false },
        { value: '#sport', selected: false },
        { value: '#art', selected: false },
        { value: '#legoman', selected: false },
        { value: '#party', selected: false },
        { value: '#travel', selected: false },
        { value: '#design', selected: false },
        { value: '#summer', selected: false },
        { value: '#education', selected: false },
        { value: '#peace', selected: false },
        { value: '#technology', selected: false },
        { value: '#business', selected: false },
        { value: '#language', selected: false },
        { value: '#canada', selected: false },
        { value: '#space', selected: false },
        { value: '#science', selected: false },
        { value: '#nature', selected: false },
        { value: '#kenya', selected: false },
        { value: '#music', selected: false },
        { value: '#programming', selected: false },
        { value: '#A.I', selected: false },
        { value: '#history', selected: false },
        { value: '#cuisines', selected: false },
        { value: '#religion', selected: false },
      ],
      selectedTags: [],
      tagProgress: 0,
      max: 4,
      ownTag: '',
      modifyHashTags: false
    };
  },
  created() {
    vm = this;
    // set the current step
    vm.setCustomizationStep(2);
    // set the user tags for the state
    vm.setTagsFromState(vm.userTags);
    // set the user tag keys
    vm.tags.forEach((tag, index) => {
      tag.id = Math.floor((Math.random() * 10000000));
    });

    // set the modification flag
    vm.modifyHashTags = vm.$route.params.modifyHashTags;
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      customizationStep: 'getCustomizationStep',
      // for the hash tags
      userTags: 'getUserTags',
    }),
  },
  methods: {
    ...mapMutations([
    	'setCustomizationStep',
      'setUserTags',
    ]),
    ...mapActions([
      'updateUser',
    ]),
  	previousPage() {
      vm.setCustomizationStep(1);
      vm.$router.push({ path: '/create-avatar' });
    },
  	nextPage() {
      if (vm.selectedTags.length >= 2) {
        vm.setCustomizationStep(3);
        vm.$router.push({ path: '/select-languages' });
      }
      else {
        vm.$toasted.show('Please select at least two tags to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });
      }
      
    },
    setTagsFromState(stateTags) {
      for (var i = 0; i < stateTags.length; i++) {
        const index = vm.tags.findIndex(e => e.value === stateTags[i]);

        if (index <= -1) {
          vm.tags.push({ value: stateTags[i], selected: true, id: Math.floor((Math.random() * 10000000)) });
        } else {
          vm.tags[index].selected = true;
        }
      }
      vm.selectedTags = stateTags;
      vm.tagProgress = stateTags.length;
    },
    selectUnselectTag(index) {
      const tag = vm.tags[index];

      if (!vm.selectedTags.includes(tag.value)) {
        vm.selectedTags.push(tag.value);
        tag.selected = true;
      } else {
        const selectedTagIndex = vm.selectedTags.findIndex(e => e === tag.value);
        vm.selectedTags.splice(selectedTagIndex, 1);
        tag.selected = false;
      }
      vm.tagProgress = vm.selectedTags.length;

      // update the user tags state
      vm.setUserTags(vm.selectedTags);
    },
    addOwnTag() {
      if (vm.ownTag) {
        if (vm.ownTag.indexOf('#') <= -1) {
          vm.ownTag = `#${vm.ownTag}`;
        }
        vm.tags.push({ value: vm.ownTag, selected: true });
        vm.selectedTags.push(vm.ownTag);
        vm.tagProgress = vm.selectedTags.length;
        // update the user tags state
        vm.setUserTags(vm.selectedTags);
        vm.ownTag = '';
      }
    },
    backToProfile() {
      vm.$router.push({ name: 'my-profile', params: {  usersProfile: true } });
    },
    async updateUserHashTags() {

      if (vm.selectedTags.length < 2) {

        vm.$toasted.show('Please select at least two tags to continue',{ 
            theme: "bubble", 
            position: "top-right", 
            duration : 3000
        });

        return;
      }

      let userDetailsUpdatedSuccessfully = false;
        const userDetails = {
          userId: vm.$store.state.userId,
          tags: vm.userTags
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
            vm.$toasted.show('User tags updated successfully',{ 
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });
          }
        }

    }

  },
};

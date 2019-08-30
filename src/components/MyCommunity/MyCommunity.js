import { mapGetters, mapActions, mapMutations } from 'vuex';

let vm = null;
export default {
  name: 'MyCommunity',
  data() {
    return {
      language_rating_active: '',
      language_rating_array: new Array(5),
      numOfCommunityMembers: 0
     
    };
  },
  created() {
    vm = this;

    vm.numOfCommunityMembers =  vm.communityMembers.length;
  
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      communityMembers: 'getCommunityMembers',
    })
  },
  mounted() {
    vm.language_rating_active = require('@/assets/language-rating-active.png');
  },
  methods: {
    ...mapActions([
      'fetchCommunities'
    ]),
     ...mapMutations([
      'setCommunityMembers',
    ]),
    showLinks(index) {
      vm.communityMembers[index].showMemberLinks = true;
      vm.setCommunityMembers(vm.communityMembers);
      setTimeout(() => { vm.hideLinks(index); }, 5000);
    },
    hideLinks(index) {
      vm.communityMembers[index].showMemberLinks = false;
      vm.setCommunityMembers(vm.communityMembers);
    }
  }
  

};
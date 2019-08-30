import { mapGetters, mapMutations } from 'vuex';

let vm = null;
export default {
  name: 'Sidebar',
  data() {
    return {
      sidebarLinks: [
        {name: 'My Community', icon: 'users', isActive: false},
        {name: 'Chats', icon: 'comments', isActive: false},
        {name: 'My Profile', icon: 'user', isActive: false},
        {name: 'My Class', icon: 'graduation-cap', isActive: false},
        {name: 'Settings', icon: 'cog', isActive: false}
      ]
    };
  },
  created() {
    vm = this;
    vm.makeLinkActive(vm.currentActiveSidebarLink);
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      userIsTutor: 'checkIfUserIsTutor',
      currentActiveSidebarLink: 'getCurrentActiveSidebarLink'
    }),
  },
  methods: {
     ...mapMutations([
      'setCurrentActiveSidebarLink',
    ]),
  	makeLinkActive(index) {
      vm.sidebarLinks[vm.currentActiveSidebarLink].isActive = false;
      vm.sidebarLinks[index].isActive = true;
      vm.setCurrentActiveSidebarLink(index);
      
      if (index === 0) {
        vm.$router.push({ name: 'my-community'});
      }

      if (index === 1) {
        vm.$router.push({ path: '/chats' });
      }

      if (index === 2) {
        vm.$router.push({ name: 'my-profile' });
      }

      if (index === 3) {
        vm.$router.push({ name: 'my-class' });
      }

      if (index === 4) {
        vm.$router.push({ path: '/settings' });
      }
     
    },
  },
};


import { mapGetters, mapMutations } from 'vuex';
import { languagesAll } from 'countries-list';

let vm = null;
export default {
  name: 'Header',
  props: {},
  data() {
  	return {
  	  logo_header: '',
  	};
  },
  created() {
    vm = this;

    const languagesArray = [];
    for (const language in languagesAll) {
      languagesArray.push(languagesAll[language]);
    }

    vm.setLanguages(languagesArray);
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      // login vars
      username: 'getUsername',
      userVerified: 'getUserVerified',
      userLoggedIn: 'isUserLoggedIn',

      // check if the avatar is setup
      userAvatarSetup: 'getUserAvatarSetup',
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
  mounted() {
    vm.logo_header = require('@/assets/logo-header.svg');
  },
  methods: {
    ...mapMutations([
      'setLanguages',
      'setUserLoggedIn',
      'setUsername',
    ]),
    logout() {
      vm.setUserLoggedIn(false);
      vm.setUsername('');
      sessionStorage.removeItem('twomarshmallows');
      vm.$router.push({ name: 'login'});
    },
  },
};

export default {
  	showAppHeader(state) {
      return state.showHeader;
  	},
  	// get the login options
    getUserId(state) {
      return state.userId;
    },
    getUsername(state) {
      return state.username;
    },
    getUserVerified(state) {
      return state.userVerified;
    },
    getUserSetup(state) {
      return state.userSetup;
    },
    isUserLoggedIn(state) {
  	  return state.userLoggedIn;
  	},
  	// account customization options
    getCustomizationStep(state) {
      return state.customizationStep;
    },
    // get the avatar options
    getUserAvatarSetup(state) {
      return state.userAvatarSetup;
    },
    getAvatarHairOption(state) {
      return state.avatarHairOption;
    },
    getAvatarHairOptions(state) {
      return state.avatarHairOptions;
    },
    getAvatarAccessoriesOption(state) {
      return state.avatarAccessoriesOption;
    },
    getAvatarAccessoriesOptions(state) {
      return state.avatarAccessoriesOptions;
    },
    getFacialHairOption(state) {
      return state.avatarFacialHairOption;
    },
    getFacialHairOptions(state) {
      return state.avatarFacialHairOptions;
    },
    getFacialHairColorOption(state) {
      return state.avatarFacialHairColorOption;
    },
    getFacialHairColorOptions(state) {
      return state.avatarFacialHairColorOptions;
    },
    getAvatarHairColorOption(state) {
      return state.avatarHairColorOption;
    },
    getAvatarHairColorOptions(state) {
      return state.avatarHairColorOptions;
    },
    getAvatarClothesOption(state) {
      return state.avatarClothesOption;
    },
    getAvatarClothesOptions(state) {
      return state.avatarClothesOptions;
    },
    getAvatarSkinColorOption(state) {
      return state.avatarSkinColorOption;
    },
    getAvatarSkinColorOptions(state) {
      return state.avatarSkinColorOptions;
    },
    // get the user tags
    getUserTags(state) {
      return state.userTags;
    },
    // get the languages
    getLanguages(state) {
      return state.languages;
    },
    getNativeLanguages(state) {
      return state.nativeLanguages;
    },
    getLearningLanguages(state) {
      return state.learningLanguages;
    },
    // get the user bio
    getUserBio(state) {
      return state.userBio;
    },
    // check if the user is a tutor
    checkIfUserIsTutor(state) {
      return state.userIsTutor;
    },
    // get the current active sidebar link
    getCurrentActiveSidebarLink(state) {
      return state.currentActiveSidebarLink;
    },
    // get the community members
    getCommunityMembers(state) {
      return state.communityMembers;
    },
    // for the chats
    getUserChatrooms(state) {
      return state.userChatrooms;
    },
    getActiveChatroom(state) {
      return state.activeChatroom;
    },
    getUserChats(state) {
      return state.userChats;
    }

};

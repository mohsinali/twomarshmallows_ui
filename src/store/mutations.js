export default {
  	// App Mutations
  	setShowAppHeader(state, payload) {
  		state.showHeader = payload;
  	},
  	// Login Mutations
  	setUserLoggedIn(state, payload) {
  		state.userLoggedIn = payload;
  	},
    setUserId(state, payload) {
      state.userId = payload;
    },
    setUsername(state, payload) {
      state.username = payload;
    },
    setUserVerified(state, payload) {
      state.userVerified = payload;
    },
    setUserSetup(state, payload) {
      state.userSetup = payload;
    },
    // Avatar Mutations
    setUserAvatarSetUp(state, payload) {
      state.userAvatarSetup = payload;
    },
    setAvatarHairOption(state, payload) {
      state.avatarHairOption = payload;
    },
    setAvatarAccessoriesOption(state, payload) {
      state.avatarAccessoriesOption = payload;
    },
    setAvatarFacialHairOption(state, payload) {
      state.avatarFacialHairOption = payload;
    },
    setAvatarFacialHairColorOption(state, payload) {
      state.avatarFacialHairColorOption = payload;
    },
    setAvatarHairColorOption(state, payload) {
      state.avatarHairColorOption = payload;
    },
    setAvatarClothesOption(state, payload) {
      state.avatarClothesOption = payload;
    },
    setAvatarSkinColorOption(state, payload) {
      state.avatarSkinColorOption = payload;
    },
    // Customization Steps Mutations
    setCustomizationStep(state, payload) {
      state.customizationStep = payload;
    },
    // User Tags
    setUserTags(state, payload) {
      state.userTags = payload;
    },
    // Language mutations
    setLanguages(state, payload) {
      state.languages = payload;
    },
    setNativeLanguages(state, payload) {
      state.nativeLanguages = payload;
    },
    setLearningLanguages(state, payload) {
      state.learningLanguages = payload;
    },
    // User Bio Mutations
    setUserBio(state, payload) {
      state.userBio = payload;
    },
    // set currenct active sidebar link
    setCurrentActiveSidebarLink(state, payload) {
      state.currentActiveSidebarLink = payload;
    },
    // Flag as a tutor
    setUserAsTutor(state, payload) {
      state.userIsTutor = payload;
    },
    // set the community members
    setCommunityMembers(state, payload) {
      state.communityMembers = payload;
    },
    // for the chats
    setUserChatrooms(state, payload) {
      state.userChatrooms = payload;
    },
    setActiveChatroom(state, payload) {
      state.activeChatroom = payload;
    },
    setUserChats(state, payload) {
      state.userChats = payload;
    }

};

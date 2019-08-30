'use strict';
import axios from 'axios';

if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = 'http://localhost:3000';
}
export default {

	registerUser(context, payload) {
	    return new Promise((resolve, reject) => {
	        axios
	        .post('/users/register', payload)
	        .then((response) => {
	          resolve();
	        })
	        .catch(error => reject(error));
	    });
  	},

  	loginUser(context, payload) {
  		return new Promise((resolve, reject) => {
  			axios
	        .post('/users/login', payload)
	        .then((response) => {
	          const { setup, verified, fullname, avatar, languages, tags, country, bio, userIsTutor } = response.data.loginResult.userDetails;
	        
	          context.commit('setUserLoggedIn', true);
	          context.commit('setUserSetup', setup);
	          context.commit('setUserVerified', verified);
	          context.commit('setUsername', fullname);
	          context.commit('setUserAsTutor', userIsTutor);

	          // if the user has been setup, update the state with their profile options
	          if (setup) {
	          	const { avatarAccessories, avatarClothes, avatarFacialHair, avatarFacialHairColor, avatarHair, avatarHairColor, avatarSkinColor } = avatar;
	            const { learning, native } = languages;

	          	context.commit('setAvatarHairOption', avatarHair);
	          	context.commit('setAvatarAccessoriesOption', avatarAccessories);
	          	context.commit('setAvatarFacialHairOption', avatarFacialHair);
	          	context.commit('setAvatarFacialHairColorOption', avatarFacialHairColor);
	          	context.commit('setAvatarClothesOption',avatarClothes);
	          	context.commit('setAvatarSkinColorOption', avatarSkinColor);
	          	context.commit('setUserTags', tags);
	          	context.commit('setNativeLanguages', native);
	          	context.commit('setLearningLanguages', learning);
	          	context.commit('setUserBio', bio);
	          	context.commit('setUserAvatarSetUp', true);
	          }
	         
	          resolve();   
	        })
	        .catch(error => {
	        	reject(error)
	        });
  		});
  	},

  	updateUser(context,payload) {
  		return new Promise((resolve, reject) => {
  			axios
	        .put(`/users/${payload.userId}`, payload)
	        .then((response) => {
	          resolve();
	        })
	        .catch(error => reject(error));

  		});
  	},

  	setOrUpdateChatrooms(context, payload) {
		return new Promise((resolve, reject) => {
  			axios
	        .put(`/chatrooms`, payload)
	        .then((response) => {
	          resolve();
	        })
	        .catch(error => reject(error));

  		});
  	},

  	setOrUpdateChats(context, payload) {
		return new Promise((resolve, reject) => {
  			axios
	        .put(`/chats`, payload)
	        .then((response) => {
	          resolve();
	        })
	        .catch(error => reject(error));

  		});
  	},


};

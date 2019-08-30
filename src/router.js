import Vue from 'vue';
import Router from 'vue-router';
import MainContainer from './views/MainContainer.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
// child components to render in the home page
import RegComplete from './components/RegComplete/RegComplete.vue';
import CreateAvatar from './components/CreateAvatar/CreateAvatar.vue';
import UserHashTags from './components/UserHashTags/UserHashTags.vue';
import UserLanguages from './components/UserLanguages/UserLanguages.vue';
import UserBio from './components/UserBio/UserBio.vue';
import Home from './components/Home/Home.vue';
import MyCommunity from './components/MyCommunity/MyCommunity.vue';
import Chats from './components/Chats/Chats.vue';
import MemberProfile from './components/MemberProfile/MemberProfile.vue';
import MyProfile from './components/MyProfile/MyProfile.vue';
import MyClass from './components/MyClass/MyClass.vue';
import ChangePassword from './components/ChangePassword/ChangePassword.vue';
import AddNewStudent from './components/AddNewStudent/AddNewStudent.vue';

Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      name: 'main-container',
      component: MainContainer,
      children: [
        {
          path: 'reg-complete',
          name: 'registration-complete',
          component: RegComplete,
        },
        {
          path: 'create-avatar',
          name: 'create-avatar',
          component: CreateAvatar,
        },
        {
          path: 'modify-avatar',
          name: 'modify-avatar',
          component: CreateAvatar,
        },
        {
          path: 'select-hashtags',
          component: UserHashTags,
        },
        {
          path: 'modify-hashtags',
          name: 'modify-hashtags',
          component: UserHashTags,
        },
        {
          path: 'select-languages',
          component: UserLanguages,
        },
        {
          path: 'modify-languages',
          name: 'modify-languages',
          component: UserLanguages,
        },
        {
          path: 'user-bio',
          component: UserBio,
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
          children: [
                  {
                    path: '/community',
                    name: 'my-community',
                    component: MyCommunity,
                  },
                  {
                    path: '/chats',
                    name: 'chats',
                    component: Chats,
                  },
                  {
                    path: '/member-profile',
                    name: 'member-profile',
                    component: MemberProfile,
                  },
                  {
                    path: '/my-profile',
                    name: 'my-profile',
                    component: MyProfile,
                  },
                  {
                    path: '/class',
                    name: 'my-class',
                    component: MyClass,
                  },
                  {
                    path: '/add-student',
                    name: 'add-student',
                    component: AddNewStudent,
                  },
                  {
                    path: '/settings',
                    name: 'settings',
                    component: ChangePassword,
                  }]
        }

      ],
    },
    // {
    //  path: '/about',
    //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */// './views/About.vue'),
    // }
  ],
});

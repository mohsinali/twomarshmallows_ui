import { mapGetters, mapActions, mapMutations } from 'vuex';

let vm = null;
export default {
  name: 'Chats',
  data() {
    return {
      chats: [],
      newChat: ""
    };
  },
  created() {
    vm = this;
  },
  mounted() {
    vm.loadChats(vm.activeChatroom);
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      activeChatroom: 'getActiveChatroom',
      chatrooms: 'getUserChatrooms',
      userChats: 'getUserChats',
      userId: 'getUserId'
    })
  },
  methods: {
    ...mapActions([
      'setOrUpdateChatroom',
      'setOrUpdateChats',
    ]),
     ...mapMutations([
      'setActiveChatroom',
      'setUserChatrooms',
      'setUserChats'
    ]),
    loadChats(index) {
      // set the active chatroom
      vm.chatrooms[vm.activeChatroom].active = false;
      vm.chatrooms[index].active = true;
      vm.setActiveChatroom(index);
      // the load the chats for that chatroom
      vm.chats = vm.userChats.filter((chat) => chat.chatroomId ===  vm.chatrooms[index].id);
    },
    likeUnlikeChat(index) {

    }

  }
}
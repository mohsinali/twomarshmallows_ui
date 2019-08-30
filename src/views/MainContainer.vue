<template>
  <div class="main-container">
    <Header v-if="showHeader" />
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
.main-container {
  margin: 0;
  padding: 0;
}

.app-content {
  width: 100%;
}

@media (max-width: 767px) {
  .app-content {
    margin-top: 10px;
  }
}
</style>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import { mapGetters } from "vuex";

let vm = null;
export default {
  name: "main-container",
  components: {
    Header
  },
  data() {
    return {
      showHeader: false
    };
  },
  created() {
    vm = this;
    vm.showHeader = vm.header;
    vm.$router.push({ name: 'create-avatar' });
    // if (!vm.userLoggedIn && vm.$route.name !== "registration-complete") {
    //   vm.$router.push({ name: "login" });
    //   return;
    // }
    // if (vm.userLoggedIn && !vm.userSetup) {
    //   vm.$router.push({ name: "create-avatar" });
    //   return;
    // }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      userLoggedIn: "isUserLoggedIn",
      header: "showAppHeader",
      userSetup: "getUserSetup"
    })
  }
};
</script>

<template>
  <m-layout :logo="logo"
            :routes="routes"
            :breadcrumb="breadcrumb"
            :user-info="userInfo">
    <i class="el-icon-bell"
       slot="header-right"></i>
    <router-view slot="view"></router-view>
  </m-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  // mock
  // layout
  logo = require("./assets/images/logo.png");

  get routes(): any[] {
    // @ts-ignore
    return this.$router.options.routes;
  }

  get breadcrumb() {
    return this.$route.matched.map(route => route.meta.title);
  }

  /** 用户数据 */
  userInfo = {
    name: "用户名",
    avatar:
      "http://thirdwx.qlogo.cn/mmopen/vi_32/qh1wmJHk0LMSnj3cVT7QlRbNJNoyianTia7LcQYTniclDHuTer7cqXEicg3Wg8BXRLPR5BzRKSM8ibvct3PBrnciakrA/132",
  };
}
</script>
  
<style lang="scss" scoped>
</style>

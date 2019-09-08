<template>
  <el-container class="admin">
    <el-header class="admin__header">
      <div class="admin__center admin__center--flex">
        <img class="admin__header--logo"
             :src="logo" />
        <div class="admin__header--user">
          <slot name="header-right"></slot>
          <img class="user--avatar"
               :src="userInfo.avatar" />
          <div class="user--name">用户名</div>
          <el-dropdown trigger="click">
            <i class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户设置</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container class="admin__content admin__center">
      <el-aside class="admin__aside"
                width="180px">
        <div class="admin__aside--shop">
          <img src="http://wx.qlogo.cn/mmopen/G6laqcPSNfxKehdSKdQVnp7rlo33KEQqmjM3SMFCYvAMLYNCjAQjs5kjn1M0VbsicOlcDAL5PH5kTbzubREQVOfZufGjFy0DW/0"
               class="shop--logo">
          <el-dropdown placement="bottom">
            <div class="shop--name">笔歌拼团<i class="el-icon-arrow-down"></i></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>笔歌拼团</el-dropdown-item>
              <el-dropdown-item>笔歌拼团2</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-menu :default-active="active"
                 @select="onSelect">
          <template v-for="(item,i) of routes">
            <template v-if="item.children">
              <el-submenu :key="i"
                          :index="i.toString()">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ item.meta && item.meta.title}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="(sItem) of item.children"
                                :key="item.path+'/'+sItem.path"
                                :index="item.path+'/'+sItem.path">{{ sItem.meta && sItem.meta.title}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :key="i"
                            :index="item.path">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.meta && item.meta.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-main class="admin__main">
        <div class="admin__main--breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="item of breadcrumb"
                                :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="admin__main--content">
          <slot name="view"></slot>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MLayout extends Vue {
  /**
   * 布局数据
   */
  @Prop({
    type: Array,
    default() {
      return [];
    },
  })
  routes: any[];

  @Prop({
    type: Array,
  })
  breadcrumb: string[];

  @Prop({
    type: String,
  })
  logo: string;

  /**
   * 用户数据
   */
  @Prop({
    type: Object,
    default() {
      return { avatar: "", name: "" };
    },
  })
  userInfo: {
    avatar: string;
    name: string;
  };

  get active() {
    return this.$route.fullPath;
  }

  onSelect(item) {
    this.$router.push(item);
  }
}
</script>
  
<style lang="scss">
@import "../assets/styles/m-layout.scss";
</style>

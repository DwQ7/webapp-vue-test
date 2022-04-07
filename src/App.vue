<template>
  <router-view v-slot="{Component}" >
    <keep-alive exclude="DetailView">
      <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
  </router-view>

</template>

<script>

import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import Compute from "@/components/Compute";
import NavBar from "@/components/common/navbar/NavBar";
import HomeView from "@/views/home/HomeView";
import ManyButton from "@/components/common/button/ManyButton";
import {testRequest} from "@/network/test";
export default {
  name:'App',
  components:{
  },
}
</script>

<style>
  /*style中引用css固定写法*/
  @import "./assets/css/base.css";

</style>

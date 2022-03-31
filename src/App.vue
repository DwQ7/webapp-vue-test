<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive" />
    </keep-alive>
  </router-view>
  <main-tab-bar/>
</template>

<script>

import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import Compute from "@/components/Compute";
import NavBar from "@/components/common/navbar/NavBar";
import HomeView from "@/views/home/HomeView";
import ManyButton from "@/components/common/button/ManyButton";
export default {
  name:'App',
  data(){
    return{
      userId:'lisa'
    }
  },
  components:{
    HomeView,
    MainTabBar,
    NavBar,
    Compute,
    ManyButton
  }
}
</script>

<style>
  /*style中引用css固定写法*/
  @import "./assets/css/base.css";

</style>

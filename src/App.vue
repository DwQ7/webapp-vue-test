<template>
  <router-view/>
<!--  <div style="height: 5rem;"></div>-->

  <main-tab-bar/>
<!--    <router-link to="/childComps" >Home</router-link> |-->
<!--    <router-link to="/test">About</router-link> |-->
<!--    <router-link to="/about">Test</router-link> |-->
<!--    <router-link :to="{path:'/user/'+userId,query:{name:userId,age:'19',height:188,weight:'70kg'}}">User</router-link>-->
<!--    <router-view/>-->
<!--    <compute/>-->
<!--  <h2>{{this.$store.state.username}}</h2>-->
<!--  <h2>{{this.$store.state.counter}}</h2>-->
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

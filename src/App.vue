<template>
  <nav-bar class="home_nav">
    <template #center>桃堡</template>
  </nav-bar>
  <router-view/>
  <main-tab-bar/>
<!--    <router-link to="/home" >Home</router-link> |-->
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
    ManyButton,
  }
}
</script>

<style>
  /*style中引用css固定写法*/
  @import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home_nav{
  background: #42b983;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

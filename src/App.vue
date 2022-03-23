<template>
  <nav>
    <router-link to="/home" >Home</router-link> |
    <router-link to="/test">About</router-link> |
    <router-link to="/about">Test</router-link> |
    <router-link :to="{path:'/user/'+userId,query:{name:userId,age:'19',height:188,weight:'70kg'}}">User</router-link>
  </nav>
    <router-view/>
    <compute/>
    <main-tab-bar/>
</template>

<script>

import MainTabBar from "@/components/mainTabBar/MainTabBar";
import Compute from "@/components/Compute";

export default {
  name:'App',
  data(){
    return{
      userId:'lisa'
    }
  },
  components:{
    MainTabBar,
    Compute
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

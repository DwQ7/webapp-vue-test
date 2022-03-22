<template>

  <nav>
    <router-link to="/home" >Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link :to="{path:'/user/'+userId,query:{name:userId,age:'19',height:188,weight:'70kg'}}">User</router-link>
  </nav>
  <keep-alive exclude="">
    <router-view/>
  </keep-alive>

<!--  确定路由对应的组件渲染的位置-->
</template>

<script>

export default {
  name:'App',
  data(){
    return{
      userId:'lisa'
    }
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

<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <h2>Welcome to Your Vue.js App</h2>
    <router-link to="/home/news">News</router-link> |
    <router-link to="/home/messages">Messages</router-link>
    <router-view/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style>
div a{
  font-weight: bold;
  color: #2c3e50;
}
div a.router-link-exact-active {
  color: #42b983;
}
</style>

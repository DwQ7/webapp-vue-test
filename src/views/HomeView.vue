<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Welcome to Your Vue.js App</h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="homeClick">home</button>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld";

export default {
  name: 'AboutView',
  components: {

  },
  methods:{
    homeClick(){
      // this.$router.push('/home');//有返回
      this.$router.replace('/home');//没返回
    },

  }
}
</script>
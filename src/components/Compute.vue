<template>
<div>
  <button @click="addition">+</button> |
  <button @click="subtraction">-</button>|
  <button @click="updateIfo">update</button>
</div>
</template>

<script>
export default {
  name: "Compute",
  methods:{
    addition(){
      this.$store.commit("increment")
    },
    subtraction(){
      this.$store.commit("decrement")
    },
    updateIfo(){
      this.$store.dispatch('aUpdateInfo','qx').then(
        res => {
          console.log('finished')
          console.log(res);
        })
    }
  }
}
</script>

<style scoped>

</style>
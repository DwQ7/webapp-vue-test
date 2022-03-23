<template>
<div>
  <button @click="addition">+</button>
  <button @click="subtraction">-</button>
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
    }
  }
}
</script>

<style scoped>

</style>
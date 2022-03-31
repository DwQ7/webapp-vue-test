<template>
  <el-table v-loading="loading"
            element-loading-text="Loading..."
            style="width: 100%">
  </el-table>
</template>

<script>
export default {
  name: "Loading",
  props:{
    loading:{
      default:false
    }
  }
}
</script>

<style scoped>

</style>
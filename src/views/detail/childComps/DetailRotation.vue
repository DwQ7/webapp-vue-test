<template>
  <el-carousel :interval="2000" height="400px" >
    <el-carousel-item v-for="item in rotatePics" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "DetailRotation",
  props:{
    rotatePics:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.el-carousel__item img{
  padding-top: 6vh;
  width: 100%;
}
</style>
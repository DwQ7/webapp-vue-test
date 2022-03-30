<template>
  <el-carousel :interval="2000" height="250px" >
    <el-carousel-item v-for="item in rotatePics" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "HomeRotation",
  data(){
    return{

    }
  },
  props:{
    banner: {
      type:Array,
      default:[]
    }
  },
  computed:{
    rotatePics:function () {
      return this.banner.map(obj=>{return obj.image})
    }
  }
}
</script>

<style scoped>

.el-carousel__item img{
  padding-top: 5vh;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
</style>
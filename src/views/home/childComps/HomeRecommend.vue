<template>
  <div>
    <h3 v-for="item in recommendPics" :key="item">
      <img :src="item">
    </h3>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:Array
  },
  computed:{
    recommendPics:function () {
      return this.recommend.map(obj=>{return obj.image})
    }
  }
}
</script>

<style scoped>
div{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 130px;
  box-shadow:0px 10px 15px #EDEDED;
}
div img{
  width: 90px;
  height: 90px;
}
</style>
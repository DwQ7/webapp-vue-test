<template>
  <div>
    <h3 v-for="item in recommend" :key="item">
      <a :href="item.link"><img :src="item.image"></a>
    </h3>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:Array
  },
  // computed:{
  //   recommendPics:function () {
  //     return this.recommend.map(obj=>{return obj.image})
  //   }
  // }
}
</script>

<style scoped>
div{
  margin: 5px;
  border-radius: 1rem;
  background-color: var(--el-color-white);
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
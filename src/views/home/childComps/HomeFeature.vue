<template>
  <div>
    <a href="https://www.taobao.com/">
      <img :src="img" >
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  data(){
    return{
      img:require("@assets/images/home/recommend_bg.jpg")
    }
  }
}
</script>

<style scoped>
div{
  background-color: var(--el-color-white);
  text-align: center;
}
img{
  border: none;
  width: 95%;
}
</style>
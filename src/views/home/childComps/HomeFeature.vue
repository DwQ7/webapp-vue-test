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
  padding-top: 10px;
}
img{
  width: 100%;

}
</style>
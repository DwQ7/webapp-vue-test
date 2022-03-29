<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style>
.nav-bar{
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  line-height: 44px;
  height: 5vh;
}
.left,.right{
  background-color: #2c3e50;
}
.center{
  font-size: 22px;
  font-weight: bold;
  /*box-shadow: 0 0 4px 1px #999;*/
  box-shadow: 0 1px 1px rgba(100,100,100,.2);
}
</style>
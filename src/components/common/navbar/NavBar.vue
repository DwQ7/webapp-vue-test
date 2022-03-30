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
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 1;
}
.left,.right{
  /*background-color: ;*/
}
.center{
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.2);
}
</style>
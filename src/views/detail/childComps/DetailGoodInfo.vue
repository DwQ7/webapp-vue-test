<template>
  <div class="good_container" v-if="Object.keys(goodInfo).length !== 0">
    <div class="good_tittle">
      {{this.goodInfo.title}}
    </div>
    <div class="good_price">
    <span>
      {{this.goodInfo.price}}
    </span>
      <span>
      {{this.goodInfo.oldPrice}}
    </span>
      <button :style="{background:this.goodInfo.discountBgColor}">{{this.goodInfo.discountDesc}}</button>
    </div>
    <br>
    <div class="good_other">
      <p>销量:</p><p>收藏:</p><p>72小时发货</p>
    </div>
    <hr>
  </div>
</template>

<script>
import {Bottom} from "@element-plus/icons-vue";
export default {
  name: "DetailGoodInfo",
  components: {Bottom},
  props:{
    goodInfo:{
      type:Object,
      default(){
        return null
      }
    },
  }
}
</script>

<style scoped>
.good_price{
  position: relative;
}
.good_tittle{
  font-size: 1.3rem;
  font-family: "SimHei", Times, serif;
}
.good_price>span:first-child{
  font-size: 2rem;
  color: var(--el-color-primary);
}
.good_price>span:nth-child(2){
  font-size: 1rem;
  text-decoration: line-through;
}
.good_price button{
  color: var(--el-color-white);
  position: absolute;
  top:0;
  border-radius: 1rem;
  border-color: transparent;
  /*background-color: var(--el-color-primary);*/
}
.good_other{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.good_other>p:nth-child(n){
  font-size: 0.9rem;
  margin:0;
  font-weight: lighter;
  justify-self: center;
  align-self: center;
}
.good_other>p:last-child{
  position: absolute;
  right: 0;
}
/*.good_addition{*/
/*  font-size: 1rem;*/
/*  display: grid;*/
/*  grid-template-columns: 1fr 1fr 1fr;*/
/*  box-shadow: 0  1px var(--el-color-black);*/
/*}*/
/*.good_addition>p:nth-child(n){*/
/*  font-weight: lighter;*/
/*  justify-self: center;*/
/*  align-self: center;*/
/*}*/
</style>

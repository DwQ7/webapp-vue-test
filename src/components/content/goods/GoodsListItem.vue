<template>
  <div class="good_list">
    <img :src="goodItem.show.img">
    <div class="good_info">
      <p>{{goodItem.title}}</p>
      <span class="price">￥{{goodItem.price}}</span>
      <el-icon><star /></el-icon>
      <span class="collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodItem:{
      type:Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style scoped>
.good_list{
  float: left;
  width: 48%;
  /*position: relative;*/
  padding: 0 3px 20px 3px;
}
.good_list img{
  width: 100%;
  height: 270px;
  border-radius: 5px;
}
.good_info{
  font-size: 15px;
  overflow: hidden;
  text-align: center;
  /*padding-bottom: 30px;*/
}
.good_info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good_info .price{
  padding-right: 5px;
  color: var(--body-color);
}

</style>
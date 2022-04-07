<template>
  <div class="detail_tab">
    <detail-tab-bar-icons/>
    <div class="detail_tab_button">
      <div>加入购物车</div><div>购买</div>
    </div>
  </div>
</template>

<script>


import DetailTabBarIcons from "@/components/content/detailTabBarIcon/DetailTabBarIcons";

export default {
  name: "DetailTabBar",
  components:{
    DetailTabBarIcons
  }
}
</script>

<style scoped>
.detail_tab{
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  z-index: 99;
  background-color: #FF7A9C;
  height: 7%;
}
.detail_tab_button{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: center;
}
.detail_tab_button>div:first-child{
  padding: 1.5rem 0 1.5rem 0;
  background-color: var(--el-color-danger);
}
.detail_tab_button>div:last-child{
  padding: 1.5rem 0 1.5rem 0;
  background-color: var(--el-color-danger-light-8);
}
</style>
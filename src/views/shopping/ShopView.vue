<template>
  <nav-bar class="shop_nav"><template #center>购物车</template></nav-bar>

  <main-tab-bar/>
</template>

<script>

import LoadingItem from "@/components/common/loading/LoadingItem";
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: 'shopView',
  components:{
    LoadingItem,
    NavBar,
    MainTabBar
  },
  data(){
    return{
      count:5,
      loading:false,
      noMore:false
    }
  },
  methods:{
    load(){
      this.loading = true
      setTimeout(() => {
        this.count += 4
      },500)
    }
  }
}
</script>

<style scoped>
.shop_nav{
  background-color: var(--el-color-primary);
}
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
<template>
  <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
  <ul v-infinite-scroll="load"
      infinite-scroll-delay="1000"
      infinite-scroll-distance="10"
      class="infinite-list"
      style="overflow: auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
<!--    <p v-if="loading" style="text-align:center;">加载中...</p>-->
  </ul>
  <loading-item :loading="true"></loading-item>
</template>

<script>

import LoadingItem from "@/components/common/loading/LoadingItem";

export default {
  name: 'shopView',
  components:{
    LoadingItem
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
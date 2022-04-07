<template>
  <div v-infinite-scroll="getMoreGoodList"
       infinite-scroll-delay="10"
       infinite-scroll-distance="0"
       infinite-scroll-immediate="false"
       :infinite-scroll-disabled="isLoading">
    <goods-list-item v-for="item in updateGoodList" key="item" :good-item="item"></goods-list-item>
    <div style="text-align: center;line-height: 6vh;color: var(--el-color-primary)">下拉查看更多...</div>
    <div element-loading-text="" v-loading="isLoading" ></div>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
      getMoreGoodList(){
        this.isLoading = true//控制加载，防止多次加载数据
        setTimeout(() =>{
          this.$parent.getHomeGoodList(this.currentType)
          this.isLoading = false
        },1000)
      }
  },
  data(){
    return{
      currentType:'pop',
      currentIndex:0,
      isLoading:false,
      isNoMore:false
    }
  },
  components:{
    GoodsListItem
  },
  computed:{
    updateGoodList(){
        switch (this.$store.getters.getCurrentIndex){
          case 0:{
            this.currentIndex = 0
            this.currentType = 'pop'
            return this.goods['pop'].list
          }
          case 1:{
            this.currentIndex = 1
            this.currentType = 'new'
            return this.goods['new'].list
          }
          default:{
            this.currentIndex = 2
            this.currentType = 'sell'
            return this.goods['sell'].list
          }
        }
    }
  }
}
</script>

<style scoped>
.infinite-list {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
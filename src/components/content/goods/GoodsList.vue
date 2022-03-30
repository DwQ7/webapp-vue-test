<template>
  <div>
    <goods-list-item v-for="item in updateGoodList" key="item" :good-item="item"></goods-list-item>
  </div>
  <div style="text-align: center;color: #666666;line-height: 6vh" >下拉查看更多</div>
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
    },
    currentIndex:{
      type:Number,
      default() {
        return 0;
      }
    }
  },
  components:{
    GoodsListItem
  },
  computed:{
    updateGoodList(){
        // if(this.$store.getters.getCurrentIndex === 0){
        //   return this.goods['pop'].list
        // }else if(this.$store.getters.getCurrentIndex === 1){
        //   return this.goods['new'].list
        // }else{
        //   return this.goods['sell'].list
        // }
        switch (this.$store.getters.getCurrentIndex){
          case 1:
            return this.goods['pop'].list
          case 2:
            return this.goods['new'].list
          default:
            return this.goods['sell'].list
        }
    }
  }
}
</script>

<style scoped>

</style>
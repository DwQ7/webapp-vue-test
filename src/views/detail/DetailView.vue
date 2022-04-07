<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-rotation :rotate-pics="itemPics"></detail-rotation>
    <detail-info :good-info="goodInfo"  ></detail-info>
    <detail-shop-info :shop="shopInfo"></detail-shop-info>
  </div>
  <detail-tab-bar/>
</template>

<script>

import {getDetailGoodItem} from "@/network/detail";
import DetailRotation from "@/views/detail/childComps/DetailRotation";
import DetailInfo from "@/views/detail/childComps/DetailGoodInfo";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailTabBar from "@/views/detail/childComps/DetailTabBar";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
export default {
  name: "DetailView",
  components:{
    DetailNavBar,
    DetailRotation,
    DetailInfo,
    MainTabBar,
    DetailShopInfo,
    DetailTabBar,
  },
  data(){
    return{
      activeName:'first',
      goodItem: null,
      itemId:null,
      itemPics:null,
      goodInfo: {},
      shopInfo:{},
      detailInfo:{},
    }
  },
  methods:{
    backHome(){
      this.$router.back()
    },
    getGoodInfo(){
      getDetailGoodItem(this.itemId).then(res =>{
        this.goodItem = res
        this.itemPics = res.result.itemInfo.topImages
        this.goodInfo = res.result.itemInfo
        this.shopInfo = res.result.shopInfo
        this.detailInfo = res.result.detailInfo
      })
    }
  },
  created() {
    this.itemId = this.$route.params.iid
    this.getGoodInfo()
  }
}
</script>

<style scoped>

</style>
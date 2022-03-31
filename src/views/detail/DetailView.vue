<template>
  <div class="detail">
    <nav-bar class="detail_nav">
      <template #left>
        <el-icon @click="backHome"><arrowLeft /></el-icon>
      </template>
      <template #center class="detail_nav_center">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="">
          <el-tab-pane label="商品" name="first"/>
          <el-tab-pane label="参数" name="second"/>
          <el-tab-pane label="评论" name="third"/>
          <el-tab-pane label="推荐" name="fourth"/>
        </el-tabs>
      </template>
      <template #right>
        <el-icon><avatar /></el-icon>
      </template>
    </nav-bar>
    <detail-rotation :rotate-pics="itemPics"></detail-rotation>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import {getDetailGoodItem} from "@/network/detail";
import DetailRotation from "@/views/detail/childComps/DetailRotation";
export default {
  name: "DetailView",
  components:{
    NavBar,
    DetailRotation,
  },
  data(){
    return{
      activeName:'first',
      goodItem: null,
      itemId:null,
      itemPics:null
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
      })
    }
  },

  activated() {
    this.itemId = this.$route.params.iid
    this.getGoodInfo()
  },

}
</script>

<style scoped>

</style>
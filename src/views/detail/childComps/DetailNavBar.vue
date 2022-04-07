<template>
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
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {
  name: "DetailNavBar",
  props:{
    activeName:ref('first')
  },
  components:{
    NavBar
  },
  methods:{
    backHome(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail_nav{
  background-color: var(--el-color-white);
}
</style>
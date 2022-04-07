<template>
  <div class="user_nav">
    <div class="user">
      <div class="avatar">
        <el-avatar size="large" shape="circle"><img :src="photoSrc"></el-avatar>
      </div>
      <div class="info">
        <span class="name">Jaelyn</span>
        <br>
        <span class="num">Qindw1004@163.com</span><br>
        <span >粉丝：746w 关注：349</span>
      </div>
      <div>
        <el-icon :size="iconSize"><setting /></el-icon>
      </div>
    </div>
    <user-nav-icons/>
  </div>
</template>

<script>
import UserNavIcons from "@/views/user/childComps/UserNavIcons";

export default {
  name: "UserNav",
  data(){
    return{
      iconSize:'1.5rem',
      photoSrc:require('@/assets/images/Avert.jpg')
    }
  },
  components:{
    UserNavIcons
  }
}
</script>

<style scoped>
.user_nav{
  padding: 20px 20px 10px 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.user{
  display: grid;
  grid-template-columns: 4rem 1fr 1.5rem;
}
.info span.name{
  font-size: 1rem;
  font-weight: bold;
  color: var(--el-color-black);
}
.info span.num{
  font-size: 0.5rem;
  color: var(--el-color-info);
}
.info .num~span{
  font-size: 0.5rem;
  color: var(--el-color-info);
}
</style>
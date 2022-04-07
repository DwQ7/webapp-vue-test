<template>
  <user-nav/>
  <user-menu/>
  <account-info/>
  <normal-list-view :list-data="orderList"/>
  <normal-list-view :list-data="serviceList"/>
  <main-tab-bar/>
</template>

<script>
import Profile from "@/components/Profile";
import UserMenu from "@/views/user/childComps/UserMenu";
import UserNav from "@/views/user/childComps/UserNav";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import AccountInfo from "@/views/user/childComps/AccountInfo";
import NormalListView from "@/views/user/childComps/NormalListView";

export default {
  name: "UserView",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  components:{
    Profile,
    UserMenu,
    UserNav,
    MainTabBar,
    AccountInfo,
    NormalListView

  },
  data() {
    return {
      orderList: [
        {icon: 'message.svg', info: '我的消息'},
        {icon: 'pointer.svg', info: '积分商城'},
        {icon: 'vip.svg', info: '会员卡'},
      ],
      serviceList: [
        {icon: 'cart.svg', info: '我的购物车'},
        {icon: 'shopping.svg', info: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
div{
  background-color: var(--el-color-white);
  border-radius: 1rem;
  margin: 0.7rem;
  /*padding: 1rem;*/
}
</style>
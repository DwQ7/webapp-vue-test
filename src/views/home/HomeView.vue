<template>
  <div class="home">
    <nav-bar class="home_nav"><template #center>桃堡</template></nav-bar>
    <home-rotation :banner = 'banner'></home-rotation>
    <home-recommend :recommend = 'recommend'></home-recommend>
    <home-feature/>
    <tab-control class="tab_control" :choices="['流行','新款','精选']" ></tab-control>
    <goods-list :goods="goods" class="good_list"></goods-list>
  </div>
  <el-affix :offset="50" target=".good_list">
    <el-backtop :bottom="100" :right="10"  circle>  <el-icon><caret-top /></el-icon></el-backtop>
  </el-affix>
  <el-affix :offset="50" target=".home">
    <el-backtop :bottom="150" :right="10"  circle>  <el-icon><shopping-cart-full /></el-icon></el-backtop>
  </el-affix>
  <main-tab-bar/>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import {Delete} from "@element-plus/icons-vue";
import {getHomeMultiData,getHomeGoodList} from "@/network/home";

import HomeContent from "@/views/home/childComps/HomeContent";
import HomeRotation from "@/views/home/childComps/HomeRotation";
import HomeRecommend from "@/views/home/childComps/HomeRecommend";
import HomeFeature from "@/views/home/childComps/HomeFeature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: 'HomeView',
  data(){
    return{
      banner:[],
      dKeyword:[],
      keywords:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  components: {
    NavBar,
    TabControl,
    MainTabBar,
    GoodsList,
    HomeContent,
    HomeRotation,
    HomeRecommend,
    HomeFeature,
    Delete,

  },
  created(){
    this.getHomeMultiData()
    let choices = Object.keys(this.goods)
    for(let i in choices){
      this.getHomeGoodList(choices[i]);
    }
  },
  methods:{
    getHomeMultiData(){
      getHomeMultiData().then(res =>{
        this.banner = res.data.banner.list
        this.dKeyword = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoodList(type){
      const page = this.goods[type].page + 1
      getHomeGoodList(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      })
    }
  }
}
</script>

<style>
.home_nav{
  background-color: #FF7A9C;
}
.tab_control{
  position: sticky;
  top:5vh;
}

</style>

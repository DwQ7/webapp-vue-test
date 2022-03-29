<template>
  <home-content/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import HomeContent from "@/views/home/HomeContent";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: 'HomeView',
  data(){
    return{
      banner:[],
      dKeyword:[],
      keywords:[],
      recommend:[]
    }
  },
  components: {
    NavBar,
    HomeContent,
    MainTabBar,
  },
  created(){
    console.log(1);
    getHomeMultiData().then(res =>{
      console.log(res);
      this.banner = res.data.banner.list;
      this.dKeyword = res.data.dKeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;

    })
  }
}
</script>

<style>
div a{
  font-weight: bold;
  color: #2c3e50;
}
div a.router-link-exact-active {
  color: #42b983;
}

.home_nav{
  background: #42b983;
}
</style>

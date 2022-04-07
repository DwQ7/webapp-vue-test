<template>
  <nav-bar class="category_nav"><template #center>分类</template></nav-bar>
  <div id="category">
    <div class="content">
      <div id="table-content">
        <category-tab-menu :category="categoryData" @selectItem="selectItem"></category-tab-menu>
      </div>
      <el-scrollbar>
        <category-tab-content :subcategories="showSubcategory"></category-tab-content>
      </el-scrollbar>
    </div>
  </div>
  <main-tab-bar/>
</template>

<script>


import {Minus, Plus} from "@element-plus/icons-vue";
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";
import CategoryTabMenu from "@/views/category/childComps/CategoryTabMenu";
import {getCategory, getSubcategory} from "@/network/category";
import CategoryTabContent from "@/views/category/childComps/CategoryTabContent";
export default {
  name: "CategoryView",
  data(){
    return{
      categoryData:{},
      currentIndex: -1,
      categoryInfo:[]
    }
  },
  computed:{
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryInfo[this.currentIndex].subcategories
    },
  },

  methods:{
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categoryData[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryInfo[index].subcategories = res.data
        this.categoryInfo = {...this.categoryInfo}
        // this._getCategoryDetail(POP)
        // this._getCategoryDetail(SELL)
        // this._getCategoryDetail(NEW)
      })
    },
    _getCateGory(){
      getCategory().then(res =>{
        this.categoryData = res.data.category.list
        for (let i = 0; i < this.categoryData.length; i++) {
          this.categoryInfo[i] = {
            subcategories: {},
            // categoryDetail: {
            //   'pop': [],
            //   'new': [],
            //   'sell': []
            // }
          }
        }
        this._getSubcategories(0)
      })
    },

    selectItem(index) {
      this._getSubcategories(index)
    }

  },
  components:{
    NavBar,
    MainTabBar,
    CategoryTabMenu,
    CategoryTabContent
  },
  created() {
    this._getCateGory()
  }
}
</script>

<style scoped>
#category{
  width: 100vh;
}
.category_nav{
  background-color: #FF7A9C;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>
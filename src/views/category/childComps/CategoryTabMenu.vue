<template>
  <el-scrollbar id="tab-menu">
    <el-scrollbar :height="900" class="menu-list">
      <div class="menu-list-item"
           :class="{active: index===currentIndex}"
           v-for="(item, index) in category"
           :key="index"
           @click="itemClick(index)">
        {{item.title}}
      </div>
    </el-scrollbar>
  </el-scrollbar>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "CategoryTabMenu",
  components:{
    Scroll
  },
  props:{
    category:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
#tab-menu {
  background-color: #f6f6f6;
  width: 100px;
  box-sizing: border-box;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 700;
  color: var(--el-color-danger);
  background-color: #fff;
  border-left: 3px solid var(--el-color-danger);
}
</style>
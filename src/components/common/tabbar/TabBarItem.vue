<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    },
  },
  data(){
    return{
      color:'#FF7A9C'
    }
  },
  computed:{
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? {color: this.color} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<!--<style scoped>-->
<!--vue组件中的style标签标有scoped属性时表明style里的css样式只适用于当前组件元素-->
<!--而如果你的标签是其他组件插槽进来的声明过scoped将无法对其产生作用-->
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>

<template>
  <div class="tab_control">
    <div v-for="(item,index) in choices" :key="item" class="tab_control_item" @click="itemClick(index)" :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex :0
    }
  },
  props:{
    choices:{
      type:Array,
      default:[]
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$store.commit('updateIndex',index)
    }
  }
}
</script>

<style scoped>
.tab_control{
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 44px;
  z-index: 99;
}
.tab_control_item{
  text-align: center;
  font-size: 17px;
  line-height: 35px;
}

.active span{
  color: var(--body-color);
  padding-bottom: 5px;
  border-bottom: 4px solid var(--body-color);
}
</style>
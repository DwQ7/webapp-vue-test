<template>
  <div class="demo-progress">
    <el-progress :percentage="50" :indeterminate="true" />
    <el-progress :percentage="100" :format="format" :indeterminate="true" />
    <el-progress
        :percentage="100"
        status="success"
        :indeterminate="true"
        :duration="5"
    />
    <el-progress
        :percentage="100"
        status="warning"
        :indeterminate="true"
        :duration="1"
    />
    <el-progress :percentage="50" status="exception" :indeterminate="true" />
    <el-progress :percentage="percentage" :color="customColors" />
  </div>
  <div>
    <el-button-group>
      <el-button @click="decrease"><el-icon><minus /></el-icon></el-button>
      <el-button @click="increase"><el-icon><plus/></el-icon></el-button>
    </el-button-group>
  </div>
  <div element-loading-text="加载中" v-loading="true" style="color: var(--body-color)"></div>
</template>

<script>


import {Minus, Plus} from "@element-plus/icons-vue";
export default {
  name: "TestView",
  data(){
    return{
      format:(percentage) => (percentage === 100 ? 'Full' : `${percentage}%`),
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
      ],
      percentage:10,
      loading:true
    }
  },
  methods:{
    increase(){
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease(){
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    }
  },
  components:{
    Plus,Minus
  }
}
</script>

<style scoped>
.demo-progress{
  width: 100%;

}
.demo-progress .el-progress--line {
  padding: 20px;
  margin-bottom: 15px;
  width: 350px;
}
</style>
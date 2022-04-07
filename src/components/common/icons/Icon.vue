<template>
    <div>
      <el-icon :size="iconSize"><slot name="icon"></slot></el-icon><br>
      <span><slot name="icon-text"></slot></span>
    </div>
</template>

<script>
export default {
  name: "Icons",
  data(){
    return{
      iconSize:'1.5rem'
    }
  }
}
</script>

<style scoped>
div span{
  font-size: 0.8rem;
  align-items: center;
  justify-items: center;
  vertical-align: middle;
}
</style>
<template>
  <div>This is Test Compnent</div>
  <el-icon color="#FF7A9C" size="30px"><briefcase /></el-icon>
  <el-icon><bowl /></el-icon>
</template>

<script>
import {Briefcase} from "@element-plus/icons-vue";
export default {
  name: "Test",
  components: {Briefcase}
}
</script>

<style scoped>
briefcase{
  color: #FF7A9C;
}
</style>
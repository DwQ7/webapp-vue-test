<template>
  <icons>
    <icon>
      <template #icon><star /></template>
      <template #icon-text>收藏</template>
    </icon>
    <icon>
      <template #icon><circle-check /></template>
      <template #icon-text>订阅</template>
    </icon>
    <icon>
      <template #icon><timer /></template>
      <template #icon-text>足迹</template>
    </icon>
    <icon>
      <template #icon><wallet /></template>
      <template #icon-text>零钱</template>
    </icon>
  </icons>
</template>
<script>
import Icons from "@/components/common/icons/Icons";
import Icon from "@/components/common/icons/Icon";

export default {
  name: "UserNavIcons",
  components:{
    Icon,
    Icons
  }
}
</script>

<style scoped>

</style>
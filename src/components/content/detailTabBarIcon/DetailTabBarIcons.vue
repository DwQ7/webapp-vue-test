<template>
  <icons>
    <icon>
      <template #icon><star /></template>
      <template #icon-text>客服</template>
    </icon>
    <icon>
      <template #icon><circle-check /></template>
      <template #icon-text>店铺</template>
    </icon>
    <icon>
      <template #icon><shopping-cart /></template>
      <template #icon-text>购物</template>
    </icon>
  </icons>
</template>

<script>
import Icons from "@/components/common/icons/Icons";
import Icon from "@/components/common/icons/Icon";
export default {
  name: "DetailTabBarIcons",
  components:{
    Icons,
    Icon
  }
}
</script>

<style scoped>

</style>
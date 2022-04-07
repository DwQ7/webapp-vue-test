<template>
  <div>
    <div class="icon">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons"
}
</script>

<style scoped>
.icon{
  padding-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
}
</style>
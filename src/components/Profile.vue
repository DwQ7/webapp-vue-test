<template>
  <div>
    <h2>This is Profile</h2>
    <ul>
      <li>{{$route.query.name}}</li>
      <li>{{$route.query.age}}</li>
      <li>{{$route.query.height}}</li>
      <li>{{$route.query.weight}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile create");
  },
  destroyed() {
    console.log("Profile destroy");
  }
}
</script>

<style scoped>
div li{
  list-style: none;
}
</style>
<template>
  <div>
    <h2>This is User</h2>
    <h2> I'm {{userId}}</h2>
    <Profile/>
  </div>
</template>

<script>
import Profile from "@/components/Profile";

export default {
  name: "UserView",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  components:{
    Profile
  }
}
</script>

<style scoped>

</style>
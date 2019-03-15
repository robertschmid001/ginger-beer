<template>
  <div class="admin">

  <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'Admin',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  background-color: grey;
  color: white;
  height: 100%;
}
</style>

<template>
  <div class="main-admin">
      <aside-menu></aside-menu>
      <router-view class="router-wrapping"></router-view>
  </div>
</template>

<script>
import AsideMenu from './AsideMenu.vue'
export default {
  name: 'MainAdmin',
  data () {
    return {
    }
  },
  components: {
    AsideMenu
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-admin {
  background-color: grey;
  color: white;
  height: 100%;
  display: flex;
}
.router-wrapping {
  padding: 20px;
}
</style>
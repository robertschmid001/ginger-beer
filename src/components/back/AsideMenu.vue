<template>

<div id="aside-menu">
<v-navigation-drawer
      dark
      permanent
      width="200px"
    >
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="changeRoutes(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
  
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</div>

</template>

<script>
export default {
  name: 'AsideMenu',
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'Presentation', icon: 'account_box' },
        { title: 'History', icon: 'gavel' },
        { title: 'Products', icon: 'dashboard' },
        { title: 'Gallery', icon: 'account_box' },
        { title: 'Trail', icon: 'gavel' },
        { title: 'Footer', icon: 'gavel' }
      ]
    }
  },
  props: {
  },
  methods: {
    changeRoutes (param) {
      this.$router.push({name: param})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside-menu {
  background-color: grey;
  color: white;
  height: 100%;
}
</style>
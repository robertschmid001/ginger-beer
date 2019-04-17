<template>
   <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
      offset-x
      left
      dark
    >
    <template v-slot:activator="{ on }">
      <div class="navbar" v-on="on" >Menu</div>
    </template>

    <v-list >
      <v-list-tile v-for="(item, i) in list" :key="i">
          <img class="image-nav" src="../../assets/images/redshield.png" alt="">
          <v-list-tile-title class="item-title">{{ item }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      list: [
        "History",
        "Products list",
        "Gallery",
        "Trail",
        "Footer"
      ]
    }
  },
  props: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-title {
  padding-left: 5px;
}
.image-nav {
  width: 20px;
  -webkit-transition:-webkit-transform 1s ease;
  -moz-transition:   -moz-transform 1s ease;
  -ms-transition:    -ms-transform 1s ease;
      transition:        transform 1s ease;
}
.theme--dark.v-list {
  background-color: rgba(0, 0, 0, 0.342);
}
.theme--dark.v-list:hover {
}
.theme--dark.v-list /deep/ a:hover {
  color: white;
  font-weight: 700;
}
.theme--dark.v-list /deep/ a:hover .image-nav {
  -webkit-transform: rotate(90deg)
}
.navbar {
  position: absolute;
  color: #c1c1c1;
  z-index: 10;
  top: 40px;
  right: 50px;
  font-size: 30px;
  cursor: pointer;
}
.navbar:hover {
  color: white;
}
.link {
  color: black;
}
</style>
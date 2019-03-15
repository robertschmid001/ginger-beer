<template>
  <div class="hello">
    <h1 @click="clickity" >My Navbar</h1>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
  },
  methods: {
    clickity () {
      console.log(this.$store.state.trail, 'trail')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: black;
  color: white;
  height: 60px;
  /* border-bottom:10px solid white; */
}
h1 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
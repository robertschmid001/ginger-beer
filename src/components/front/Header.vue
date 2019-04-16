<template>
  <div id="header">
      <v-layout justify-center class="layout-wrapper">
          <div class="font-logo title-logo">Spyder</div>
          <h1 class="display-3 font-weight-fat font-face title-wrap">Septimus Spyder Drinks</h1>
      </v-layout>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'MATURASC';
  src: url('../../assets/fonts/MATURASC.TTF') format('truetype');
}
.title-logo {
  position: relative;
  top: 68%;
}
.title-wrap {
  position: relative;
  top: 70%;
}
.layout-wrapper {
  position: relative;
  background-image: url('../../assets/images/gingerbeer9.jpg');
  background-size: cover;
}
.icon {
  font-size: 60px;
  color: #c1c1c1;
  cursor: pointer;
}
.icon:hover {
  color: white;
}
#header {
  position: relative;
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
}
h4 {
  margin:0;
}
h1 {
  margin: 0;
}
</style>
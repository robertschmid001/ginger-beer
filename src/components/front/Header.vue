<template>
  <div id="header">
    <div class="wrapper">
      <v-layout justify-center class="layout-wrapper font-logo">
        <div class="title-wrap">
          <h1 class="display-3 font-weight-fat font-logo">Septimus Spyder o' Tameworpig</h1>
          <h2>Son of Wilhelm,  son of Casper</h2>
        </div>
      </v-layout>
    </div>
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
.wrapper {
  display: flex;
  width: 100%;
  background-image: url('../../assets/images/gingerbeer9.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.title-wrap {
  width: 100%;
  position: relative;
  text-align: center;
  top: 35%;
}
.layout-wrapper {
  /* position: relative; */
  display: flex;
  flex-direction: column;
}
.icon:hover {
  color: white;
}
#header {
  background-color: black;
  position: relative;
  color: white;
  height: 100vh;
  display: flex;
}
h2 {
  margin:0;
}
h1 {
  margin: 0;
}
@media only screen and (max-width: $phone) {
  .title-wrap {
    // text-align: left;
  }
  h1 {
    font-size: 45px!important;
  }
  h2 {
    font-size: 20px!important;
  }
}
</style>
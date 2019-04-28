<template>
  <div id="header">
      <v-layout justify-center class="layout-wrapper">
          <h1 class="display-3 font-weight-fat font-face title-wrap"> <div class="font-logo">Septimus Spyder o' Tameworpig <br> Son of Wilhelm,  son of Casper </div></h1>
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

// @include media(">phone", "<tablet") {}
// @include media(">tablet", "<950px") {}
// @include breakpoint(453px $breakpoint-tablet) {}
// @include breakpoint($breakpoint-tablet 850px) {}

.title-logo {
  position: relative;
  top: 68%;
}
.title-wrap {
  position: relative;
  top: 70%;
}
.layout-wrapper {
    /* position: relative; */
    background-image: url(/img/gingerbeer9.cf055f9a.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
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
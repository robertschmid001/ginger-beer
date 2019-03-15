<template>
  <div id="hello">
      <v-layout
        align-center
        column
        justify-center>
        <h1 class="display-3 font-weight-fat mb-3 font-face">Septimus Spyder Drinks</h1>
        <div class="font-logo">Spyder</div>
      </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
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

.parallax {

}
#hello {
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  /* background-image: url('../assets/images/parch2.png');
  background-size: auto; */

}
h4 {
  margin:0;
}
h1 {
  margin: 0;
}
</style>
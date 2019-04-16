<template>
  <div class="hello">
    <v-container fluid grid-list-md class="container-wrapper">
      <div class="title-wrapper">
        <h1 class="font-face">What ye old shieet</h1>
      </div>
      <v-layout row wrap class="layout">
        <v-flex d-flex xs12 sm12 md6 class="wedding-wrapper">
          <Blog/>
        </v-flex>
        <v-flex d-flex xs12 sm12 md6 class="wedding-wrapper">
          <Wedding/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Blog from './_subs/Blog.vue'
import Wedding from './_subs/Wedding.vue'

export default {
  name: 'Outside',
  props: {
  },
  components: {
    Blog,
    Wedding
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
h1 {
  text-align: center;
  color: white;
}
.wedding-wrapper {
  z-index: 3;
  padding: 0px!important;
}
.title-wrapper {
  background-color:#1F1E20;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hello {
  background-color: none;
  color: white;
  display: flex;
  overflow: hidden;
}
.container-wrapper {
  overflow: hidden;
  padding:0;
}
.layout {
  position: relative;
}
</style>

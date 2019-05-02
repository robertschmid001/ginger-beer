<template>
  <div class="hello">
    <v-container fluid grid-list-md class="container-wrapper">
      <div class="title-wrapper">
        <h1 class="font-face">Escape to Snowdonia</h1>
      </div>
      <v-layout row wrap align-center justify-center class="layout">
        <v-flex d-flex xs12 sm12 md8 class="wedding-wrapper">
          <Blog  class="blog" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Blog from './_subs/Blog.vue'

export default {
  name: 'Outside',
  props: {
  },
  components: {
    Blog
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
  padding: 0!important;
  justify-content: center;
}
.blog {
  max-width: 800px;
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
  justify-content: center;
  background-color:#1F1E20;
  color: white;
  display: flex;
  overflow: hidden;
}
.container-wrapper {
  overflow: hidden;
  padding:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.layout {
  // position: relative;
}
</style>

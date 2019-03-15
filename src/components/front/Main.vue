<template>
  <v-app>
    <Header/>
    <Navbar/>
    <History/>
    <ProductsList/>
    <Gallery/>
    <!-- <Blog/> -->
    <Trail/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Blog from './Blog.vue'
import Trail from './Trail.vue'
import Gallery from './Gallery.vue'
import History from './History.vue'
import Navbar from './Navbar.vue'
import ProductsList from './ProductsList.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Blog,
    Gallery,
    History,
    Navbar,
    ProductsList,
    Trail
  },
  data () {
    return {
      //
    }
  }
}
</script>
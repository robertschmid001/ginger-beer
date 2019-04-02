<template>
  <v-app>
    <!-- <Navbar/> -->
    <Header/>
    <History/>
    <Carousel/>
    <Gallery/>
    <ProductsList/>
    <Outside/>
    <!-- <Trail/> -->
    <Footer/>
  </v-app>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Outside from './Outside.vue'
import Trail from './Trail.vue'
import Gallery from './Gallery.vue'
import History from './History.vue'
import Navbar from './Navbar.vue'
import ProductsList from './ProductsList.vue'
import Carousel from './Carousel.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Outside,
    Gallery,
    History,
    Navbar,
    ProductsList,
    Trail,
    Carousel
  },
  data () {
    return {
      //
    }
  },
  methods: {
  }
}
</script>
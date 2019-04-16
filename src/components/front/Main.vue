<template>
  <v-app>
    <Header/>
    <History/>
    <Carousel/>
    <Gallery/>
    <ProductsList/>
    <Outside/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Outside from './Outside.vue'
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
<template>
  <div id="object-carousel">
    <v-layout align-center column justify-center>
      <v-carousel height="auto" interval="8000" max="100" class="carousel" hide-delimiters v-model="carouselIndex">
        <v-carousel-item
          v-for="(item, i) in filterObjects"
          :key="i"
          :src="item.image" class="pointer carousel-item" alt="item.title" @click.native="click(item, i)"
        >{{carouselIndex}}</v-carousel-item>
      </v-carousel>
    </v-layout>
  </div>
</template>

<script>
import Product from './_subs/product.vue'

export default {
  name: 'Carousel',
  data () {
    return {
      carouselIndex: null,
      activeProduct:'',
      n: 0,
      articles: [{
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title1",
        description: "This is just a random1 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title2",
        description: "This is just a random2 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title3",
        description: "This is just a random3 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title4",
        description: "This is just a random4 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title3",
        description: "This is just a random3 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/beers/gingerbeer2.jpg'),
        title: "This is a title4",
        description: "This is just a random4 description of the current, selected product",
        cat: "drink"
      },
      {
        image: require('../../assets/images/objects/gingerbeer3re.jpg'),
        title: "This is an object4",
        description: "This is just a random4 description of the current, selected product",
        cat: "object"
      },
      {
        image: require('../../assets/images/objects/gingerbeer4.jpg'),
        title: "This is an object2",
        description: "This is just a random2 description of the current, selected product",
        cat: "object"
      },
      {
        image: require('../../assets/images/objects/gingerbeer8.jpg'),
        title: "This is an object1",
        description: "This is just a random1 description of the current, selected product",
        cat: "object"
      },
      {
        image: require('../../assets/images/objects/wed1.jpg'),
        title: "This is an object3",
        description: "This is just a random3 description of the current, selected product",
        cat: "object"
      },
    ],
    }
  },
  props: {
  },
  computed: {
    active () {
      return this.activeProduct
    },
    filterObjects () {
      var filtered = this.articles.filter(e => {
        if (e.cat === "object") {
          return e
        }
      })
      return filtered
    }
  },
  components: {
    'product': Product
  },
  methods: {
    switchCat (param) {
      this.switch = param
    },
    click (data, index) {
      this.n = index
      console.log(index, 'index')
      this.activeProduct = data
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
h1 {
  padding: 0 20px;
  color: rgba(0, 0, 0, 0.4);
}
.products-title-wrapper {
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  background-size: cover;
  background-image: url("./../../assets/images/parch.jpg");
  width: contain;
  min-height: 100px;
  align-items: center;
}
.procomp-wrapper {
  width: 100%;
}
.isActive {
  color: black;
  cursor: default;
}
h2 {
  padding: 0 20px;
}
.product {
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 overflow: visible;
 border: none;
}
.carousel {
  background: none;
  overflow: hidden;
  border: none;

  }
.slide {
  background: none;
  border: none;
  padding: 20px;
}
img {
  width: auto;
  display: flex;
}
title {
  position: absolute;
  top: 0px;
  left: 0px;
}
#object-carousel {
  background-color: black;
}
h1 {
  margin: 0;
}
</style>

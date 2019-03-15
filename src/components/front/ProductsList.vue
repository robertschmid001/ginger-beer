<template>
  <div id="product-list">
        <div class="products-title-wrapper" >
          <h1 class="pointer font-face" @click="switchCat(true, 'drink')" :class="{isActive: this.actClass === 'drink'}">Drinks</h1>  <h1 class="pointer font-face" @click="switchCat(false, 'object')" :class="{isActive: this.actClass === 'object'}">Objects</h1>
        </div>
    <v-parallax class="parallax" dark :src="require('../../assets/images/wood1.jpg')">
      <v-layout align-center column justify-center>


        <carousel-3d class="carousel" v-if="this.switch">
          <slide :index="index" class="slide"  :key="index" v-for="(item, index) in catComp('drink', this.n)">
            <img :src="item.image" alt="item.title" @click="click(item, index)">
          </slide>
        </carousel-3d>

        <carousel-3d class="carousel" v-else>
          <slide :index="index" class="slide"  :key="index" v-for="(item, index) in catComp('object', this.n)">
            <img :src="item.image" alt="item.title" @click="click(item, index)">
          </slide>
        </carousel-3d>

      </v-layout>
    </v-parallax>


    <div class="procomp-wrapper" v-if="activeProduct">
      <product :product="active"/>
    </div>
  </div>
</template>

<script>
import Product from './_subs/product.vue'

export default {
  name: 'ProductsList',
  data () {
    return {

      info: [
        { image:require('../../assets/images/beers/2.png'),title: "This is a title1", description:"This is just a random1 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/3.png'),title: "This is a title2", description:"This is just a random2 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/4.png'),title: "This is a title3", description:"This is just a random3 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/5.png'),title: "This is a title4", description:"This is just a random4 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/4.png'),title: "This is a title3", description:"This is just a random3 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/5.png'),title: "This is a title4", description:"This is just a random4 description of the current, selected product", cat:"drink" },
        { image:require('../../assets/images/beers/5.png'),title: "This is an object4", description:"This is just a random4 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/beers/3.png'),title: "This is an object2", description:"This is just a random2 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/beers/2.png'),title: "This is an object1", description:"This is just a random1 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/beers/4.png'),title: "This is an object3", description:"This is just a random3 description of the current, selected product", cat:"object" },
      ],
      activeProduct:'',
      switch: true,
      actClass: 'drink',
      n: 0
    }
  },
  props: {
  },
  computed: {

    active () {
      return this.activeProduct
    }
  },
  components: {
    'product': Product
  },
  methods: {
    switchCat (param) {
      this.switch = param
    },
    catComp (param, i) {
      var filtered = this.info.filter(e => {
        if (e.cat === param) {
          return e
        }
      })
      if ( this.actClass != param) {
        if (!filtered[i]) {
          this.activeProduct = filtered[0]
        } else {
          this.activeProduct = filtered[i]
        }
      }
      this.actClass = param
      return filtered
    },
    click (data, index) {
      this.n = index
      console.log(index, 'index')
      this.activeProduct = data
    }
  },
  mounted () {
    this.catComp(true, 0)
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
  overflow: visible;
  border: none;
}
.slide {
  background: none;
  overflow: visible;
  border: none;
}
img {
  height: 100%;
  /* width: 300px; */
  display: flex;
  /* align-items: baseline;
  position: absolute;
  bottom: 0px;
  right: 0; */
}
title {
  position: absolute;
  top: 0px;
  left: 0px;
}
#product-list {
  background-color: grey;
  color: white;
  // border-top:10px solid white;
}
h1 {
  margin: 0;
}
</style>

<template>
  <div id="product-list">

    <div class="products-title-wrapper" >
      <h1 class="font-face">Ye' Old Drinks</h1>
    </div>
      <div class="list-wrapper">
        <div class="image-wrapper"  :key="index" v-for="(item, index) in DrinkComp">
          <img :src="item.image" class="pointer" :class="{'isActive': index === n, 'isBefore': index < n, 'isAfter': index > n }" :alt="item.title" @click="click(item, index)">
        </div>
      </div>

    <v-parallax class="parallax" align-center dark style="height: auto;" :src="require('../../assets/images/wood1.jpg')">
      <v-layout align-center column justify-center>
        <div class="procomp-wrapper" v-if="activeProduct">
          <product :product="active"/>
        </div>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
import Product from './_subs/product.vue'

export default {
  name: 'ProductsList',
  data () {
    return {
      carouselIndex: null,
      info: [
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Lord Hogsbreath Mead", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Wilfred the Hairy Bitter Ale", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Eric the Red Rouge Ale", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Percival Ale", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Lancelot Ale", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/beers/gingerbeer7bis.png'),title: "Mulled Cider", description:"Brewed with only the finest roots of ginger, dandelion and the burdock thistle, these are drinks perfect for the summer and winter alike. Refreshing and cool in the summer with a warmer, spicy side for the winter.An ideal gift for someone special or a treat for yourself. Bring a bottle to a picnic or a party! The Spyde Soft Drinks range are brewed for the discerning adult and child alike.", cat:"drink" },
        { image:require('../../assets/images/objects/gingerbeer3.jpg'),title: "This is an object4", description:"This is just a random4 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/objects/gingerbeer4.jpg'),title: "This is an object2", description:"This is just a random2 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/objects/gingerbeer3.jpg'),title: "This is an object1", description:"This is just a random1 description of the current, selected product", cat:"object" },
        { image:require('../../assets/images/objects/gingerbeer4.jpg'),title: "This is an object3", description:"This is just a random3 description of the current, selected product", cat:"object" },
      ],
      activeProduct:[],
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
    },
    DrinkComp () {
      var filtered = this.info.filter(e => {
        if (e.cat === 'drink') {
          return e
        }
      })
      return filtered
    },
  },
  components: {
    'product': Product
  },
  methods: {

    click (data, index) {
      this.n = index
      console.log(data, 'data')
      this.activeProduct = data
    }
  },
  mounted () {
    this.activeProduct = this.DrinkComp[0]
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
.parallax {
  height: auto;
  padding: 50px 0;
}
.list-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // padding-bottom: 20px;
  padding: 50px 0;
  min-height: 480px;
}
h1 {
  padding: 0 20px;
  color: rgb(0, 0, 0);
}
.products-title-wrapper {
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  width: contain;
  min-height: 100px;
  align-items: center;
}
.procomp-wrapper {
  width: auto;
  min-width: 300px;
}
.isActive {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);

  position:relative;
  color: black;
  cursor: default;
  // height: 330px;
  -webkit-transform: translate(0, 10%);
  -webkit-transform: scale(2);
    -webkit-transition:-webkit-transform 1s ease-in;
    -moz-transition:   -moz-transform 1s ease-in;
    -ms-transition:    -ms-transform 1s ease-in;
    transition:        transform 1s ease-in;
  -webkit-transition:-webkit-transform 1s ease-out;
    -moz-transition:   -moz-transform 1s ease-out;
    -ms-transition:    -ms-transform 1s ease-out;
    transition:        transform 1s ease-out;
}
.isBefore {
  position: relative;
  -webkit-transform: translate(-30%, 0);
    -webkit-transition:-webkit-transform 3s ease;
    -moz-transition:   -moz-transform 3s ease;
    -ms-transition:    -ms-transform 3s ease;
    transition:        transform 3s ease;
}
.isAfter {
  -webkit-transform: translate(30%, 0);
    -webkit-transition:-webkit-transform 3s ease;
    -moz-transition:   -moz-transform 3s ease;
    -ms-transition:    -ms-transform 3s ease;
    transition:        transform 3s ease;
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

  // background-image: url("./../../assets/images/parch.jpg");
  padding: 20px;
}
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  max-height: 300px;
  /* width: 300px; */
  display: flex;
  /* align-items: baseline;
  position: absolute;
  bottom: 0px;
  right: 0; */
  padding: 0 5px;
  z-index: 200;

}
title {
  position: absolute;
  top: 0px;
  left: 0px;
}
#product-list {
  background-image: url("./../../assets/images/label.jpg");
  background-color: black;
  color: white;
  // border-top:10px solid white;
  // background-image: url("./../../assets/images/parch.jpg");
}
h1 {
  margin: 0;
}
</style>

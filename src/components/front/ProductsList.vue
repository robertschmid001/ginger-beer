<template>
  <div id="product-list">

    <div class="products-title-wrapper" >
      <h1 class="font-face">Ye' Old Drinks</h1>
    </div>
      <div class="list-wrapper">
        <div class="image-wrapper"  :key="index" v-for="(item, index) in info">
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
        { image:require('../../assets/images/beers/mead.png'),title: "SPYDER MEAD", description:"Saxon Crock of Lord Hogsbreath of Tameworpig Spyder Mead.<br><br> 500 ml of spicy mead brewed at 14 % abv. Drink either neat at room temperature ...or mixed with Ginger Beer or tonic water with ice." },
        { image:require('../../assets/images/beers/eric.png'),title: "ERIC THE RED", description:"Dark ruby Ale dedicated to the famous Norse explorer Erik Thorvaldsson [a] (c. 950 –  c.1003),<br><br> 500 ml of dark ruby Ale... 4.8 % abv drink cool." },
        { image:require('../../assets/images/beers/lancelot.png'),title: "LANCELOT", description:"Very light hoppy Ale ...dedicated to William Marshal (c.1147 - c. 1214) known as our Greatest Knight and from whom Lancelot stories were based.<br><br> 500 ml of very light hoppy Ale...4.5% abv drink cool." },
        { image:require('../../assets/images/beers/wilfred.png'),title: "WILFRED THE HAIRY", description:"Bitter Ale ...dedicated to the Count of Barcelona (died c. 897) legend has it that Wilfred was in fact bald. It is unknown when he was born.<br><br> 500 ml of bitter Ale ...4.2% abv drink cool. STRAWBERRY CIDERA medium cider with an awesome fruity taste. 500 ml ...4.0 % abv drink cool" },
        { image:require('../../assets/images/beers/strawberry.png'),title: "STRAWBERRY CIDER", description:"A medium cider with an awesome fruity taste.<br><br> 500 ml ...4.0 % abv drink cool" },
        { image:require('../../assets/images/beers/cock.png'),title: "DOG AND COCK", description:"Strong Light Ale dedicated to a band of Poor Fellow-Soldiers of Christ and of the Temple of Solomon ...otherwise known as Knights Templars.<br><br> 500ml of Strong Light Ale ...7% abv drink cool" },
        { image:require('../../assets/images/beers/spicy.png'),title: "MULLED CIDER", description:"Medium strong cider with spice.<br><br> 500ml ....5% abv drink cool" },
        { image:require('../../assets/images/beers/blackcurrent.png'),title: "BLACKCURRANT CIDER", description:"A medium cider with an awesome fruity taste.<br><br> 500 ml ...4.0 % abv drink cool" },
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
    this.activeProduct = this.info[0]
  }
}
</script>

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
  padding: 50px 2px;
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
  padding: 20px;
}
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  display: flex;
  z-index: 200;
}
img {
  max-height: 300px;
}
@media only screen and (max-width: $phone) {
  img {
    max-height: 250px;
  }
}

// max-height: 250px;

title {
  position: absolute;
  top: 0px;
  left: 0px;
}
#product-list {
  background-image: url("./../../assets/images/label_smaller.jpeg");
  background-color: black;
  color: white;
  overflow: hidden;
}
h1 {
  margin: 0;
}
</style>

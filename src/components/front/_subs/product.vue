<template>
  <div class="component-product">
    <div class="content-wrapper font-alg">
      <h2 class="font-face">{{product.title}}</h2>
       <div class="text-wrapper font-face" v-html="product.description">
       </div>

    </div>
       <img class="wax-image" :src="require('../../../assets/images/wax.png')" alt="">
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style scoped lang="scss">
@import '../../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
h2 {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  text-align:center;
}
.component-product {
  position: relative;
  background-color: #1a1b1eb3;
  color: black;
  background-size: cover;
  background-image: url("./../../../assets/images/label_smaller.jpeg");
  width: contain;
  padding-bottom: 50px;
  display: flex;
}
.text-wrapper {
  text-align: center;
}
.content-wrapper {
  max-width: 800px;
  padding: 20px 50px;
}
.img-wrapper {
  align-items: center;
  display: flex;
}
.wax-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
}
</style>
<template>
  <div class="component-product">
    <div class="img-wrapper">
      <img :src="product.image" alt="item.title">
    </div>
    <div class="content-wrapper font-alg">
      <h2 class="font-face">{{product.title}}</h2>
       <br>
       <div class="text-wrapper font-face">
         {{product.description}}
       </div>

    </div>
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
  // font-weight: normal;
  // font-style: normal;
}

.component-product {
  /* background-color: white; */
  color: black;
  // height: 400px;
  background-size: cover;
  background-image: url("./../../../assets/images/parch.jpg");
  width: contain;
  min-height: 400px;
  display: flex;
  padding: 20px 0px;
}

.content-wrapper {
  padding: 10px;
}
.img-wrapper {
  align-items: center;
  display: flex;
}
img {
  max-height: 100%;
  max-width: 250px;
  padding: 0px 10px;
}
</style>
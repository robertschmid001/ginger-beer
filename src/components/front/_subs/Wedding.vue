<template>
  <div class="component-wedding">
    <div class="right-slide font-face">
      <h2>Customisable labels</h2>
      <div>
        You can customize labels etc for any events blah blah
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wedding',
}
</script>

<style scoped lang="scss">
@import '../../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
h2 {
  font-weight: 500;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
}
.right-slide{
  box-sizing: border-box;
  padding: 20px;
  background-size: cover;
  text-align: center;
  height: 100%;
  //background-image: url("./../../../assets/images/parchment2.png");
  background-image: url("./../../../assets/images/label_smaller.jpeg");
  -webkit-filter: grayscale(50%);
  position: relative;
  left: 110%;
  -webkit-transition:-webkit-transform 2s ease;
  -moz-transition:   -moz-transform 2s ease;
  -ms-transition:    -ms-transform 2s ease;
    transition:        transform 2s ease;
}
.component-wedding {
  color: black;
  height: 400px;
  background-size: cover;
  background-image: url("./../../../assets/images/wed2.jpg");
  width: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.component-wedding:hover .right-slide {
  -webkit-transform: translate(-110%, 0);
}
//just a test
</style>
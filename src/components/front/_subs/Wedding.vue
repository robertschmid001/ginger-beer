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
  // font-weight: normal;
  // font-style: normal;
}
h2 {
  font-weight: 500;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
}
.right-slide{
  padding: 70px 117px;
  background-size: cover;
  height: 100%;
  background-image: url("./../../../assets/images/parchment2.png");
    -webkit-filter: grayscale(50%);
  position: relative;
  left: 100%;
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
  // -webkit-clip-path: polygon(10% 0, 0 100%, 100% 100%, 100% 0);
}
.component-wedding:hover .right-slide {
  -webkit-transform: translate(-100%, 0);
}

</style>
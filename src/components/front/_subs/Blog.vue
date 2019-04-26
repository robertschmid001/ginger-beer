<template>
  <div class="component-blog">
    <div class="left-slide font-face">
      <h2>Visit Snowdonia!</h2>
      <div>
        You can customize labels etc for any events blah blah
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
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
.component-blog {
  color: black;
  height: 400px;
  background-size: cover;
  background-image: url("./../../../assets/images/cabin.jpg");
  -webkit-filter: grayscale(10%);
  width: contain;
}

.left-slide{
  // padding: 70px 117px;
  padding: 20px;
  text-align: center;
  background-size: cover;
  height: 100%;
  //background-image: url("./../../../assets/images/parchment2.png");
  background-image: url("./../../../assets/images/label_smaller.jpeg");
  -webkit-filter: grayscale(50%);
  position: relative;
  right: 110%;
  -webkit-transition:-webkit-transform 2s ease;
  -moz-transition:   -moz-transform 2s ease;
  -ms-transition:    -ms-transform 2s ease;
    transition:        transform 2s ease;
}
.component-blog:hover .left-slide {
  -webkit-transform: translate(110%, 0);
}
</style>
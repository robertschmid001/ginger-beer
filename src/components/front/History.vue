<template>
  <div id="history">
    <div class="title-wrapper-history">
      <h1 class="font-face">The origins of the Spyder dynasty!</h1>
    </div>
    <div class="text-wrapper">
      Back in the earlier part of last century, Granpa Wilhelm Caspar Schmid used to brew ginger beer to his own secret recipe in the mountains of Wellhausen near Fraunfeld, Eastern Switzerland. Ably assisted by diminutive sidekick, Septimus Spyder, he dug deep holes in the winter snow base to keep the freshly bottled products cool until the summer festive season.
      Spyder™ Ginger Beer and Spyder™ Dandelion & Burdock are now brewed to those original recipes and bottled deep in the heart of the old kingdom of Mercia..
      In a barn where time forgot, we forage for berries in the autumn and brew an ecclectic range of small beers ready for our medieval events.
    </div>
    <div class="door-wrapper">
      <div class="left">
        <img class="image-left6 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-left5 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-left4 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-left2 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-left3 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-left globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
      </div>
      <div class="right">
        <img class="image-right globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-right2 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-right3 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-right4 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-right5 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
        <img class="image-right6 globalShield" src="../../assets/images/vikingshield_resized.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
.title-wrapper-history {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
}
.globalShield {
  position: absolute;
  top:-5%;
  height: 500px;
  overflow: visible;
  -webkit-transition:-webkit-transform 2s ease;
  -moz-transition:   -moz-transform 2s ease;
  -ms-transition:    -ms-transform 2s ease;
    transition:        transform 2s ease;
}
.image-left6 {
  right: 55%;
}
.image-left5 {
  right: 40%;
}
.image-left4 {
  right: 25%;
}
.image-left2 {
  right: 10%;
}
.image-left3 {
  right: -5%;
}
.image-left {
  right: -20%;
}
.image-right {
  left: 55%;
}
.image-right2 {
  left: 40%;
}
.image-right3 {
  left: 25%;
}
.image-right4 {
  left: 10%;
}
.image-right5 {
  left: -5%;
}
.image-right6 {
  left: -20%;
}

.left {
  position: relative;
  height: 100%;
  width: 50%;
  -webkit-transition:-webkit-transform 2s ease;
    -moz-transition:   -moz-transform 2s ease;
    -ms-transition:    -ms-transform 2s ease;
        transition:        transform 2s ease;
}
.right {
  position: relative;
  height: 100%;
  width: 50%;
  -webkit-transition:-webkit-transform 2s ease;
    -moz-transition:   -moz-transform 2s ease;
    -ms-transition:    -ms-transform 2s ease;
        transition:        transform 2s ease;
}
#history {
  //background-color: black;
  background-color: black;
  // background: linear-gradient(to top,rgba(3, 3, 3, 100) 85%,rgba(3, 3, 3, 0)100%);
  color: white;
  height: 470px;
  position: relative;
  z-index: 2;
  padding: 5% 20%;
  overflow: hidden;
}
#history:hover .left {
  -webkit-transform: translate(-100%, 0);
}
#history:hover .image-left {
  -webkit-transform: rotate(-90deg)
}
#history:hover .image-left2 {
  -webkit-transform: rotate(-90deg)
}
#history:hover .image-left3 {
  -webkit-transform: rotate(-90deg)
}
#history:hover .image-right4 {
  -webkit-transform: rotate(90deg)
}
#history:hover .image-right5 {
  -webkit-transform: rotate(90deg)
}
#history:hover .image-right6 {
  -webkit-transform: rotate(90deg)
}

#history:hover .right {
  -webkit-transform: translate(100%, 0)
}
.door-wrapper {
  position: absolute;
  color: black;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}
h1 {
  margin: 0;
}
</style>

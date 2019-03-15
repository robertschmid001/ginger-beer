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
        <img class="image-left" src="../../assets/images/wall.png" alt="">
      </div>
      <div class="right">
        <img class="image-right" src="../../assets/images/wall.png" alt="">
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
.image-left {
  position: absolute;
  top: 0;
  right: -15px;
}
.image-right {
  position: absolute;
  top: 0;
  left: -64px;
}
.left {
  background-image: url('../../assets/images/wall.png');
  background-position-x: -140%;
  position: relative;
  height: 100%;
  width: 50%;
  -webkit-transition:-webkit-transform 2s ease;
    -moz-transition:   -moz-transform 2s ease;
    -ms-transition:    -ms-transform 2s ease;
        transition:        transform 2s ease;
}
.right {
  background-image: url('../../assets/images/wall.png');
  background-position-x: 156%;
  position: relative;
  height: 100%;
  width: 50%;
  -webkit-transition:-webkit-transform 2s ease;
    -moz-transition:   -moz-transform 2s ease;
    -ms-transition:    -ms-transform 2s ease;
        transition:        transform 2s ease;
}
#history {
  background-color: black;
  color: white;
  height: 400px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 5% 20%;
}
#history:hover .left {
    -webkit-transform: translate(-100%, 0);
       -moz-transform: translate(-100%, 0);
        -ms-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
}
#history:hover .right {
    -webkit-transform: translate(100%, 0);
       -moz-transform: translate(100%, 0);
        -ms-transform: translate(100%, 0);
            transform: translate(100%, 0);
}
.door-wrapper {
  position: absolute;
  color: black;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  top: 0;
  left: 0;
  z-index: 1;
  height: 400px;
  width: 100%;
}
h1 {
  margin: 0;
}
</style>

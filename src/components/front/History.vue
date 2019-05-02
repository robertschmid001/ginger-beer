<template>
  <div id="history">
    <div class="title-wrapper-history">
      <h1 class="font-face">Hail Good Fellows and Nobles !</h1>
    </div>
    <div class="text-wrapper">
      &nbsp; Barn brewed Mead ...a drink from the gods ...inspired through Devine Intervention of Bee Juice....Lord Hogsbreath Mead in Saxon Stoneware Crocks .
<br>
      &nbsp; Whether you are an Archer ..a Knight ....or just plain Guttersnype ...
<br><br>
      &nbsp; Find us at events throughout the Kingdoms 
<br>
      &nbsp; Mercia ...Danelaw ...stride King Offa's Wall to the brave Celts ...down to Wessex past the bandits of Londiniun (if you dare). 
<br>
      &nbsp; Travel by coach ...or on horseback ...to festivals of Musique ...or reinventions of Battles of Olde...
<br><br>
      &nbsp; Download ...Bushcraft ...Bloodstock ...Ramblin' Man ...Castles of Hever ..Ludlow ..York ..Cardiff ...Caerphilly..
      <br><br>
      &nbsp; We exist for your pleasure.. 
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
  top: -30px;
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
  background-color: black;
  // background: linear-gradient(to top,rgba(3, 3, 3, 100) 85%,rgba(3, 3, 3, 0)100%);
  color: white;
  height: 500px;
  position: relative;
  z-index: 2;
  padding: 0% 20%;
  text-align: center;
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
  padding-top: 30px;
  margin: 0;
}
@media only screen and (max-width: $phone) {
  h1 {
    font-size: 20px;
  }
  .text-wrapper {
    font-size: 12px;
  }
  #history {
    padding: 0% 10%;
    text-align: center;
  }
  .image-left6 {
    display: none;
  }
  .image-left5 {
    display: none;
  }
  .image-left4 {
    display: none;
  }
  .image-left2 {
    display: none;
  }
  .image-left3 {
    right: -30%;
  }
  .image-left {
    right: -80%;
  }
  .image-right {
    display: hidden;
  }
  .image-right2 {
    display: hidden;
  }
  .image-right3 {
    display: hidden;
  }
  .image-right4 {
    display: hidden;
  }
  .image-right5 {
    left: -20%;
  }
  .image-right6 {
    left: -80%;
  }
  #history:hover .right {
    -webkit-transform: translate(150%, 0)
  }
  #history:hover .left {
    -webkit-transform: translate(-150%, 0)
  }
}
@media only screen and (min-width: $tablet) {

  #history {
    padding: 0% 30%;
    text-align: center;
  }
}
</style>

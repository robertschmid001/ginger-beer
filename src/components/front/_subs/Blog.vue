<template>
  <div class="component-blog">
    <div class="bloc-wrapper" >
        <div class="color-bloc"></div>
    </div>
    <div class="left-slide font-face">
      <div class="content-wrapper" >
        <h2>Escape to Snowdonia</h2>
        <div class="text-wrapper">
          Located in the southern half of Snowdonia National Park near Trawsfynydd.
          <br><br>
          Cabin 102  is a superb self catering Norwegian Log Cabin available for booking  all year round except November .
          <br><br>
          Situated in a Holiday Village the cabin has easy access to the central reception facility to welcome you upon arrival .
          <br><br>
          Trawsfynydd Holiday Village is an exceptionally well maintained site perfect for families,  our cabin has two bedrooms , one with a double bed ...the other with two bunk beds .
          <br><br>
          Drop in to Portmeirion ...just a few miles towards Portmadog this is home to Number 6 (The Prisoner TV series of the 60's ) ...The Village drops down to the immense beach where legend has it 'Rover' will stop you escaping !
        </div>
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
.content-wrapper {
  // position: relative;
  // z-index: 600!important;
  // position: absolute;
  // z-index: 10000;
}
.text-wrapper {
  text-align: center;
}
.bloc-wrapper {
  -webkit-transition:-webkit-transform 2s ease;
  -moz-transition:   -moz-transform 2s ease;
  -ms-transition:    -ms-transform 2s ease;
    transition:        transform 2s ease;

  position: relative;
  bottom:50px;
  left: -160px;
    position: absolute;
    display: flex;

}
.color-bloc {
  background-color: #1F1E20;
  height: 300px;
  width: 300px;
  // -webkit-transform: rotate(5deg);
  // transform: skew(10deg, 44deg);
  -webkit-transform: rotate(45deg);
  z-index: 0;

}
h2 {
  font-weight: 500;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
}
.component-blog {
  position: relative;
  color: black;
  height: 400px;
  background-size: cover;
  background-image: url("./../../../assets/images/cabin.jpg");
  -webkit-filter: grayscale(10%);
  width: contain;
  overflow: hidden;
}

.left-slide{
  padding: 20px;
  text-align: center;
  background-size: cover;
  height: 100%;
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
.component-blog:hover .bloc-wrapper {
  -webkit-transform: translate(-110%, 0);
}
@media only screen and (max-width: $phone) {
.text-wrapper {
  font-size: 11px;
  }
}
</style>
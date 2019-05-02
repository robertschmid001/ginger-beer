<template>
  <div class="component-blog" v-on:mouseover="isOpening" v-on:mouseleave="isClosing">
    <!-- <img class="wax-image" :src="require('../../../assets/images/wax.png')" alt=""> -->
    <i class="material-icons info-icon pointer">info</i>
    <transition name="slide-left">
      <div class="left-slide font-face" v-show="isOpened" @click="isClosing">
        <div class="content-wrapper" >
          <div class="text-wrapper">
            Located in the southern half of Snowdonia National Park near Trawsfynydd.
            <br><br>
            Cabin 102 is a superb self catering Norwegian Log Cabin available for booking all year round except November.
            <br><br>
            Situated in a Holiday Village the cabin has easy access to the central reception facility to welcome you upon arrival.
            <br><br>
            Trawsfynydd Holiday Village is an exceptionally well maintained site perfect for families, our cabin has two bedrooms, one with a double bed ...the other with two bunk beds.
            <br><br>
            Drop in to Portmeirion ...just a few miles towards Portmadog this is home to Number 6 (The Prisoner TV series of the 60's ) ...The Village drops down to the immense beach where legend has it 'Rover' will stop you escaping !
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      isOpened: false,
    }
  },
  methods: {
    isOpening () {
      return this.isOpened = true
    },
    isClosing () {
      return this.isOpened = false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/GlobalStyles.scss';

@font-face {
  font-family: 'Algerian';
  src: url('../../../assets/fonts/Algerian-Regular.ttf') format('truetype');
}
.wax-image {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
}
.info-icon {
  position: absolute;
  bottom: 15px;
  right: 14px;
  font-size: 53px;
  color: #1F1E20 ;
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
  max-width: 900px;
  overflow: hidden;
}

.left-slide {
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  background-size: cover;
  height: 100%;
  background-image: url("./../../../assets/images/label_smaller.jpeg");
  -webkit-filter: grayscale(50%);
  // position: relative;
  // right: 110%;
  // -webkit-transition:-webkit-transform 2s ease;
  // -moz-transition:   -moz-transform 2s ease;
  // -ms-transition:    -ms-transform 2s ease;
  //   transition:        transform 2s ease;
}
// .component-blog:hover .left-slide {
//   -webkit-transform: translate(110%, 0);
// }

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 2s ease;
}
.slide-left-enter {
  opacity: 1;
  transform: translateX(-100%);
}
.slide-left-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}

@media only screen and (max-width: $phone) {
.text-wrapper {
  font-size: 11px;
  }
}
@media only screen and (min-width: $desktop) {
  .left-slide {
    padding: 20px 80px;
  }
}
</style>
<template>
  <div class="big-image">
    <div class="content-wrapper">
      <i class="material-icons icons-image pointer" @click="previous">navigate_before</i>
      <div class="image-wrapper" >
      <i class="material-icons clear-icon pointer" @click="close">clear</i>
        <img class="image-closeup" :src="this.activeI" alt="">
      </div>
      <i class="material-icons icons-image pointer" @click="next">navigate_next</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bigImage',
  props: ['activeImage'],
  data () {
    return {
      activeI: this.activeImage
    }
  },
  watch: {
    activeImage: function (val) {
        this.activeI = val
    }
  },
  methods: {
    close () {
      this.$emit('closeMe')
    },
    next () {
      this.$emit('next')
    },
    previous () {
      this.$emit('previous')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/GlobalStyles.scss';
.image-wrapper {
  position: relative;
}
.clear-icon {
  position: absolute;
  top: -42px;
  right: -43px;
  font-size: 45px;
  color: white;
}

.icons-image {
  color: white;
  font-size: 70px;
}
h2 {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.big-image {
  position: absolute;
  background-color: #1a1b1eb3;
  color: black;
  background-size: cover;
  width: contain;
  display: flex;
  height: 100%;
  width: 100%;
}
.text-wrapper {
  text-align: center;
}
.content-wrapper {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  // padding: 20px 50px;
}
.image-closeup {
  // position: relative;
  max-height: 500px;
  max-width: 700px;
  border: 10px solid white;
  box-sizing: border-box;
}
@media only screen and (max-width: $phone) {
.image-closeup {
    // position: relative;
    max-height: 500px;
    width: 100%;
    border: 10px solid white;
    box-sizing: border-box;
  }
}
</style>
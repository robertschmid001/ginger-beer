<template>
  <div class="big-image" @click="close">
    <div class="content-wrapper">
       <img class="wax-image" :src="this.activeImage" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'bigImage',
  props: ['activeImage'],
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('closeMe')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/GlobalStyles.scss';

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
.wax-image {
  // position: relative;
  max-height: 500px;
  max-width: 700px;
  border: 10px solid white;
  box-sizing: border-box;
}
</style>
<template>
  <div class="hello">
  <h1 class="font-face">Where to find us?</h1>
    <v-content>

      <v-timeline>
        <v-timeline-item
          v-for="(item, index) in this.$store.state.trail"
          :key="index"
          small
        >
          <v-avatar slot="icon">
          <img src="../../assets/images/wax.png">
          </v-avatar>
          <span slot="opposite">
          {{item.to}}<br>
          {{item.from}}</span>
          <v-card class="elevation-2 card" >
            <v-card-title class="headline font-face" >{{item.title}}</v-card-title>
            <v-card-text>
              {{item.description}}
            </v-card-text>
            <v-card-text>
              {{item.address1}} <br>
              {{item.address2}} <br>
              {{item.address3}}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>

    </v-content>
  </div>
</template>

<script>
export default {
  name: 'Trail',
  data () {
    return {
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer'
        }
      ]
    }
  },
  computed: {
  },
  methods: {

  },
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

.v-timeline-item--fill-dot .v-timeline-item__inner-dot {
  height: 10px!important;
  width: 10px!important;
}
.v-card__text {
  padding: 0 10px 10px 10px;
}
.hello {
  padding:30px 0;
  background-image: url('../../assets/images/parch.jpg');
  background-size: cover;
}
.step-css {
  max-height: 200px;
}
img {
  height: 50px;
}
h1 {
  margin: 0;
  margin-bottom: 30px;
  text-align: center;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat');
$font-stack: 'Montserrat', sans-serif;
$font-color: black;
$bg-color: #d3d3d3;
$dark-blue: #2E4A62;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: '';
  position: absolute;
  top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}
.headline {
padding: 5px 10px;
}
body {
    // background-color: $bg-color;
}
*, *::before, *::after {
    margin: 0; padding: 0;
	  box-sizing: border-box;
	  font-family: $font-stack;
	  color: $font-color;
}
main {
    max-width: 800px;
    height: 100%;
    margin: 1em auto;
    padding: 40px;
    // background: $dark-blue;
    // border-radius: 4px;
    // box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
.timeline {
  // background-color: white;
  padding: 5px 70px 5px 180px;
  ul {
    width: auto;
    // display: flex;
    // flex-direction: column;
    // text-align: center;
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    &>span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    &>span::before, &>span::after {
      @include clearfix();
      width: 14px; height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    &>span::before {
      top: -15px;
    }
    &>span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.2em;
      }
      &:nth-child(3), &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -200px;
      width: auto;
      text-align: right;
      &:first-child {
        top: -20px;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}
</style>
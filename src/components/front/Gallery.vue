<template>
  <div id="gallery">

    <v-layout row>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap aspect-ratio="1.7778">
              <v-flex class="flex-wrapper" lazy-src v-for="(i, index) in items" :key="index" xs12 sm6 md4>
                <v-img aspect-ratio="1.7" :src="i.image" class="image pointer" alt="lorem" width="100%" height="100%" @click="open(i.image, index)"></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  <bigImage v-if="showImage" @closeMe="close" :activeImage="activeComp" @next="next" @previous="previous" />
  </div>
</template>

<script>
import bigImage from './_subs/CloseUp.vue'
export default {
  name: 'Gallery',
  data () {
    return {
      active: '',
      showImage: false,
      currentIndex: '',
      items: [
        {
          image: require('../../assets/images/gallery/archer.jpg')
        },
        {
          image: require('../../assets/images/gallery/army.jpg')
        },
        {
          image: require('../../assets/images/gallery/bottles.jpg')
        },
        {
          image: require('../../assets/images/gallery/crock.jpg')
        },
        {
          image: require('../../assets/images/gallery/here.jpg')
        },
        {
          image: require('../../assets/images/gallery/knight.jpg')
        },
        {
          image: require('../../assets/images/gallery/main.jpg')
        },
        {
          image: require('../../assets/images/gallery/monk.jpg')
        },
        {
          image: require('../../assets/images/gallery/owl.jpg')
        },
        {
          image: require('../../assets/images/gallery/witch.jpg')
        },
        {
          image: require('../../assets/images/gallery/witchy.jpg')
        }
      ]
    }
  },
  components: {
    bigImage
  },
  computed: {
    activeComp () {
      console.log(this.active, 'active')
      return this.active
    }
  },
  methods: {
    open (image, i) {
      this.currentIndex = i
      this.active = image
      this.showImage = true
    },
    next () {
      this.currentIndex = this.currentIndex + 1
      if (this.items[this.currentIndex]){
        return this.active = this.items[this.currentIndex].image
      } else
        this.currentIndex = 0
        return this.active = this.items[0].image
    },
    previous () {
      this.currentIndex = this.currentIndex - 1
      if (this.items[this.currentIndex]){
        return this.active = this.items[this.currentIndex].image
      } else
      this.currentIndex = this.items.length-1
      this.active = this.items[this.items.length-1].image
    },
    close () {
      this.showImage = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../styles/GlobalStyles.scss';

#gallery {
  position: relative;
  color: white;
  background-image: url('../../assets/images/wood1.jpg');
  background-repeat: repeat;
  padding: 120px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.container.grid-list-md .layout .flex {
  padding: 1px;
  overflow: hidden;
}
.image {
    transition:transform 0.25s ease;
}

.image:hover {
    -webkit-transform:scale(1.2);
    transform:scale(1.2);
}
</style>

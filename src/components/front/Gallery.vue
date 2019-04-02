<template>
  <div id="gallery">

    <v-layout row>
      <v-flex xs12 sm10 offset-sm1> 
        <v-card>
          <v-container fluid grid-list-md>
            <v-layout row wrap aspect-ratio="1.7778">
              <v-flex class="flex-wrapper" lazy-src v-for="(i, index) in items" :key="index" xs12 sm6 md4>
                <v-img aspect-ratio="1.7" :src="i.image" class="image" alt="lorem" width="100%" height="100%"></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
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
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#gallery {
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
</style>

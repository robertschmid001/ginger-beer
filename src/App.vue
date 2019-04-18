<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  },
  methods: {
    // getTrail () {
    //   axios.get('http://localhost:5000/api/trail')
    //   .then(response => {
    //     this.$store.state.trail = response.data
    //   })
    // }
  },
  mounted () {
    // this.getTrail();
  }
}
</script>
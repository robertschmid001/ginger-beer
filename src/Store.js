import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    trail: [],
    articles: [{
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title1",
        description: "This is just a random1 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title2",
        description: "This is just a random2 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title3",
        description: "This is just a random3 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title4",
        description: "This is just a random4 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title3",
        description: "This is just a random3 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/beers/gingerbeer2.jpg',
        title: "This is a title4",
        description: "This is just a random4 description of the current, selected product",
        cat: "drink"
      },
      {
        image: '../../assets/images/objects/gingerbeer3.jpg',
        title: "This is an object4",
        description: "This is just a random4 description of the current, selected product",
        cat: "object"
      },
      {
        image: '../../assets/images/objects/gingerbeer4.jpg',
        title: "This is an object2",
        description: "This is just a random2 description of the current, selected product",
        cat: "object"
      },
      {
        image: '../../assets/images/objects/gingerbeer3.jpg',
        title: "This is an object1",
        description: "This is just a random1 description of the current, selected product",
        cat: "object"
      },
      {
        image: '../../assets/images/objects/gingerbeer4.jpg',
        title: "This is an object3",
        description: "This is just a random3 description of the current, selected product",
        cat: "object"
      },
    ],





  }









})
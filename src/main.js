import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

import Vuex from 'vuex'

import router from './routes.js'
import { store } from './Store'

import Carousel3d from 'vue-carousel-3d';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)
Vue.use(Carousel3d);

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
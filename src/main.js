import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

import AlertComponent from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.component('app-alert', AlertComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAOeZuxkaaXVYhQg4Lnj3mlooAJZYLnSN0',
      authDomain: 'firechat-9f670.firebaseapp.com',
      databaseURL: 'https://firechat-9f670.firebaseio.com',
      projectId: 'firechat-9f670',
      storageBucket: 'firechat-9f670.appspot.com',
      messagingSenderId: '184210464974'
    })
  }
})

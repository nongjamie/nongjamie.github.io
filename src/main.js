import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vueScrollto from 'vue-scrollto'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(vueScrollto)

11

11.07

11.12

new Vue({
  el: '#app',
  render: h => h(App)
})

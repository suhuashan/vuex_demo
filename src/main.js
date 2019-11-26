import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)

let store = createStore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

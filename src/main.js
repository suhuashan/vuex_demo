import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)

let store = createStore()

//  动态加载模块C的store
store.registerModule('moduleC', {
  state: {
    text: 'moduleC'
  }
})

store.watch((state) => state.moduleA.count + 1, (newCount) => {
  console.log('newCount', newCount)
})

store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

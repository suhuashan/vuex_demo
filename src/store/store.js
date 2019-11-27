import Vuex from 'vuex'
import moduleA from './modules/module_a'
import moduleB from './modules/module_b'
import state from './state/state_global'
import mutations from './mutations/mutation_global'
import actions from './actions/action_global'
import getters from './getters/getter_global'

let isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    modules: {
      moduleA: {
        namespaced: true,
        ...moduleA
      },
      moduleB: {
        namespaced: true,
        ...moduleB
      }
    },
    state,
    getters,
    mutations,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state/state_global',
      './getters/getter_global',
      './mutations/mutation_global',
      './actions/action_global'
    ], () => {
      const newState = require('./state/state_global').default
      const newGetters = require('./getters/getter_global').default
      const newMutations = require('./mutations/mutation_global').default
      const newActions = require('./actions/action_global').default

      store.hotUpdate({
        state: newState,
        getters: newGetters,
        mutations: newMutations,
        actions: newActions
      })
    })
  }

  return store
}

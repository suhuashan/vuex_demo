import Vuex from 'vuex'
import moduleA from './modules/module_a'
import moduleB from './modules/module_b'
import { UPDATE_GLOBAL_STATUS } from './constants/types'

let isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
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
    state: {
      globalStatus: false
    },
    getters: {
      getGlobalStatus (store) {
        return `全局状态为${store.globalStatus};`
      }
    },
    mutations: {
      [UPDATE_GLOBAL_STATUS] (state, status) {
        state.globalStatus = status
      }
    },
    actions: {
      //  对于全局store的action来说，state和rootState是一样的
      //  rootState表示全局数据，state表示当前模块的数据
      updateGlobalStatusAsync ({commit, state, rootState}) {
        setTimeout(() => {
          commit(UPDATE_GLOBAL_STATUS, !rootState.globalStatus)
        }, 1000)
      }
    }
  })
}

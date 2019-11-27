import { UPDATE_COUNT, UPDATE_GLOBAL_STATUS, UPDATE_PEOPLE_NUM } from '../constants/types'

export default {
  //  这里commit的mutations不需要加上模块名，默认在当前模块store下找
  updateCounterAsync (store) {
    setTimeout(() => {
      store.commit(UPDATE_COUNT, 10)
    }, 1000)
  },
  //  如果需要用到其他模块的mutation，则需在参数加上{ root: true },且commit需要加上模块作用域
  updateModuleBPeopleNumAsync (store) {
    setTimeout(() => {
      store.commit(`moduleB/${UPDATE_PEOPLE_NUM}`, 10000, { root: true })
    }, 1000)
  },
  //  如果是用全局store的mutation，则commit不需要加上模块作用域,只需加{ root: true }
  updateGlobalStatus ({commit, state, rootState}) {
    setTimeout(() => {
      commit(UPDATE_GLOBAL_STATUS, !rootState.globalStatus, { root: true })
    }, 1000)
  }
}

//  如果当前模块没有声明namespaced属性的话，那么无需加上{ root: true }
//  声明该属性后，commit会以该模块下/mutation去查找，所以需要加上root: true

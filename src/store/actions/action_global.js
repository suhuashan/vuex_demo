import { UPDATE_GLOBAL_STATUS } from '../constants/types'

export default {
  //  对于全局store的action来说，state和rootState是一样的
  //  rootState表示全局数据，state表示当前模块的数据
  updateGlobalStatusAsync ({commit, state, rootState}) {
    setTimeout(() => {
      commit(UPDATE_GLOBAL_STATUS, !rootState.globalStatus)
    }, 1000)
  }
}

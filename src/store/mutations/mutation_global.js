import { UPDATE_GLOBAL_STATUS } from '../constants/types'

export default {
  [UPDATE_GLOBAL_STATUS] (state, status) {
    state.globalStatus = status
  }
}

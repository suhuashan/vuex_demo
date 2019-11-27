import { UPDATE_COUNT } from '../constants/types'

export default {
  [UPDATE_COUNT] (state, num) {
    state.count += num
  }
}

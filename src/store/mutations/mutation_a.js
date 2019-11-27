import { UPDATE_COUNT } from '../constants/types'

export default {
  [UPDATE_COUNT] (state, num) {
    console.log(state)
    state.count += num
  }
}

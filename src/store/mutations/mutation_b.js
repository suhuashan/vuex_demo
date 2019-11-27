import { UPDATE_PEOPLE_NUM } from '../constants/types'

export default {
  [UPDATE_PEOPLE_NUM] (state, num) {
    console.log(state)
    state.peopleNum += num
  }
}

import { UPDATE_PEOPLE_NUM, UPDATE_COUNT } from '../constants/types'

export default {
  updatePeopleNumAsync (store) {
    setTimeout(() => {
      store.commit(UPDATE_PEOPLE_NUM, 5000)
    }, 1000)
  },
  updateModuleACount (store) {
    setTimeout(() => {
      store.commit(`moduleA/${UPDATE_COUNT}`, 20, { root: true })
    })
  }
}

import Vuex from 'vuex'
import moduleA from './modules/module_a'
import moduleB from './modules/module_b'

export default () => {
  return new Vuex.Store({
    modules: {
      moduleA,
      moduleB
    }
  })
}

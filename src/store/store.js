import Vuex from 'vuex'
import moduleA from './modules/module_a'
import moduleB from './modules/module_b'

let isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    modules: {
      moduleA,
      moduleB
    }
  })
}

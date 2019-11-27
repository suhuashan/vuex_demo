export default {
  getUserInfo (state, getters, rootState) {
    //  rootState是整个项目所有数据
    console.log(state, getters, rootState)
    return `${state.name} is ${state.age} years old`
  },
  getCount (state, getters, rootState) {
    return `点击已经${state.count}次`
  }
}

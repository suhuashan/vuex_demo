export default {
  getUserInfo (state) {
    return `${state.name} is ${state.age} years old`
  },
  getCount (state) {
    return `点击已经${state.count}次`
  }
}

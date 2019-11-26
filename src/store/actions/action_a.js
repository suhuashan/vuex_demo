export default {
  updateCounterAsync (store) {
    setTimeout(() => {
      store.state.count += 5
    }, 1000)
  }
}

export default {
  updatePeopleNumAsync (store) {
    setTimeout(() => {
      store.state.peopleNum += 5000
    }, 1000)
  }
}

<template>
  <div id="app">
    <div>全局store</div>
    <div>{{ globalStatus }}</div>
    <div>{{ getGlobalStatus }}</div>
    <button @click="handleClick(true)">同步改变</button>
    <button @click="handleClickAsync">异步改变</button>
    <hr/>
    <module-a/>
    <hr/>
    <module-b/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { UPDATE_GLOBAL_STATUS } from './store/constants/types'
import ModuleA from './home/module_a'
import ModuleB from './home/module_b'

export default {
  name: 'App',
  components: {
    ModuleA,
    ModuleB
  },
  computed: {
    ...mapState({
      globalStatus: (state) => state.globalStatus
    }),
    ...mapGetters(['getGlobalStatus'])
  },
  methods: {
    ...mapMutations({
      handleClick: UPDATE_GLOBAL_STATUS
    }),
    ...mapActions({
      handleClickAsync: 'updateGlobalStatusAsync'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

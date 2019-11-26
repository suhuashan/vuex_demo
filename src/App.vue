<template>
  <div id="app">
    <module-a/>
    <hr/>
    <module-b/>
  </div>
</template>

<script>
import ModuleA from './home/module_a'
import ModuleB from './home/module_b'

export default {
  name: 'App',
  components: {
    ModuleA,
    ModuleB
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

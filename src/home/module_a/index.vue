<template>
<section>
  <div>模块A的数据</div>
    <div class="hello">
    <div>{{ counter }}</div>
    <div>{{ getCount }}</div>
    <button @click="handleClick(20)">点击</button>
    <button @click="handleClickSync">异步点击</button>
    <div>{{ getUserInfo }}</div>
    <button @click="updateModuleBPeopleNum">改变moduleB人数</button>
    <button @click="updateGlobalStatus">改变全局状态</button>
  </div>
</section>

</template>

<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
/* eslint-enable */
import { UPDATE_COUNT } from '../../store/constants/types'

export default {
  name: 'ModuleA',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      counter: (state) => state.moduleA.count
    }),

    ...mapGetters({
      getUserInfo: 'moduleA/getUserInfo',
      getCount: 'moduleA/getCount'
    })

    // counter () {
    //   return this.$store.getters.getCount
    // },
    // userInfo () {
    //   return this.$store.getters.getUserInfo
    // }
  },
  methods: {
    ...mapMutations({
      handleClick: `moduleA/${UPDATE_COUNT}`
    }),
    ...mapActions({
      handleClickSync: 'moduleA/updateCounterAsync',
      updateModuleBPeopleNum: 'moduleA/updateModuleBPeopleNumAsync',
      updateGlobalStatus: 'moduleA/updateGlobalStatus'
    })
    // handleClick () {
    //   this.$store.commit('updateCount', 1)
    // },
    // handleClickSync () {
    //   this.$store.dispatch('updateCounterAsync')
    // }
  }
}
</script>

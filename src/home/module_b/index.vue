<template>
<section>
  <div>模块B的数据</div>
    <div class="hello">
    <div>{{ peopleNum }}</div>
    <button @click="handleClick(1000)">点击</button>
    <button @click="handleClickSync">异步点击</button>
    {{ getPlace }}
  </div>
</section>

</template>

<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
/* eslint-enable */
import { UPDATE_PEOPLE_NUM } from '../../store/constants/types'
export default {
  name: 'ModuleB',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      peopleNum: (state) => {
        return state.moduleB.peopleNum
      }
    }),

    ...mapGetters(['getPlace'])
  },
  methods: {
    ...mapMutations({
      handleClick: UPDATE_PEOPLE_NUM
    }),
    ...mapActions({
      handleClickSync: 'updatePeopleNumAsync'
    })
  }
}
</script>

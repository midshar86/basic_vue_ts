<template>
  <h2>选项式API的写法</h2>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>computedCount: {{ packingCount }}</div>
  <p><button @click="addCount">点击更改count</button></p>
  <!-- 使用 mapWritableState 后可以直接修改 store 中的数据 -->
  <p><button @click="count += 2">点击直接修改count</button></p>
</template>

<script>
import useCountStore from '@/store/count'
import { mapActions, mapWritableState, mapState } from 'pinia'
export default {
  computed: {
    // 直接修改 store 中的数据
    ...mapWritableState(useCountStore, ['count']),
    // 获取仓库中的 getter 也利用 mapState
    ...mapState(useCountStore, ['packingCount']),
    doubleCount(state) {
      return state.count * 2
    }
  },
  methods: {
    ...mapActions(useCountStore, ['addCount'])
  }
}
</script>

<style lang="less" scoped></style>

<template>
  <div>
    <h2>选项式Api风格</h2>
    <p>count: {{ count }}</p>
    <p>计算属性: {{ showCount }}</p>
    <p><button @click="changCount(5)">点击更改Count</button></p>
    <p><button @click="count++">点击直接修改仓库中的count</button></p>
  </div>
</template>

<script>
// 引入仓库
import useCountStore from '@/stores/OptionApi/countStore.js'
// 通过映射实现读取仓库中的数据
import { mapState, mapActions, mapWritableState } from 'pinia'

export default {
  computed: {
    ...mapState(useCountStore, ['count']),
    // 获取仓库中的 getters 也是使用 ,mapState 映射
    ...mapState(useCountStore, ['showCount']),
    ...mapWritableState(useCountStore, ['count'])
  },
  methods: {
    ...mapActions(useCountStore, ['changCount'])
  }
}
</script>

<style lang="less" scoped></style>

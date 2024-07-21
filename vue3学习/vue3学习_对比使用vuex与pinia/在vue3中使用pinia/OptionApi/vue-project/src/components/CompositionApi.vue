<template>
  <h2>组合式Api风格</h2>
  <div>
    <p>count: {{ count }}</p>
    <p>getters count: {{ showCount }}</p>
    <p><button @click="changeCount(2)">点击更改count</button></p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
// 在组合式Api中访问仓库非常简单
// 1\引入
import useCountStoreComp from '@/stores/CompositionApi/countStore.js'
// 2\使用
// 使用 storeToRefs 解构只能解构 ref 与 computed
const { count, showCount } = storeToRefs(useCountStoreComp())
// 3\解构方法
const { changeCount } = useCountStoreComp()
// console.log(count, showCount, changeCount)
</script>

<style lang="scss" scoped></style>

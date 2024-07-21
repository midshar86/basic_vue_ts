<script setup>
// 在组合式 API 中没有辅助函数的方式
// 引用 useStore 使用仓库
import { useStore } from 'vuex'
import { computed } from 'vue'
// 执行, 获取仓库实例
const countStore = useStore()
const changeCount = () => {
  countStore.dispatch('changeCount', 5)
}

// 使用计算属性的方式从仓库中获取
const countWithComputed = computed(() => {
  return countStore.state.count
})
const gettersWithComputed = computed(() => {
  return countStore.getters.showCount
})
</script>

<template>
  <!-- 直接从仓库中获取state中的状态 -->
  <div>count: {{ countStore.state.count }}</div>
  <!-- 使用计算属性的方式从仓库中获取 state 中的状态 -->
  <div>countWithComputed: {{ countWithComputed }}</div>
  <hr />
  <!-- 直接从仓库中获取getters中的状态 -->
  <div>getters count: {{ countStore.getters.showCount }}</div>
  <!-- 使用计算属性的方式从仓库中获取 getters 中的数据 -->
  <div>gettersWithComputed: {{ gettersWithComputed }}</div>
  <div><button @click="changeCount">点击更改count</button></div>
</template>

<style scoped></style>

<template>
  <!-- 默认情况下, 多个根组件会被包含在 Fragment 中 -->
  <div class="root">
    <h2>父组件</h2>
    <hr />
    <TestSuspense></TestSuspense>
  </div>
</template>

<script setup>
import TestSuspense from './TestSuspense.vue'
</script>

<style lang="less" scoped>
.root {
  height: 100vh;
  background-color: silver;
}
</style>

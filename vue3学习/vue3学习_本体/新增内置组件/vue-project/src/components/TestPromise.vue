<template>
  <!-- 使用 Promise 对象模拟异步请求 -->
  <Suspense>
    <!-- 使用 Suspense 包裹异步组件 -->
    <MiddleComp></MiddleComp>
    <template #fallback>
      <p>组件正在加载中。。。</p>
    </template>
  </Suspense>
</template>

<script setup>
import MiddleComp from './MiddleComp.vue'
</script>

<style lang="scss" scoped></style>

<template>
  <Suspense>
    <PromiseSon></PromiseSon>
    <template #fallback>
      <p>数据正在请求中。。。</p>
    </template>
  </Suspense>
</template>

<script setup>
import PromiseSon from './PromiseSon.vue'
</script>

<style lang="scss" scoped></style>

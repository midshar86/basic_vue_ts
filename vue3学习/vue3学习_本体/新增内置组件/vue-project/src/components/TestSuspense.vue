<template>
  <Suspense>
    <template #default>
      <TestTeleport></TestTeleport>
    </template>
    <template #fallback>
      <div>组件正在加载中...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const TestTeleport = defineAsyncComponent(() => import('./TestTeleport.vue'))
</script>

<style lang="scss" scoped></style>

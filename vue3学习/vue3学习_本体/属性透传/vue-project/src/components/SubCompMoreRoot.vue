<template>
  <!-- 为该根节点绑定 $attrs -->
  <div v-bind="$attrs">第一个根节点</div>
  <div>第二个根节点</div>
</template>

<script setup>
import { useAttrs } from 'vue'

console.log(useAttrs())
</script>

<style lang="scss" scoped></style>

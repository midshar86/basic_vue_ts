<template>
  <!-- 为某个子组件或者元素绑定 -->
  <div v-bind="$attrs" class="sonComp" style="background-color: #eee">子组件</div>
  <h1>子组件标题</h1>
</template>

<script setup>
import { useAttrs } from 'vue'
// 在 js 中访问 attrs
const attrs = useAttrs()
console.log(attrs)
</script>

<style lang="scss" scoped></style>

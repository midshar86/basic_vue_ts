<template>
  <div>子组件</div>
  <p>父组件传递的属性:</p>
  <p>title: {{ title }}</p>
  <p>info: {{ info }}</p>
</template>

<script setup>
import { defineProps } from 'vue'
// 使用 defineProps 接收父组件传递的属性
const props = defineProps(['title', 'info', 'method'])
props.method()
</script>

<style lang="scss" scoped></style>

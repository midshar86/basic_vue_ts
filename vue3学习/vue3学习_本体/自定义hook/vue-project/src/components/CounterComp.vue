<template>
  <h3>计数器</h3>
  <div>count: {{ count }}</div>
  <div><button @click="addCount(5)">点击+5</button></div>
  <div><button @click="addCount(10)">点击+10</button></div>
</template>

<script setup>
import { count, addCount } from '@/utils/changeCount'
</script>

<style lang="scss" scoped></style>

<template>
  <h3>功能组件</h3>
  <PagerComp></PagerComp>
  <hr />
  <PagerComp :totalNum="15" :activeIndex="9"></PagerComp>
  <hr />
  <CounterComp></CounterComp>
</template>

<script setup>
import PagerComp from './PagerComp.vue'
import CounterComp from './CounterComp.vue'
</script>

<style lang="less" scoped></style>

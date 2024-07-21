<template>
  <div>父组件</div>
  <p>{{ info }}</p>
  <hr />
  <SubComp></SubComp>
</template>

<script setup>
import { inject } from 'vue'
import SubComp from './SubComp.vue'
const info = inject('info')
</script>

<style lang="scss" scoped></style>

<template>
  <p>父组件</p>
  <hr />
  <!-- 自定义一个转换首字母为大写的修饰符 -->
  <SubComp v-model:username.toUpperCase="username"></SubComp>
  <!-- 不添加修饰符就不会将首字母大写 -->
  <SubComp v-model:username="username"></SubComp>
</template>

<script setup>
import { ref } from 'vue'
import SubComp from './SubComp.vue'

const username = ref('midshar')
</script>

<style lang="scss" scoped></style>

<template>
  <div>子组件</div>

  <!-- 在模板中使用 $emit 触发父组件事件 -->
  <p><input type="text" :value="msg" @input="$emit('update:msg', $event.target.value)" /></p>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['msg'])
</script>

<style lang="scss" scoped></style>

<template>
  <p>父组件</p>
  <p>{{ msg }}</p>
  <hr />
  <SubComp :msg="msg" @changeMsg="changeMsg"></SubComp>
</template>

<script setup>
import { ref } from 'vue'
import SubComp from './SubComp.vue'
const msg = ref('父组件的msg')
const changeMsg = (val) => {
  msg.value = val
}
</script>

<style lang="scss" scoped></style>

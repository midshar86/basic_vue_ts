<template>
  <div>父组件</div>
  <hr />
  <SubComp :title="parProp" info="msg" :method="sendMsg"></SubComp>
</template>

<script setup>
import { ref } from 'vue'
import SubComp from './SubComp.vue'
const parProp = ref('父组件的title')
const sendMsg = () => {
  console.log('父组件传递的方法')
}
</script>

<style lang="scss" scoped></style>

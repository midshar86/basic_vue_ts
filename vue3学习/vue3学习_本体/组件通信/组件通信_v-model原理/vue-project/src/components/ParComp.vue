<template>
  <div>父组件</div>
  <p>使用最基本的原理实现v-model</p>
  <p>{{ msg }}</p>
  <hr />
  <SubComp :msg="msg" @sendMsg="setMsg"></SubComp>
  <hr />
  <p>v-model简写方式</p>
  <!-- 使用 update:prop 的简写方式 -->
  <SubCompShortWrite :msg="msg" @update:msg="setMsg"></SubCompShortWrite>
  <hr />
  <p>组件层级的v-model使用</p>
  <SubCompUsingVmodel v-model:msg="msg"></SubCompUsingVmodel>
</template>

<script setup>
import { ref } from 'vue'
import SubComp from './SubComp.vue'
import SubCompShortWrite from './SubCompShortWrite.vue'
import SubCompUsingVmodel from './SubCompUsingVmodel.vue'

const msg = ref('父组件的msg')
const setMsg = (val) => {
  msg.value = val
}
</script>

<style lang="scss" scoped></style>

<template>
  <hr />
  <h3>使用readonly()</h3>
  <div>
    <p>{{ justReadNormalObj }}</p>
    <p><button @click="justReadNormalObj.a = 1">点击更改a</button></p>
    <p><button @click="justReadNormalObj.c.shar = 2">点击更改c</button></p>
  </div>
  <hr />
  <h3>使用shallowReadonly()</h3>
  <p>{{ justShallowReadonly }}</p>
  <p><button @click="justShallowReadonly.a = 1">点击修改a</button></p>
  <p><button @click="justShallowReadonly.c.char = 2">点击修改c</button></p>
</template>

<script setup>
import { onMounted, reactive, readonly, shallowReadonly } from 'vue'

let normalObj = {
  a: 'a',
  b: 'b',
  c: {
    char: 'c'
  }
}
let reactiveObj = reactive(normalObj)
const justReadNormalObj = readonly(reactiveObj)
onMounted(() => {
  console.log(justReadNormalObj)
})

const justShallowReadonly = shallowReadonly(reactiveObj)
</script>

<style lang="scss" scoped></style>

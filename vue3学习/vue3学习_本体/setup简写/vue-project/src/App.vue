<script setup>
import Sub from '@/components/sub-comp.vue'
import { ref } from 'vue'
const title = '父组件的标题内容'
const name = '父组件'
const nodeName = 'parentNode'
let pos = ref(true)
const handlerChange = () => {
  pos.value = !pos.value
}
</script>

<template>
  <div>
    <Sub :title="title" :name="name" :class="nodeName" :pos="pos" @changePos="handlerChange">
      <template #par>
        <p>父组件使用具名插槽传递的内容</p>
      </template>
      <p>向匿名插槽传递至</p>
    </Sub>
  </div>
</template>

<style scoped></style>

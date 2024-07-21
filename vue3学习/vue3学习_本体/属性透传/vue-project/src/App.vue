<script setup>
import SubComp from './components/SubComp.vue'
import SubCompMoreRoot from './components/SubCompMoreRoot.vue'
</script>

<template>
  <!-- 只有 class 与 style 同名属性会合并， 其余同名属性父组件会覆盖子组件 -->
  <!-- 子组件只有一个根节点 -->
  <SubComp
    attr="par"
    par="parent"
    class="parClass"
    title="parTitle"
    style="border: 1px solid green"
  ></SubComp>
  <hr />
  <!-- 子组件有多个根节点 -->
  <SubCompMoreRoot title="par" index="1"></SubCompMoreRoot>
</template>

<style scoped></style>

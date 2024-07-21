<template>
  <ParComp :msg="msg" title="grandFather" class="tag" info="infos" style="color: red"></ParComp>
</template>

<script setup>
import ParComp from './ParComp.vue'
import { ref } from 'vue'

const msg = ref('曾父组件传递的属性')
</script>

<style lang="scss" scoped></style>

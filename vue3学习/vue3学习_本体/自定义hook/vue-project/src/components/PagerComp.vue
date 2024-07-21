<template>
  <div>
    <span
      v-for="(item, index) in totalNum"
      :class="active === index ? 'active' : ''"
      :key="item"
      @click="selectPager(index)"
      >{{ item }}</span
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 父组件使用子组件时, 支持传递值
const props = defineProps({
  // 默认创建10个pager
  totalNum: {
    type: Number,
    default: 10
  },
  // 默认选中第一个pager
  activeIndex: {
    type: Number,
    default: 0
  }
})
// 定义选中按钮的class属性
const active = ref(props.activeIndex)
// 点击更改高亮的pager
const selectPager = (index) => {
  active.value = index
}
</script>

<style lang="less" scoped>
div {
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #eee;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin: 0 5px;
    cursor: default;
    &.active {
      background-color: #aaa;
    }
  }
}
</style>

<template>
  <div>
    <p>{{ pos }}</p>
    <p><button @click="handlerClick">Click</button></p>
  </div>
  <hr />
  <div>父组件传递的插槽内容</div>
  <slot name="par">默认内容</slot>
  <slot>匿名插槽</slot>
</template>

<script>
export default {
  props: ['title', 'name', 'class', 'pos'],
  emits: ['changePos'],
  setup(props, { attrs, emit, slots }) {
    const handlerClick = () => {
      // attrs 接收所有未在 props 中接收的父传子参数
      console.log(attrs)
      emit('changePos')
      // 通过插槽名称获取插槽的内容, 匿名插槽名称 default
      console.log(slots)
    }
    return { handlerClick }
  }
}
</script>

<style scoped></style>

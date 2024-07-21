<template>
  <div id="app">
    <Sider></Sider>
    <!-- 一级路由出口 -->
    <keep-alive><router-view class="showarea"></router-view></keep-alive>
  </div>
</template>

<script>
import Sider from '@/components/sider-comp.vue'
export default {
  components: {
    Sider
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  #app {
    display: flex;
    .showarea {
      flex: 1;
      height: 100vh;
      overflow-y: auto;
      background-color: #ddd;
    }
  }
}
</style>

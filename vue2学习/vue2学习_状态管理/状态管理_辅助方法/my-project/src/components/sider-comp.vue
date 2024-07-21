<template>
  <div id="sidebar">
    <router-link
      exact
      v-for="item in links"
      :key="item"
      :to="'/' + item"
      class="nav"
      >{{ item === '' ? 'home' : item }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['', 'friend', 'find', 'mine']
    }
  }
}
</script>

<style lang="less" scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 150px;
  background-color: #eee;
  .nav {
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
  }
  .router-link-exact-active,
  .router-link-active,
  .default {
    background-color: #ddd;
    color: orangered;
  }
}

// 清除router-link的默认样式
.nav {
  color: inherit;
  &:visited,
  &:active {
    color: inherit;
  }
}
</style>

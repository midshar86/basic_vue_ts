<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>
          <span>{{ checkLogin }}</span>
          <span>当前浏览的是{{ $route.name }}页面</span>
        </div>
        <button v-if="!checkUserData" @click="userLogin">点击登录</button>
        <button v-else @click="userLogout">
          退出登录
          <i class="el-icon-switch-button"></i>
        </button>
      </el-header>
      <el-container>
        <!-- 左侧导航栏区域 -->
        <el-aside width="150px" style="background-color: rgb(238, 241, 246)">
          <!-- 设置导航 -->
          <!-- 设置默认激活导航为当前显示主体 -->
          <el-menu
            :default-active="$route.path"
            class="side-menu"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <!-- 第一个导航 -->
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <!-- 第二个导航 -->
            <el-menu-item index="/details">
              <i class="el-icon-document"></i>
              <span slot="title">Details</span>
            </el-menu-item>
            <!-- 第三个导航 -->
            <el-menu-item index="/mine">
              <i class="el-icon-setting"></i>
              <span slot="title">Mine</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 显示主体内容区域 -->
        <el-main>
          <!-- 二级路由出口显示正文内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    userLogin() {
      this.$router.push('/login')
    },
    userLogout() {
      this.$store.commit('CLEAR_USERINFO')
      sessionStorage.removeItem('userLoginInfo')
      if (this.$route.path === '/') {
        this.$router.go(0)
      } else {
        this.$router.push({ name: 'Home' })
        this.$router.go(0)
      }
    }
  },
  computed: {
    checkLogin() {
      return sessionStorage.getItem('userLoginInfo') ? '您已登录!' : '请登录!'
    },
    checkUserData() {
      return sessionStorage.getItem('userLoginInfo')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #c3cfe2;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 25px;
    padding: 0 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    color: grey;
    font-weight: bold;
    &:hover {
      background-color: #ddd;
    }
    &:active {
      background-color: #aaa;
    }
  }
}

.el-aside {
  background-color: #8eabc1;
  color: #333;
  text-align: center;
  line-height: 200px;
  // 关闭滚动条
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-container {
  .el-container {
    height: calc(100vh - 60px);
  }
}

.el-main {
  background-color: #f5f7fa;
  color: #333;
  text-align: center;
  line-height: 160px;
  overflow-y: auto;
}

.el-col {
  width: 100%;
}
.side-menu {
  height: calc(100vh - 60px);
}
</style>

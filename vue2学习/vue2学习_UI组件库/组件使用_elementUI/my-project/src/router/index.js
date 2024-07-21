import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Layout from '@/views/layout-comp.vue'
import Home from '@/views/home-comp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'details',
        name: 'Details',
        meta: { needLogin: true },
        component: () => import('@/views/details-comp.vue')
      },
      {
        path: 'mine',
        name: 'Mine',
        meta: { needLogin: true },
        component: () => import('@/views/mine-comp.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login-comp.vue')
  },
  {
    path: '/*',
    component: () => import('@/views/error-comp.vue')
  }
]

const router = new VueRouter({
  routes
})

// 注册一个全局前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断是否即将跳转的路由组件需要登录
  if (to.meta.needLogin) {
    // 需要登录
    // 检测到登录状态, 放行(存放有 token 信息)
    if (store.state.userInfo.token) {
      next()
    } else {
      // 未检测到登录状态, 跳转至登录页面
      next('/login')
    }
  } else {
    // 不需要登录
    next()
  }
})

export default router

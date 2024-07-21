import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home-comp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 别名
    alias: '/home',
    component: Home
  },
  {
    path: '/friend',
    component: () => import('@/views/friend-comp.vue')
  },
  {
    path: '/find',
    component: () => import('@/views/find-comp.vue')
  },
  {
    path: '/mine',
    component: () => import('@/views/mine-comp.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

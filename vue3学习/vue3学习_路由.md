# 使用 `Vue Router` 路由

## 单页面应用与多页面应用

### 单页面应用(SPA)

> 优点:

- 共用相同的外壳页面, 加载不同的功能页面
- 只有一个根页面
- 页面仅仅是局部刷新
- 页面切换快且体验好
- 数据传递依赖于路由传递或者组件传参

> 缺点:

- 不利于搜索引擎检索(SEO)

### 多页面应用

> 特点:

- 由多个 `.html` 页面组成
- 资源加载量大, 每个页面都需要单独加载, 渲染较慢
- 页面需要整体刷新
- 页面切换较慢, 不利于用户体验
- 依赖于地址路由传参或者本地传参

## 安装使用

### 安装

- 执行 `npm i vue-router@4 -S` 下载

### 使用

- 创建 `.js` 文件用来配置路由信息
  - 引入 `import {createRouter} from 'vue-router'`
  - 创建路由实例 `const router = createRouter({settings})`
    - 在 `settings` 中, 可以进行路由信息的配置
    - 设置路由模式 `history:createWebHashHistory()/createWebHistory()`
      - 注意 `createWebHashHistory` 与 `createWebHistory` 均需要在 `vue-router` 中引入
    - 设置路由规则 `routes:[{rule1},{rule2}]` 每一个对象就代表一个路由规则, 路由规则的设置与在 `vue2` 中设置路由规则一致
  - 导出路由实例 `export default router`
- 在 `main.js` 中使用 `vue-router`
  - 将导出的路由实例挂载到 app 中, `app.use(router)`

### 在组件中使用

- 使用 `<router-view></router-view>` 展示路由组件
- 使用 `<router-link to="path">导航</router-link>` 设置路由导航

### 使用组合式 Api 访问路由

- 在选项式 Api 中, 可以使用 `this` 关键字调用路由上的属性或者方法. 但是在组合式 Api 中, 没有 `this` 关键字可用

#### 使用 `useRouter` 实现编程式导航

- 在选项式 Api 中, 使用 `this.$router.push('path')` 实现路由跳转
- 在组合式 Api 中, 引入 `import {useRouter} from 'vue-router'`
  - 执行 `const router = useRouter()`, 获取到路由实例
  - 在路由实例上调用方法 `router.push('path')` 可以实现路由跳转

#### 使用 `useRoute` 实现动态传参

- 在选项式 Api 中, 使用 `this.$route.query/params` 获取通过路由传递的参数
- 在组合式 Api 中, 引入 `import {useRoute} from 'vue-router'`
  - 执行 `const route = useRoute()` 获取到组件路由实例
  - 在组件路由实例中调用方法 `route.query/params` 获取到使用路由传递的参数

#### 导航守卫

- 在组合式 Api 中, 组件内的守卫更改为 `onBeforeRouteLeave` 与 `onBeforeRouteUpdate`
- 并且导航守卫中的第三个参数 `next` 可以选用
- 引入 `import {onBeforeRouteLeave,onBeforeRouteUpdate} from 'vue-router'`
- 使用 `onBeforeRouteLeave((to,from)=>{})`, `onBeforeRouteUpdate((to,from)=>{})`

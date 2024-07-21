# 路由

- 路由指的是以 `url` 匹配到相应的 `html` 页面数据
- 路由用来实现 `SPA`, 即 `Single Page Application` 单页面应用
- 单页面应用指的是只有一个根 `index.html` 文件, 页面的所有渲染都是通过组件的切换来实现的, 因此页面的整体不会刷新, 只有对应的组件区域会刷新
- 使用 `Vue Router` 管理所有的路由规则, 指定用户的点击加载的组件
- 每个组件中展示的内容都是通过网络请求获取

## 路由组件与非路由组件

- 非路由组件指的是在页面中本身就存在的组件, 不需要执行额外的点击跳转操作就能展示
  - 一般地, 将非路由组件存放在 `components/` 文件夹之中
- 路由组件指的是通过点击才能够加载的组件, 路由组件需要在路由中注册才能使用
  - 一般地, 路由组件存放在 `views/` 或者 `pages/` 文件夹中

## 使用 `Vue Router` 管理路由规则

### 下载安装

- 使用 `npm i vue-router@3.5 -S` 进行下载安装

### 使用 `Vue Router` 的步骤

- 创建一个新的 `.js` 文件, 在该文件中配置路由
- 导入与挂载路由模块
  - `import Vue from 'vue'` 引入 `Vue` 对象
  - `import vueRouter from 'vue-router'` 引入路由插件
  - `Vue.use(vueRouter)` 在 `Vue` 对象中挂载路由
- 定义路由组件, 一般将路由组件存放在 `pages/` 或者 `views/` 文件夹中
- 在 `.js` 文件中引入组件 `import componentName from path`
- 创建一个新的对象数组用来存放路由配置信息
  - `const routes=[{path:'/customedPath',component:componentName}]` 在数组中可以配置多个路由信息, 都是以对象的形式配置
    - `path:'/customedPath'` 指的是配置的路由路径
    - `component:componentName` 指的是配置上述定义的路由组件
    - 当访问到对应的 url 时, 相应的组件就会被渲染
- 为路由器实例配置参数
  - `const router=new vueRouter({routes})` 将自定义的路由规则作为参数传递给路由实例
  - `routes` 是 ES6 的简写形式
- 将 `.js` 文件默认导出
- 在主程序中挂载路由文件, 即在 `main.js` 中挂载路由
  - 导入该路由文件 `import routerName from path`
  - 在 `new Vue({})` 中传入参数 `router:routerName`
- 在 `App.vue` 中设置路由出口
  - 使用 `<router-view></router-view>` 标签设置路由的出口, 该标签将被渲染成为路由组件
- 使用路由导航切换显示的路由组件
  - 路由导航使用 `<router-link to='/customedPath'>Content</router-link>` 标签实现
    - `to='customedPath'` 表示该元素被点击后路由出口将会渲染为配置路径为 `customedPath` 的组件
- 路由是通过组件的**创建与卸载组件**来实现选择性地显示组件
- 在每个路由组件中, 都有自己的 `$route` 对象, 记录了当前组件的路由信息
- 在一个完整的项目中, 只有一个 `$router` 对象, 记录了一个在创建路由器时的实例对象
- 在其他 `.js` 文件中如果需要使用 `router` 中的方法或者数据, 直接引入路由器实例即可

## 使用脚手架安装 `Vue Router`

- 使用 `vue cli` 创建项目时 `vue create project`, 在添加配置文件时选中 `router`, 以及代码检测工具 `Linter/formatter`

## `ESLint` 代码检测

- 是一个代码格式检测工具
- 在上述选择添加代码检测工具后, 会有一个 `.eslintrc.js` 文件, 记录了 `ESLint` 的配置内容
  - 在配置内容中, 在 `rules` 中可以设置检测提醒级别
    - 设置为 `off` 或者 `0`, 表示忽略该类型
    - 设置为 `warn` 或者 `1`, 表示设置该类型为警告
    - 设置为 `error` 或者 `2`, 表示设置该类型为错误
  - 设置规则, 在函数的调用运算符之前忽略空格类型的错误 `'space-before-function-paren':'off'`
- 为了避免出现不必要的错误检测, 通常在配置内容的同级别目录中, 新建 `.eslintignore` 文件, 并且配置内容
  - 配置内容 `/node_modules/`, `build/*.js`, `src/assets`, `public` 与 `dist`
  - 配置内容文件夹中的内容将不会被校验
- 使用命令 `npm run lint` 可以实现自动修复格式错误

## `Prettier` 插件的设置

- 安装 `Prettier` 插件之后, 在创建的项目的根文件夹中新建 `.prettierrc` 文件
  - 设置文件内容 `'singleQuote':true` 表示在对象中字符串使用单引号
  - 设置文件内容 `'semi':false` 表示语句结束时不添加分号
  - 设置文件内容 `'trailingComma':'none'` 表示在对象中, 最后一个成员后不添加逗号
- 设置 `vscode` 实现在保存时自动格式化功能
- 额外的设置
  - 设置 `vscode` 中的 `Tab` 为 `2`
  - 设置默认的格式化插件
- 如果在创建项目时选择了 `ESLint`, 但是不希望再项目中使用校验
  - 在项目的根文件夹中添加新建 `Vue.config.js` 文件
    - 添加内容 `export default = {lintOnSave : false}` 用来关闭校验规则

## `src` 文件夹别名

- 设置 `src` 文件夹为 `@`
  - 在新的版本中, 已经在 `jsonfig.json` 文件中自动配置
  - 可以加入排除项 `exclude:["node_modules","dist"]`

**完整配置.**

```JavaScript
{
  "compilerOptions":{
    "baseUrl":"./",
    "paths":{
      "@/*":["src/*"]
    }
  },
  // 可以在配置项文件中额外加入排除选项
  "exclude":["node_modules","dist"]
}
```

## 动态路由匹配

### `query` 方式传参

- `query` 方式传参指的是直接在 `url` 地址中以 `?` 链接 `key=value&` 的形式传递参数

#### `query` 静态字符串传参

- `query` 方式传参直接在 `<router-link to="/path?prop1=value1&prop2=value2"></router-link>` 标签中的 `to` 属性值中利用 `?` 链接传递的多个参数
- `<router-link to="/path"></router-link>` 可以生成多个指向同一个路由组件的跳转

#### `query` 动态字符串传参

- 在 `<router-link :to="/path"></router-link>` 中传递动态路由参数
  - 注意在 `/path` 中是 `js` 的内容, 区分字符串与变量

#### `query` 动态对象传参

- 将 `<router-link :to="{path:'/path',query:{prop:value}}"></router-link>` 标签中的 `to` 属性值改为对象形式
  - `path` 指定 `url`
  - `query` 指定传递的参数, 可以使用对象形式传递多个参数

#### 获取 `query` 传参参数

- 在路由组件中, 通过 `this.$route.query` 获取通过 `query` 传参形式传递的参数

### `params` 方式传参

- `params` 传参指的是直接在 `url` 地址中以 `/` 形式传递参数, 即参数是路径中的一部分, 所以需要提前监听
- `params` 传参方式需要在配置路由规则时动态监听传递的参数
  - 设置规则时, 使用 `path:"/path/:prop1/:prop2"` 方式来将路径中对应位置的 `/:prop1` 与 `/:prop2` 作为一个动态传递的参数来识别

#### `params` 静态字符串传参

- 在 `<router-link to="/path/value1/value2"></router-link>` 标签中, 对应的 `/value1/value2` 就是作为 `/:prop1/:prop2` 位置的实参

#### `params` 动态字符串传参

- 在 `<router-link :to="/path/params1/params2"></router-link>` 通过动态字符串传参, 传参时需要注意区分字符串与变量

#### `params` 动态对象传参

- 在 `<router-link :to="{name:'customedName',params:{prop:value}}"></router-link>` 标签中通过对象形式传递参数
  - `name:customedName` 指的是设置路由规则时为该路由组件自定义的命名
  - `params:{prop:value}` 中可以添加多个需要传递的参数

#### 获取 `params` 传参参数

- 在路由组件中, 通过 `this.$route.params` 来获取通过 `params` 传递的参数

### 命名路由

- 命名路由通常用来处理多层路由嵌套的情况, 可以简化路由跳转
- 在配置路由规则时, 添加参数 `name:"customedName"` 为该路由命名
- 在 `<router-link0 :to="{name:'customedName'}"></router-link0>` 中通过动态绑定 `to` 属性值为一个对象的形式来访问命名路由
  - `name:"customedName"` 表示要跳转的目标路由组件
  - 注意在 `customedName` 之前不需要添加 `/` 符号

#### 简写的命名路由 `name + query` 形式传参

- `<router-link :to="{name:'customedName',query:{prop:value}}"></router-link>`

#### 简写的命名路由 `name + params` 形式传参

- `<router-link :to="{name:'customedName',params:{prop:value}}"></router-link>`

### 路由重定向

- 路由重定向指的是当访问某个路由 `url` 时, 会默认跳转至其他的路由
- 在配置路由规则时, 使用 `{path:'/path',component:componentName,redirect:'/otherPath'}` 设置一条重定向规则, 该规则表示如果用户访问到 `/path` 路由时, 将会跳转至 `/otherPath` 的路由
  - 除了使用上述的字符串作为重定向的参数时, 还可以使用命名路由的形式: `redirect:{name:'customedName'}`, 用户的访问将跳转至一个名称为 `customedName` 的组件中

#### 错误处理

- 当用户访问到无法匹配的路由时, 需要加载一个错误页面
- 在**配置路由规则的末尾**, 添加一条额外的动态匹配规则 `{path:'/:otherPages(.*)*',component:yourErrorComp}`, 表示在上述所有的路由规则都未成功匹配的情况下, 会匹配该路由进行错误处理
- 也可以将错误页面重定向至默认的正确页面

### 路由别名

- 路由别名通过在配置路由规则中添加 `alias:'/nickname'` 的方式, 为当前路由组件添加别名
- 路由别名的用处在于, 当用户访问了该路由组件的别名时 `/nickname`, 相当于通过路径 `/path` 访问了该路由组件, 浏览器的地址栏会显示别名, 实际上两者访问的是同一组件
- 路由别名通常用于在功能类似情况下, 重复使用组件, 但是需要在地址栏中展示不同的 `url` 信息的时候

## 嵌套路由

- 嵌套路由指的是路由之中包含路由
- 嵌套路由同样需要设置路由规则, 在哪个父路由中设置子路由, 那么该子路由就被嵌套进该子路由
  - 在父路由中, 添加子路由的路由导航与子路由出口
  - 在父路由中, 通过 `children:[{setting}]` 来设置子路由规则, `children` 属性值以对象数组的形式存放子路由, 可以配置多条子路由规则
  - `{setting}` 用来配置子路由规则, 一个对象就是一个子路由规则
  - 子路由的配置项与父路由相同, 可以包含 `{path:'path',component:componentName,name:customedName}` 等属性
    - 需要注意的是, 在配置子路由的 `path` 时, 不需要再额外添加 `/` 符号
- 当点击到对应的父路由导航时, 在父路由出口中将会渲染父路由组件; 在父路由组件中点击子路由的导航, 将会在子路由的路由出口中渲染子路由组件
- 如果子路由中仍然存在子路由, 那么将可以继续按照这种形式进行配置

## 编程式导航

- 编程式导航是指利用 js 逻辑执行路由组件的切换与跳转
- 上述使用 `<router-link></router-link>` 的方式被称作声明式导航
- 编程式导航, 在路由出口文件中, 调用 `this.$router.push()` 方法实现跳转

### 不带参数跳转

#### 以字符串形式跳转

- 使用 `this.$router.push('/path')` 跳转至对应路径为 `/path` 的路由组件

#### 以对象形式跳转

- 使用 `this.$router.push({path:'/path'})` 跳转至对应路径为 `/path` 的路由组件

#### 以命名路由形式跳转

- 使用 `this.$router.push({name:customedName})` 跳转至对应名称为 `customedName` 的路由组件

### 带参数跳转

#### `query` 传参

**字符串形式传参.**

- 使用 `this.$router.push('/path?prop=value&prop=value')` 的形式, 在跳转路径中直接使用 `?` 链接参数

**对象形式传参.**

- 使用 `this.$router.push({path:'/path',query:{prop:value}})` 的形式向目标路由组件传参

**命名路由 `name+query` 形式传参.**

- 使用 `this.$router({name:'customedName',query:{prop:value}})` 的形式向名称为 `customedName` 的路由组件传参

#### `params` 传参

- 注意 `params` 传参需要根据设置的路由规则进行传参

**字符串形式传参.**

- 使用 `this.$router.push('/path/value1/value2')` 进行传参
  - 传递的参数 `/value1/value2` 对应设置路由时的规则

**命名路由 `name+params` 形式传参.**

- 使用 `this.$router.push({name:'customedName',params:{prop:value}})` 的形式传参

### 路由的 `replace` 模式

- 在浏览器中访问不同的页面时, 页面的浏览记录会被存放在一个栈中
- 当用户使用浏览器的前进后退按钮时, 本质是一个指针指向栈中存放的不同的地址

#### 声明式导航中

- 在声明式导航中, 默认为 `push` 模式, 即访问过的页面默认会被依次存入栈中
- 在 `<router-link replace></router-link>` 标签中添加 `replace` 属性后, 浏览器的历史记录将改为替换模式, 即后面的访问地址会替换上一条访问地址, 在浏览器中表现为不可通过前进后退按钮操作页面

#### 编程式导航中

- 在编程式导航中, 通过调用 `this.$router.replace()` 方法来实现 `replace` 模式
  - 这种方式与使用 `this.$router.push()` 一致

### `back`, `forward` 与 `go` 方法

- 当浏览器产生了历史记录, 可以使用这三个方法来执行页面的前进, 后退与刷新
- 使用 `this.$router.back()` 让页面回退一步
- 使用 `this.$router.forward()` 让页面前进一步
- 使用 `this.$router.go(numberInt)` 让页面按照指定的整数前进后退
  - `numberInt` 表示一个整数
  - 如果该数为正数, 表示前进几个页面
  - 如果该数为负数, 表示后退几个页面
  - 如果该数字为 `0`, 表示刷新当前页
  - 如果该数字大于或小于当前能够前进或者后退的最大页数, 则会跳转失败

## 路由组件传参

- 上述的 `query` 与 `params` 传参形式会增加组件与路由的耦合度
- 如果需要传递的参数数量过多, 那么在组件中使用参数时会显得非常麻烦
- 通过传参, 可以使得在配置路由规则时处理路由信息, 在路由组件中只是接收参数, 这样有利于提高代码的整洁度

### 在路由配置中添加 `props` 属性解耦

#### 设置 `props` 属性值为 `boolean` 类型解耦

- 这种方式只能够解耦使用 `params` 传递的参数, 不能解耦利用 `query` 传递的参数
- 在配置路由规则时, 在需要解耦的路由组件配置中, 添加属性 `props:true` 即可
- 在解耦后, `params` 在 `url` 中传递的参数将会在 `props` 选项中接收, 与父传子的参数用法一致

#### 设置 `props` 属性值为对象解耦

- 这种解耦方式只能够在初始设置路由规则时传递一个固定的数据, 并不能传递动态路由中传递的参数
- 在配置路由规则时, 在需要解耦的路由组件配置中, 添加属性 `props:{prop1:value1,prop2:value2}` 即可
- 在路由组件中接收参数时, 使用 `props:['prop1','prop2']` 来接受传递的参数 `value1` 与 `value2`

#### 设置 `props` 属性值为函数解耦

- 函数类型的 `props` 属性值可以传递 `query` 与 `params` 方式的传参, 并且支持传递动态传递的参数
- 在配置路由规则时, 在需要解耦的路由组件配置中, 添加属性 `props(route){return {prop:value}}` 即可
  - 回调函数中的 `route` 参数即前述的 `this.$route` 对象, 包含了当前路由组件的一些基本信息, 通过该对象可以得到 `query` 传参的参数 `route.query` 与 `params` 传参的参数 `route.params`
- 在路由组件中接收参数时, 使用 `props:['prop']` 的方式接收传递的参数

## 路由模式

- 路由模式分为 `hash` 模式与 `history` 模式
- 在新建项目时, 默认为 `hash` 模式
- 在 `new vueRouter({routes,mode:'history'})` 新建路由实例时, 通过添加 `mode:'history'` 将路由模式改变为 `history` 模式

### `hash` 模式

- 在哈希 `hash` 模式中, 浏览器在显示 `url` 地址时, 会默认携带一个 `#`, 在该符号之后的所有内容都被成为**哈希值**, 它不会被作为请求发送到服务器中

### `history` 模式

- 在历史 `history` 模式中, 浏览器在显示 `url` 地址时, 会采用与后端服务器路径一致的写法使用 `/` 分割路径, 并且这个路径会作为请求发送给服务器
- 但是, 如果服务器没有配置与请求一致的路径, 那么服务器将会返回错误
- 在使用 `history` 模式中, 需要后端配合配置服务器路径

**为什么在前端使用 `history` 模式时不会报错?**

- 在前端中, 项目未上线之前, 在 vue 中自带的 `webpack` 工具以及 `decserver` 会帮助开发者处理, 如果找不到对应的请求地址, 那么会将 `index.html` 页面返回
- 项目上线之后, 失去了开发环境, 所以需要后端的支持
- 后端使用 `connect-history-api-fallback` 中间件实现

## 导航高亮

- `active-class` 与 `linkActiveClass` 表示设置链接被激活时的类样式
- `active-exact-class` 与 `linkExactActiveClass` 表示设置链接被精确激活时的类样式

### 自定义类样式

- 在 `<router-link></router-link>` 标签中, 当选中后, 默认携带两个 `class` 属性值: `router-link-active` 与 `router-link-exact-active`
  - 利用上述两个类样式, 能够自定义导航的样式
- 上述的两个默认 `class` 属性值可以自定义别名
  - 在组件中, 通过在 `<router-link activeClass/exactActiveClass="customedName"></router-link>` 导航标签中添加 `activeClass="customedName"` 或者 `exactActiveClass="customedName"` 来自定义属性名, 对于有多个导航的组件, 添加相对麻烦
  - 在全局中, 可以在 `new vueRouter({linkActiveClass:"customedName1",linkExactActiveClass="customedName2"})` 新建路由实例时, 通过 `linkActiveClass` 与 `linkExactActiveClass` 属性来设置自定义 `class` 类名

### 精确匹配

- 在 `<router-link exact to='/'></router-link>` 标签中设置属性 `exact` 来表示精确匹配当前路径. 只有当路由为 `/` 时, 才会添加上设置的类样式
- 该值默认为 `false`

## 路由守卫

- 路由守卫用来执行拦截功能, 对路由的权限进行控制
- 全局路由守卫有 3 个, 路由独享守卫 1 个, 组件内守卫 3 个

### 全局路由守卫

- 全局路由守卫在新建路由实例时设置
- 创建路由实例
  - `const router = new vueRouter({})`

#### `router.beforeEach((to,from,next)=>{})` 设置全局前置守卫

- 在创建路由实例后调用该方法, 将会在**每次路由即将跳转时触发该钩子函数**
- `to` 表示将要跳转至哪个路由去
- `from` 表示从哪个路由跳转而来
- `next` 是一个回调函数, 指的是放行路由跳转, 可以直接在函数中调用 `next()`
  - `next()` 接收一个参数
    - 如果接收一个参数 `false`, 即 `next(false)` 表示中断当前的导航
    - 如果接收一个字符串路径 `/path`, 即 `next('/path')` 表示将会被导航至指定的路由组件中
    - 如果接收一个对象类型 `{path:'/path'}` 或者 `{name:'customedName'}` 表示将会被导航至指定的路由组件或者命名路由
    - 如果接收一个 `Error` 实例作为参数, 即 `next(Error)`, 那么导航会终止并且会将错误传递给 `router.onError()` 注册过的回调中

#### `router.beforeResolve()` 设置全局解析守卫

- 用法类似全局前置守卫
- 在导航被确认之前, 同时**在所有组件内守卫和异步路由组件被解析之后会触发该钩子函数**

#### `router.afterEach((to,from,next)=>{})` 设置全局后置守卫

- 在创建路由实例后调用该方法, 将会在**每次路由跳转之后触发该钩子函数**
- 各个参数的使用与上述一致

### 路由独享守卫

- 路由独享守卫在设置路由规则时设置

#### `beforeEnter:(to,from,next)=>{}`

- 路由独享守卫在进入路由之前会被触发
- 参数与全局守卫的参数用法一致

### 组件内守卫

- 组件内守卫在组件中调用
- 参数用法与全局路由守卫一致

#### `beforeRouteEnter(to,from,next){}`

- 该路由守卫会在渲染该组件的路由被确认时被调用, 在这个阶段不能够获取 `this` 实例
  - 但是, 在 `next(vm=>{})` 方法中, 接收一个函数参数, 该函数参数的参数 `vm` 就是当前的组件实例

#### `beforeRouteUpdate(to,form,next){}`

- 该路由守卫会在组件被复用时, 但是路由已经发生改变时被触发
  - 如果复用组件, 并且在这些组件中来回切换, 那么组件并不会被卸载, 组件的 `mounted` 生命周期只会触发一次

#### `beforeRouteLeave(to,from,next){}`

- 该路由守卫会在路由组件即将切换时触发
  - 在该钩子函数中, 通常可以用来执行与组件的生命周期 `beforeDestroy()` 中类似的功能

## 路由元信息

- 设置路由元信息在配置路由规则时使用 `meta:{prop:value}` 进行设置
- 该信息可以在路由组件中通过 `this.$route.meta` 访问到

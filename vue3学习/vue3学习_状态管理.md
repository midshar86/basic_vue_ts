# 状态管理

## 使用 `Vuex`

### 在 `vue2` 中使用 `vuex`

- 与 `vue2` 版本对应的 `vuex` 版本是 `vuex3.x`
- 下载 `npm i vuex@3.x -S`
- 在 `index.js` 中初始化 `store`
  - 导入 Vue `imoprt Vue from 'vue'`
  - 导入 Vuex `import Vuex from 'vuex'`
  - 使用 `Vue.use(Vuex)`
  - 创建仓库实例 `let store=new Vuex.store({})`
  - 导出仓库实例 `export default store`
- 在 `main.js` 中挂载 `store`
  - 引入 `import store from 'path'`
  - 在 `app` 实例中挂载 `new Vue({store})`

### 在 `vue3` 中使用 `vuex`

- 与 `vue3` 版本对应的 `vuex` 版本是 `vuex4.x`
- 下载 `npm i vuex@next -S`
- 在 `index.js` 中初始化 `store`
  - 引入 `import {createStore} from 'vuex'`
  - 创建仓库实例 `let store=createStore({})`
  - 导出仓库实例 `export default store`
- 在 `main.js` 中挂载 `store`
  - 引入 `store`, `import store from 'path'`
  - 挂载 `createApp(App).use(store).mount('#app')`

#### 在 `Option API` 下使用

- `vue3` 支持向下兼容 `vue2`, 在选项式 API 使用 `vuex` 与直接在 `vue2` 中使用方法一致

#### 在 `Composition API` 下使用

- 在组合式 API 中使用 `vuex`
  - 如果需要访问 `store` 中的状态
    - 引入 `import {useStore} from 'vuex'`
    - 执行 `const store=useStore()` 返回值就是数据仓库中的所有信息
  - 读取仓库中的 `getters` 状态
    - 引入 `import {computed} from 'vue'` 使用计算属性
    - 使用 `const res=computed(()=>store.getters.conputedName)` 返回值 `res` 就表示读取的 `getetrs` 值

## 使用 `Pinia`

- `Pinia` 是 `vue3` 的状态管理工具
- **与 `vuex` 不同的是, 不再支持 `mutations`**

### 安装使用

- 使用命令 `npm i pinia -S` 来下载 `Pinia` 状态管理工具
- 在 `stores` 文件夹中新建 `.js` 文件用来定义 `store`
  - 引入 `import {defineStore} from 'pinia'`
  - 使用 `const useCustomedStore = defineStore('customedStoreName',{settings})`
    - `defineStore` 是一个函数, 接收第一个参数 `customedStoreName` 是该仓库的名称, 第二个参数 `{settings}` 用来设置仓库中存放的方法或者数据
      - 使用对象形式
      - `{state(){return {key:value}},getters:{}}`
      - `state` 类似组合式 API 中的 `data`, 它使用函数形式返回需要使用的数据
      - 使用函数形式
      -
  - 导出 `export default useCustomedStore`
- 在 `main.js` 中
  - 引入 `import {createStore} from 'pinia`
  - 挂载 `createApp(App).use(createStore()).mount('#app')`
- 在组件中使用
  - 引入仓库 `import useCustomedStore from 'path'`
  - 调用 `const res = useCustomedStore()` 返回值是一个 `store`
  - 使用 `res.key` 可以直接访问仓库中的数据

### 定义 `store`

#### `Option API`

- 在选项式 API 中, 定义一个仓库, 使用 `const useStorenameStore = defineStore('storeName',{settings})`
  - `storeName` 是自定义的仓库名称
  - 返回一个 `store`, 储存 `store` 中的状态与方法
  - `{setting}` 是一个对象, 用来定义仓库中的状态与方法
    - 在定义 `state` 时, 使用函数形式 `state:()=>{return {key:value}}` 创建状态
    - 除此之外, 定义 `actions`, `getters` 与 `vue2` 的定义一致

#### `Composition API`

- 在组合式 API 中, 定义一个仓库, 使用 `const useStorenameStore = defineStore('storeName',()=>{settings})`
  - `storeName` 是自定义的仓库名称
  - 返回一个 `store`, 储存 `store` 中的状态与方法
  - 接收一个回调函数作为第二个参数, 在回调函数中定义仓库的状态与方法
  - 在 `settings` 中
    - `const val = ref(value)` 相当于 `state`
    - `const computedVal = computed(()=>value)` 相当于 `getters`
    - `const functionName = function(){}` 相当于 `actions` 方法
    - **需要注意的是, 类似 `setup` 风格, 需要将暴露的属性或方法以 `return` 的形式返回**

### 核心概念

#### `state`

- `state` 用来存储所有的状态值

---

##### 在 `Option API` 中读取 `state`

- 在选项式 API 中, 利用辅助函数 `mapState()` 获取 `state` 中定义的状态
- `mapState()` 接收两个参数
  - 第一个参数, 指的是需要访问的仓库
  - 第二个参数, 用来指定需要访问的状态

```JavaScript
// 引入 mapState 方法
import {mapState} from 'pinia'
// 引入定义的 store
import useMineStore from 'path'

computed:{
  // 使用数组的方式接收 store 中的状态
  ...mapState(useMineStore,['key'])
  // 使用对象的方式接收 store 中的状态, 并且将 store 中的 key 状态重命名为 updateName
  ...mapState(useMineStore,{
    updateName:'key'
  })
  // 使用函数形式接收 store 中的状态
  // 推荐使用函数方式
  ...mapState(useMineStore,{
    customedName:store=>store.key
  })
}

```

##### 在 `Composition API` 中读取 `state`

- 在组合式 API 中访问仓库, 直接执行引入的仓库函数即可
- 如果要访问某个状态的值, 使用 `useMineStore().key` 即可读取, `key` 就是 `state` 中的数据名

```JavaScript
import useMineStore from 'path'
// 引入仓库后执行, 获得整个仓库实例, 在仓库实例中, 使用 res 可以直接访问仓库数据
const res = useMineStore()
// 直接在仓库中读取 state
console.log(res.key)
```

---

##### 在 `Option API` 中修改 `state`

- 使用 `mapWritableState` 来映射仓库中的数据并且允许**直接修改**
- 映射后的数据会作为计算属性存在

```JavaScript
import {mapWritableState} from 'pinia'
import useMineStore from 'path'
computed:{
  // 以数组的形式获取 state 中的状态
  ...mapWritableState(useMineStore,['key'])
  // 以对象的形式获取 state 中的状态
  ...mapWritableState(useMineStore,{updateName:'key'}) // 为 state 中的 count 自定义别名
  // 以函数的形式获取 state 中的状态
  ...mapWritableState(useMineStore,{customedName:(state)=>state.key}) // 可以加工 state 中的 key
}
```

##### 在 `Composition API` 中修改 `state`

```JavaScript
import useMineStore from 'path'
import {storeToRefs} from 'pinia'
// 通过 storeToRefs 包装定义的仓库数据使之解构之后成为响应式数据
let {key} = storeToRefs(useMineStore())
// 可以直接在模板中使用并修改 key, 实现响应式操作
```

---

##### 重置数据

- 引入仓库 `import useMineStore from 'path'`
- 直接在仓库中调用 `$reset()` 方法 `useMineStore().$reset()` 将所有数据重置成为初始值

---

##### 批量修改数据

- 引入仓库 `import useMineStore from 'path'`
- 调用仓库中的 `$patch()` 方法 `useMineStore().$patch()` 可以实现批量修改仓库数据
  - `$patch()` 接收一个参数作为依据来修改 `state` 中的值
    - `$patch(obj)` 接收一个对象作为参数
      - 在对象中直接为 `state` 中的值赋值即可
    - `$patch((state)=>{state.key=value})`
      - 在函数中利用 `state` 参数修改仓库中的状态

---

##### 替换状态

- 引入仓库 `import useMineStore from 'path'`
- 直接在仓库中调用 `$state()` 方法 `useMineStore().$state({newStateObj})` 即可将原仓库中的状态都替换成为 `newStateObj` 的内容

##### 订阅状态

- 当每次 `state` 中的状态发生改变时, 会触发该订阅
- 引入仓库 `import useMineStore from 'path'`
- 在仓库上调用 `$subscribe()` 方法 `useMineStore().$subscribe((mutations,state)=>{})` , 接收一个回调函数作为参数
  - `mutations` 是一个对象, 包含 `events`, `storeId` 以及 `type` 属性, 用来记录仓库 `state` 的变化信息
    - `events` 是一个对象, 用来记录 `state` 修改前后的相关信息
    - `storeId` 是仓库的名称, 即仓库的 id
    - `type` 是修改 `state` 的方法, 有 `direct`, `patch object`, `patch function` 三个值
      - `direct` 表示直接通过仓库修改 `state` 中的值
      - `patch object` 表示通过 `$patch({})` 传递对象参数的形式修改 `state` 中的值
      - `patch function` 表示通过 `$patch((state)=>{})` 传递函数参数的形式修改 `state` 中的值
  - `state` 指的是调用 `$subscribe()` 方法的仓库中的 `state`
- `$subscribe()` 与 `watch()` 的区别
  - `watch(useMineStore.$state,(newValue,oldValue)=>{})`
    - `useMineStore.$state` 使用 `watch` 侦听整个目标仓库
      - 由于仓库数据是引用类型, 所以只能够获取 `newValue`
    - 使用 `watch` 只有当侦听的目标的值发生变化时, 才能够触发侦听, 如果两次修改的目标值都一致, 那么便无法侦听成功
  - `useMineStore.$subscribe((mutations,state)=>{},{detached:true})`
    - 使用 `$subscribe()` 订阅状态时, 可以在 `events` 属性中获取到 `state` 变化前后的值
    - 即使修改前后的值是一致的, 也可以触发订阅
    - 如果希望组件卸载后仍然能够使用订阅, 就需要添加第二个参数 `{detached:true}`

#### `getters`

- `getters` 用来对 `state` 中的数据进行加工处理

##### 在 `Option API` 中读取 `getters`

- 在选项式 API 中, 通过 `mapState()` 辅助函数来读取仓库中的 `getters` 数据
  - 需要注意的是, 没有 `mapGetters()` 这个辅助函数
- 引入 `import {mapState} from 'pinia'`
- 读取后的值也被视作**计算属性**, 因此应当放在 `computed` 选项中

##### 在 `Composition API` 中读取 `getters`

- 在组合式 API 中, 引入仓库 `import useMineStore from 'path'`
- 执行并获取仓库实例 `const store = useMineStore()`
- 直接通过 `store.gettersName` 即可进行读取

#### `actions`

- `actions` 中用来定义处理 `state` 状态的函数
- 在 `actions` 中使用 `state` 的数据时, 可以直接使用 `this.key` 关键字读取并使用

##### 在 `Option API` 中使用 `actions`

- 在选项式 API 中, 通过 `mapActions()` 辅助函数来读取仓库中的 `actions` 方法
- 读取后的方法应当被视作**函数方法**, 因此应当放在 `methods` 选项中
- 引入 `import {mapActions} from 'pinia'`

##### 在 `Composition API` 中使用 `actions`

- 在组合式 API 中, 引入仓库 `import useMineStore from 'path'`
- 执行并获取仓库实例 `const store = useMineStore()`
- 在仓库实例中调用 `actions` 中的方法 `store.actionsFunction`

##### `actions` 操作异步

- 在 `actions` 中允许执行异步操作
- 一般地, 异步操作成功获取数据后, 存入仓库中的 `state` 状态中

## `Pinia` 插件

- 为 `Pinia` 添加插件需要在创建的 `Pinia` 实例上使用 `.use` 方法
- `Pinia` 的插件本质上就是一个**函数功能**

### 创建使用插件的步骤

- 创建 `.js` 文件
  - 在文件中编写一个函数并导出
    - `export const customedFun = function(context){}`
    - 函数接收一个参数 `context`
      - `context` 中包含 `app`, `options`, `pinia` 以及 `store` 属性
      - `app` 表示使用 `createApp()` 方法创建的当前应用实例
      - `pinia` 表示使用 `createPinia()` 方法创建的 `Pinia` 实例
      - `options` 定义传递给 `defineStore()` 的 `store` 中的可选对象
      - `store` 表示该插件扩展的仓库
- 在 `main.js` 中导入上述函数
  - `import {customedFun} from 'path'`
- 导入 `Pinia` 方法
  - `import {createPinia} from 'pinia'`
  - 创建 `Pinia` 实例 `const pinia = createPinia()`
- 在 `Pinia` 实例中挂载插件
  - `pinia.use(custonedFun)`
- 在 `app` 实例中使用 `Pinia`
  - `createApp(App).use(pinia).mount('#app')`

### 为所有的创建的 `store` 添加公共属性与方法

#### 返回对象

- 在创建插件函数时, 返回一个对象形式的数据, 该对象将会作为每个 `pinia` 仓库的自定义静态属性, **在 `devTools` 中的 `customProperties` 属性中显示**

```JavaScript
export const myPiniaPlugin = function(context){
  return {
    // 在这里编写一个返回对象
  }
}
```

#### 使用 `store`

- 在创建插件函数时, 使用参数 `context` 中的 `store` 属性为仓库添加属性或者方法
  - 需要注意的是, 使用该方式添加的属性或者方法**无法在 `devTools` 中查看**

```JavaScript
export const myPiniaPlugin = function({store}){
  // 直接使用 store 参数在仓库中添加属性或者方法
  store.newProp=value
  store.newMethod=fun
}
```

### 持久化插件

- 使用 `pinia-plugin-persistedstate` 插件实现 `state` 数据的持久化
- 下载 `npm i pinia-plugin-persistedstate -S`
- 在 `main.js` 中使用
  - 引入 `import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'`
  - 为 `pinia` 实例挂载插件 `createPinia().use(piniaPluginPersistedstate)`
- 使用默认配置
  - 在定义仓库时, 添加 `persist:true` 属性并设置为 `true` 即可
- 额外配置
  - 在定义仓库时, 在 `persist:{settings}` 属性中进行额外配置
  - `key:storeName` 在 `settings` 中设置 `key` 属性, 指定要存储的仓库 `name`
  - `storage:localStorage/sessionStorage` 指定将数据存储到哪个本地中, 默认为 `localStorage`

### `Pinia` 的组合式风格

- 使用组合式 API 的风格类似于使用 `setup`
- 定义仓库 `const useMineStore = defineStore(storeName,()=>{settings})`

```JavaScript
import {defineStore} from 'pinia'
import {computed} from 'vue'
const useMineStore = defineStore('mineStore',()=>{
  // 使用 ref 包装的数据相当于 state
  const key = ref('value')
  // 使用 computed 计算属性相当于 getters
  const computedValue = computed(()=>{
    // 直接使用 ref 定义的数据
    return key.value
  })
  const myMethod = () => {
    // 设置函数内容
  }
  return {key,computedValue,myMethod}
})
```

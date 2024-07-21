# vue3.0

- 安装插件 `vue-official`
- 安装插件 `vue3 Snippets`

## 项目创建

### 使用 `vue/cli` 创建

- 确保 `vue/cli` 的版本在 `4.5.0` 以上
- 与创建 `vue2.0` 项目的方法一样, 使用 `vue create xxx` 来创建一个 `vue3.0` 的项目
  - 只需要在选择配置项目版本时选中 `vue3.x` 即可

### 使用 `Vite` 构建

- 优势
  - 开发环境中无需进行打包操作, 快速冷启动
  - 轻量快速的热重载
  - 按需编译, 无需等待整个应用完成编译
- 使用命令 `npm create vue@latest` 创建一个 `vue3` 项目

#### 项目目录结构

- 与使用 `vue/cli` 创建的项目有所不同
- `vite.config.js` 配置项目
- 在 `main.js` 文件中
  - 不再使用 `new Vue({})` 创建构造函数实例的方式创建项目
  - 使用 `createApp(App)` 工厂函数创建项目
- 在 `App.vue` 中
  - `<script setup></script>` 表示采用的是组合式 API 的写法
  - 在新方法中**引入组件后不再需要注册**
  - 在 `Vue3.0` 中, **根标签可以不止一个**

## 编程风格: 选项式 API 与 组合式 API

### 选项式 API

- 包含多个选项的对象来描述组件的逻辑
- 例如: `data`, `methods`, `computed`, `watch` 等
- 在选项式 API 中, 选项中定义的属性都会被挂载到组件实例中, 可以通过 `this` 访问

### 组合式 API

- 基于函数组合的 API

## 响应式实现

### 概览

- `setup` 钩子函数
  - 所有的组合式 API 都在这个函数中使用, 并且只在初始化时执行一次
  - 组件中用到的数据与方法都在此处定义
  - 不能够被 `async` 修饰
- `setup` 有两种返回值
  - [x] 第一种是作为对象
  - [ ] 第二种是作为函数
- 在 `setup` 中, 定义的数据或者方法均需要 `return {datas,funs}`
  - 返回的数据或者方法可以直接在模板中使用
  - 无法使用 `this` 访问到当前的组件实例
- `h()` 渲染函数
  - 使用 `h()` 函数能够将当前模板的所有内容替换成为渲染的内容
  - 导入 `import {h} from 'vue`
  - 使用 `setup(){return ()=>h(tagName,content)}`
    - `tagName` 是 html 标签名
    - `content` 是该标签中的内容
    - 以函数形式返回, 用该标签及其内容替换当前模板的所有内容

### `setup` 详解

#### `setup` 的使用

- `setup` 在生命周期 `beforeCreate()` 之前执行一次, 所以不能够在组合式 API 中获取到 `this` 实例
- `setup` 的返回值通常是一个对象
  - 该对象中的属性会与使用 `vue2` 语法中的 `data` 数据合并
  - 该对象中的方法会与使用 `vue2` 语法中的 `methods` 方法合并
- `setup` 中不能够访问使用 `vue2` 语法中定义的数据或者方法, 但是在 `vue2` 语法中的数据或者方法能够访问 `setup` 中的数据或者方法
- `setup` 中与 `vue2` 的 `data` 中存在同名数据时, 会以 `setup` 中的数据为准
- `setup` 不能够被定义成为一个 `async` 函数, 因为 `async` 函数返回值是一个 `Promise` 类型的对象

#### `setup` 的参数

- `setup(props,context)` 接收两个参数
  - `props` 指的是父组件向子组件传递的参数
    - 使用父组件传递的参数需要先在当前组件声明 `props:['prop']` 用法与 `vue2` 一致
  - `context` 指的是上下文, 其中包括了 `attrs`, `emit`, `slots` 等属性
    - 这些属性的用法分别对应 `vue2` 中的 `$attrs`, `$emit`, `$slots`

#### `setup` 的简写方式

- 一般情况下, 当我们使用 `setup` 选项定义了属性或者方法后, 需要 `return` 这个数据或者方法, 才能在当前组件中使用
- 如果写作 `<script setup></script>` 方式, 在 `script` 标签中添加了 `setup` 属性, 那么可以直接在该标签中定义属性或者是方法, 并且不再需要 `return`, 就可以直接在组件中进行使用

### `ref` 的使用

- 引入 `import {ref} from 'vue'`
- 被 `ref` 包装的数据, 都是 `RefImpl` 类型的实例对象, 被称作 `引用对象`

#### `ref` 包装简单数据类型

- **`ref` 用来将简单数据类型包装成为 `vue` 中的响应式数据**
- 其原理也是通过 `Object.defineProperty()` 来实现
- 例如 `const dataName=ref(simpleTypeValue)`
  - `dataName` 指的是自定义的数据名称, `simpleTypeValue` 指的是一个简单数据类型的数据
  - `ref` 将简单类型数据包装成为一个引用类型的 `RefImpl` 实例对象
  - 在 **`js` 中**操作数据, **需要**通过 `dataName.value` 来获取或者更改 `simpleTypeValue` 的值
  - 在**模板中**操作数据, **不需要**通过 `dataName.value` 来获取或者更改 `simpleTypeValue` 的值

#### `ref` 包装对象与数组

- **`ref` 用来将对象或者数组数据类型包装成为 `vue` 中的响应式数据**
- 其原理是通过 `ES6` 的 `Proxy` 代理
- 借助了 `reactive` 的方法使对象或者数组成为 `proxy` 代理对象
- 包装对象类型数据
  - `const dataName=ref({key:value})`
    - `dataName` 指的是自定义的数据名称
    - `ref` 将对象数据类型包装成为一个代理 `Proxy` 数据类型
    - 在 **`js` 中**操作数据, 通过 `dataName.value.key` 来获取或者更改对象中的值
  - 在 `ref` 包裹的对象中, **无论对象的层次有多深, 都可以实现数据的响应式**操作
- 包装数组类型数据
  - `const dataName=ref([item])`
    - `dataName` 指的是自定义的数据名称
    - `ref` 将数组数据类型包装成为一个代理 `Proxy` 数据类型
    - 在 `js` 中操作数据, 通过 `dataName.value[index]` 来获取或者更改数组中的值

### `reactive` 的使用

- 引入 `import {reactive} from 'vue'`
- 使用 `reactive` 定义一个对象使之成为响应式, 不能用来定义简单数据类型
- 被 `reactive` 包装的数据, 都是 `proxy` 的实例对象, 被称作 `代理对象`

#### `reactive` 包装对象与数组

- `reactive` 用来对对象或者数组数据类型包装成为 `vue` 中的响应式数据
- 其原理是通过 `ES6` 的 `Proxy` 代理
- 包装对象类型数据
  - `const dataName=reactive({key:value})`
  - 在 `js` 中操作数据, 通过 `dataName.key` 直接获取或者更改对象中的值
- 包装数组类型数据
  - `const dataName=reactive([item])`
  - 在 `js` 中操作数据, 通过 `dataName[index]` 直接获取或者更改数组中的值
- **无论对象或者数组层次有多深, 都支持数据的响应式操作**

### `toRef()` 的使用

- 引入 `import {toRef} from 'vue'`
- 当使用 `reactive` 定义了一个响应式的对象后 `const proxyDataObj = reactive(dataObj)`, 如果要在模板中使用 `dataObj` 中的某个属性, 通过解构, 会使得该属性不再是响应式的数据
- `toRef()` 函数的作用是将响应式的对象中的某条单独的属性包装成为响应式的数据
  - `const res = toRef(proxyDataObj,prop)`
  - `toRef` 接收两个参数, 第一个参数 `proxyDataObj` 表示代理后的响应式的数据对象
  - `prop` 表示需要单独使用的数据对象中的某条属性
  - 它的返回值 `res` 是一个 `RefImpl` 对象的实例, 通过 `res.value` 可以获取或者修改该属性值
- 通过 `toRef()` 返回的数据修改响应式对象中的值, 这个修改操作会影响源对象中的值

### `toRefs()` 的使用

- 引入 `import {toRefs} from 'vue'`
- 通过 `toRefs()` 方法, 将使用 `reactive` 定义的响应式数据 `const proxyDataObj = reactive(dataObj)` 中的所有属性全都转换成单独的响应式数据
  - 所有的这些数据会组成一个对象, 对象中的每条属性分别对应原 `dataObj` 中的属性
- 在导出时, 使用解构将对象中的每条属性单独导出, 这样在模板中可以直接利用属性名作为变量来使用
- 通过 `toRefs()` 返回的数据修改响应式对象中的值, 这个修改操作会影响源对象中的值

### 回顾 `Vue2` 响应式原理

- 在 `vue2` 中, 如果在初始化 `data` 数据中定义了一个对象 `dataObj:{}`, 对象中已有的属性值都是响应式的
  - 在后期的操作中, 如果为该对象添加一个新的属性与属性值, 那么这个操作不是响应式的, 需要使用 `this.$set(dataObj,prop,value)` 来使新增的属性值成为响应式的值
    - `dataObj` 指的是原对象
    - `prop` 指的是新增的属性
    - `value` 指的是新增的属性值
  - 在后期的操作中, 如果删除了该对象中的某条属性, 那么这个操作也不是响应式的, 需要使用 `this.$delete(dataObj,prop)` 来使删除操作变为响应式操作
    - `dataObj` 指的是原对象
    - `prop` 指的是新增的属性
- 在 `vue2` 中, 如果在初始化 `data` 数据中定义了一个数组 `dataArray:[]`, 删除数组中的单个值并不是响应式的操作
  - `vue2` 重写了常用的数组函数, 使数组的方法成为响应式
  - 如果要单独修改数组中的某个值, 使用 `this.$set(dataArray,index,value)` 来使更改操作变为响应式操作
    - `dataArray` 指的是原数组数据
    - `index` 指的是需要更改的数据下标
    - `value` 指的是更改后的值
- `vue2` 的响应式原理都是通过 `Object.defineProperty()` 来实现的, 利用其中的 `get()` 与 `set()` 方法, 让对数据的操作是响应式的

```JavaScript
// 使用 Object.defineProperty() 不能够触发原属性中未有属性的 get() 与 set()
    let dataObj = {
      key: 'key-value',
      prop: 'prop-value'
    }
    let SuperDataObj = {}
    for (let item of Object.keys(dataObj)) {
      Object.defineProperty(SuperDataObj, item, {
        get() {
          // 触发 get()
          console.log('正在访问' + item + '属性')
          return dataObj[item]
        },
        set(value) {
          // 触发 set()
          console.log('正在设置' + item + '属性')
          dataObj[item] = value
        }
      })
    }
    SuperDataObj.key // 可以触发 get()
    SuperDataObj.key = 'change' // 可以触发 set()
    SuperDataObj.otherKey // 不能触发 get()
    SuperDataObj.otherKey = 'change' // 不能触发 set()
```

### `vue3` 响应式原理

- `vue3` 对于新增属性与删除属性以及对数组中单个元素的更改都是响应式的操作
- `vue3` 基于 `proxy` 实现对数据的响应式操作

```JavaScript
// 源对象
    let dataObj = {
      key: 'key-value',
      prop: 'prop-value'
    }

    // 代理对象
    let proxyDataObj = new Proxy(dataObj, {
      get(target, prop) {
        // 参数 target 表示代理的对象, prop 表示正在访问的该对象中的属性
        return Reflect.get(target, prop) // 使用 Reflect 来获取对应的属性值
      },
      set(target, prop, value) {
        // 在这里能够处理复杂逻辑
        Reflect.set(target, prop, value) // 使用 Reflect 来设置对应的属性值
      },
      deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop) // 使用 Reflect 来删除对应的属性
      }
    })

    // 对代理对象所做的所有修改都会同步到源对象中

    proxyDataObj.key // 访问代理对象中的属性会触发 get()
    proxyDataObj.key = 'change' // 设置代理对象中的属性会触发 set()
    delete proxyDataObj.key // 删除代理对象中的属性会触发 deleteProperty()
    proxyDataObj.newProp = 'new' // 为源对象中不存在的属性赋值也会触发 set()
```

### `ref` 与 `reactive` 的对比

#### `ref`

- 定义
  - `ref` 可以用来定义简单数据类型(`Number`, `Boolean`, `String`); 也可以用来定义复杂数据类型(`Object`, `Array`), 使用 `ref` 定义复杂类型数据时会自动使用 `reactive` 来包装复杂类型数据
- 使用
  - `ref` 定义的数据, 都是一个 `RefImpl` 实例对象, 在 `js` 中使用时, 需要使用 `.value` 访问属性, 在模板中使用时, 不需要使用 `.value`
- 原理
  - `ref` 通过 `Object.defineProperty()` 来劫持数据以达到响应式的效果

#### `reactive`

- 定义
  - `reactive` 只能够用来定义复杂数据类型(`Object`, `Array`)
- 使用
  - `reactive` 定义的数据, 都是一个 `proxy` 类型数据, 无论在 `js` 中使用还是在模板中使用, 均不需要通过 `.value` 获取属性
- 原理
  - `reactive` 通过 `Proxy` 代理数据的方法实现响应式效果, 并且使用 `Reflect` 操作源对象中的数据

## 计算属性

- 引入 `import {computed} from 'vue'`
- 在 `vue3` 中, 计算属性 `const resComputed = computed()` 是以函数形式进行调用的, 该函数有一个返回值, 返回值可以作为数据在模板中直接使用
  - 在 `vue2` 中, 使用计算属性时, 一条计算属性只能够针对同一个数据, 如果界面中需要使用大量的计算属性, 则需要重复使用结构相同的定义方式, 让计算属性变得臃肿
  - 所以 `vue3` 的计算属性作为函数, 可以将重复的逻辑提取成为一个函数加以复用

### 计算属性的简写方式

- 获取计算属性的值
- `const resComputed = computed(()=>{return ...})` 定义一个计算属性
  - 接收一个 `get()` 函数作为参数, 将返回值赋值给 `resComputed`
  - 在模板中直接使用

```JavaScript
import {computed} from 'vue'
const resComputed=computed(()=>{
  // 返回需要处理的逻辑
  return computedRes
})
```

### 计算属性的繁写方式

- 通过设置 `get()` 与 `set()` 方法获取与修改计算属性
- `const resComputed = computed({get(){return ...},set(val){setting}})`
  - 接收一个对象作为参数, 对象中包含 `get()` 与 `set()` 方法
  - 在 `get()` 中, 将返回值赋值给 `resComputed`
  - 在 `set(val)` 中, 如果 `resComputed` 变化, 则会将变化后的值 `val` 传递给其作为参数, 在语句体中书写其余逻辑

```JavaScript
import {computed} from 'vue'
const resComputed=computed({
  get(){
  // 返回需要处理的逻辑
    return computedRes
  },
  set(val){
    // 当计算属性改变时做出的逻辑
    // settings
  }
})
```

## 侦听器

- 引入 `import {watch} from 'vue'`
- 在 `vue3` 中, 侦听器 `watch()` 是以函数形式进行调用的, 没有返回值

### 侦听使用 `ref` 包装的简单类型数据

#### 侦听单个使用 `ref` 包装的简单类型数据

- `watch(prop,(newValue,oldValue)=>{},{settings})`, 使用函数的形式调用 `watch` 侦听器
  - `prop` 表示侦听的目标数据
  - `(newValue,oldValue)` 分别对应目标数据改变之后的值与改变之前的值
  - `{settings}` 指的是一个对象, 用来设置侦听器的额外配置
    - 可设置为 `{deep:true,immediate:true}`
    - `deep:true` 指的是侦听器可以侦听深层数据
    - `immediate:true` 指的是侦听器在初始加载时会执行一次

```JavaScript
imopert {ref,watch} from 'vue'
let prop=ref('value')
watch(prop,(newValue,oldValue)=>{
  console.log(newValue,oldValue) // 可以获取新值与旧值
},{
  immediate:true,
  // deep:true
})
```

#### 侦听多个使用 `ref` 包装的简单类型数据

- `watch([prop1,prop2,...],(newValue,oldValue)=>{},{settings})`
  - 如果想要侦听多个数据的变化, 只需要将侦听器的目标数据写作数组形式
  - `[prop1,prop2]` 表示侦听的多个目标数据
  - `(newValue,oldValue)` 分别对应两个数组. `newValue` 指的是所有被侦听的数据改变之后的新值组成的数组, `oldValue` 指的是所有被侦听的数据改变之前的值组成的数组
  - `settings` 与上述设置方法一致

```JavaScript
imopert {ref,watch} from 'vue'
let prop=ref('prop-value')
let key=ref('key-value')
// 以对象形式侦听多个数据
watch([prop,key],(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})
```

### 侦听使用 `reactive` 包装的复杂类型数据

#### 侦听使用 `reactive` 包装的整个响应式对象

- 响应式对象中的任何值发生改变时, 都会触发该侦听器事件
- `watch(obj,(newValue,oldValue)=>{},{settings})`
  - `obj` 表示使用 `reactive` 包装的复杂类型数据 `const obj=reactive({key:value})`
  - `(newValue,oldValue)` 分别表示改变后的对象数据与改变前的对象数据
    - 需要注意的是, **因为对象是引用类型的数据, 所以在这里无法正确获取 `oldValue` 的值**
  - `{settings}` 是对侦听器的额外配置
    - 需要注意的是, **在额外配置项中, `deep:true` 是默认开启的, 并且无法被关闭**

```JavaScript
import {watch,reactive} from 'vue'
let obj=reactive({
  key:'key-value',
  prop:'prop-value',
  attr:{
    inner:'inner-value'
  }
})
// 侦听整个响应式对象
watch(obj,(newValue,oldValue)=>{
  console.log(newValue,oldValue) // 不能够获取旧值
},{
  immediate:true,
  deep:false // 即使设置为 false 也无法关闭深层次侦听
  /*
  需要注意, 新版本下可以实现关闭深度监听
  */
})
```

#### 侦听使用 `reactive` 包装的响应式对象中的某条简单类型数据

- `watch(()=>obj.simpleData,(newValue,oldValue)=>{},{settings})`
  - 需要注意的是, **使用 `watch` 侦听 `reactive` 包装的响应式对象中的某条属性时, 侦听的目标数据需要是函数形式, 并且作为函数的返回值**
  - `(newValue,oldValue)` 都可以被获取到

```JavaScript
import {watch,reactive} from 'vue'
let obj=reactive({
  key:'key-value',
  prop:'prop-value',
  attr:{
    inner:'inner-value'
  }
})
// 侦听某条简单数据类型数据
watch(()=>obj.key,(newValue,oldValue)=>{
  console.log(newValue,oldValue) // 可以获取到新值与旧值
})
```

#### 侦听使用 `reactive` 包装的响应式对象中的某条对象类型数据

- `watch(()=>obj.complexData,(newValue,oldValue)=>{},{settings})`
  - 因为对象是引用类型数据, 所以在这里无法正确获取 `oldValue` 的值
  - 需要注意的是, **如果希望侦听深层次的数据, 需要在 `{settings}` 中配置 `deep:true` 选项**

```JavaScript
import {watch,reactive} from 'vue'
let obj=reactive({
  key:'key-value',
  prop:'prop-value',
  attr:{
    inner:'inner-value'
  }
})
// 侦听对象类型数据
// 此时修改 attr 中 inner 属性的值
watch(()=>obj.attr,(newValue,oldValue)=>{
  console.log(newValue,oldValue) // 无法获取到旧值
},{
  deep:true // 需要开启深层监听才能生效
})
```

#### 侦听使用 `reactive` 包装的响应式对象中的多条数据

- `watch([()=>obj.prop1,()=>obj.prop2],(newValue,oldValue)=>{},{settings})`
  - 与 `ref` 一样, 如果需要侦听多个值, 只需要将侦听的目标数据组成一个数组
  - `(newValue,oldValue)` 分别对应的是改变后的数据与改变前的数据
  - `{settings}` 配置设置与上述一致

```JavaScript
import {watch,reactive} from 'vue'
let obj=reactive({
  key:'key-value',
  prop:'prop-value',
  attr:{
    inner:'inner-value'
  }
})
// 侦听多条数据
// 侦听的目标数据采用数组写法
watch([()=>obj.key,()=>obj.prop],(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})
```

### 使用 `watchEffect()` 侦听器

- 引入 `import {watchEffect} from 'vue'`
- 在传统的侦听器中, 使用 `watch` 之后, 需要指明侦听器的目标数据以及处理逻辑
- 在 `watchEffect(()=>{coding...})` 中, 不需要额外指明需要侦听的目标数据
  - `watchEffect()` 接收一个回调函数作为参数, 回调函数中使用到的值会被自动侦听
  - `watchEffect()` 默认初始时就会执行一次, 此时会搜集需要侦听的数据

## 生命周期

- 在组合式 API 中, 不再有 `beforeCreate` 与 `created` 两个生命周期, 并且使用 `setup` 来取代
- 并且其余的生命周期函数更名, 生命周期函数接收一个函数参数, 在函数中书写逻辑
  - `onBeforeMount(()=>{})`
  - `onMounted(()=>{})`
  - `onBeforeUpdate(()=>{})`
  - `onUpdated(()=>{})`
  - `onBeforeUnmout(()=>{})` 对应 `vue2` 中的 `beforeDestroy`
  - `onUnmounted(()=>{})` 对应 `vue2` 中的 `destroyed`
  - `onErrorCaptured(()=>{})`
- 特别地, 在 `vue3` 中, 同一个生命周期函数可以被调用多次, 并且会被多次执行, 执行的顺序与代码顺序一致
  - 在 `vue2` 中, 多次使用同一个生命周期函数, 后面的会覆盖前面的
- 如果混用选项式 API 与组合式 API, 在组合式 API 中的 `setup()` 中定义的生命周期总是会比选项式 API 的生命周期函数先执行, 同名的生命周期函数也不会互相覆盖

## 模板引用(使用 `ref` 获取 `Dom` 元素)

- 在 `vue3` 中, 通过为 `Dom` 节点添加一个响应式属性 `const prop=ref(null)`, 来获取当前的 `Dom` 节点, `<tagName ref='prop'></tagName>`
  - 使用节点时, 通过 `prop.value` 可以直接获取
  - 可以在触发事件后获取
  - 也可以在生命周期 `onMounted()` 之后获取
  - 注意在 `Dom` 中使用的 `prop` 需要与在 `setup` 中定义的 `prop` 同名

## 组件通信

### `props` 传值 (父 => 子)

#### 非简写方式使用 `prop`

- 在 `vue3` 中, 使用非简写方式的情况下, 即定义了 `setup(props,ctx)` 选项时, 使用第一个参数 `props` 来接收父组件传递的值

#### 简写方式使用 `prop`

- 在 `vue3` 中, 使用了 `<script setup></script>` 的简写方式后, 通过 `const datas = defineProps()` 来接收父组件通过 `props` 方式传递的数据
  - 不校验或做额外的设置时, 使用 `const datas = defineProps([propName])` **数组的方式**接收数据
  - 检验或做额外的设置时, 使用 `const datas = defineProps({propName:{settings}})` **对象的方式**来接收数据, 对象中的校验规则与 `vue2` 用法一致
  - 在模板中使用时, 直接使用 `propName` 名称
  - 在 `js` 中使用时, 使用 `datas.propName` 即可

### 自定义事件 (子 => 父)

#### 非简写方式使用自定义事件

- 在 `vue3` 中, 使用非简写方式的情况下, 即定义了 `setup(props,ctx)` 选项时, 使用第二个参数 `ctx` 中的 `emit` 属性来触发自定义事件

#### 简写方式使用自定义事件

- 在 `vue3` 中, 使用了 `<script setup></script>` 的简写方式后, 通过 `const emit = defineEmits([eventName])` 来向父组件传递消息
  - 它返回一个函数 `emit`
  - `defineEmits` 接收一个字符串数组作为参数, 数组中的每一项 `eventName` 表示一个自定义事件名
  - 使用时, 直接利用 `emit(eventName,prop)` 来向父组件传递值
    - `eventName` 是数组中的某个事件名
    - `prop` 是子组件向父组件传递的数据

### 利用 `v-model` 原理

#### `vue2` 中在输入框中使用 `v-model`

- `v-model` 的原理是通过动态为 `input` 输入框绑定值, 并且监听输入框的 `input` 事件实现的双向绑定
- 子组件通过绑定父组件传递的参数作为输入框的内容, 在监听到输入框内容发生改变后通知子组件并传递参数, 实现了父子组件之间的通信
  - 在子组件中
  - `<input :value="parentCompValue" @input="$emit("subFun",subParams)">`
    - `:value="parentCompValue"` 表示动态绑定父组件向子组件传递的值 `parentCompValue`
    - `@input="$emit("subFun",subParams)"` 表示监听 `input` 输入框的 `input` 事件, 当输入框的值发生改变后, 触发 `$emit` 事件通知父组件修改数据, `subFun` 是自定义的事件名, `subParams` 是子组件向父组件传递的参数
  - 在父组件中
  - `<subComp :parentCompValue="data" @subFun="parentFun"></subComp>`
    - `parentCompValue` 表示父组件向子组件传递的参数名称, 在子组件中使用该名称来接收参数
    - `@subFun="parentFun"` 指的是父组件监听子组件的事件, `subFun` 是子组件自定义的事件名称, `parentFun` 是父组件用来处理子组件事件的函数名称
- 对于上述父子组件之间的传值方式进行优化
  - 在子组件中
  - `<input :value="parentCompValue" @input="$emit('update:parentCompValue',$event.target.value)">`
    - `@input="$emit('update:parentCompValue',$event.target.value)"` 用来向父组件传递参数
    - `'update:parentCompValue'` 指明需要修改的父组件传递的属性 `parentCompValue`, 紧跟在 `update:` 之后
    - `$event.target.value` 表示获取当前输入框的值, 并直接将值传递给父组件
  - 在父组件中
  - `<subComp :parentCompValue="data" @update:parentCompValue="parentFun"></subComp>`
    - `@update:parentCompValue="parentFun"` 表示监听子组件传递的事件名称 `update:parentCompValue`, `parentFun` 指的是父组件用来处理子组件事件的函数名称

#### `vue2` 中在组件层面使用 `v-model`

- 可以发现我们在父组件中将一个值动态绑定给了子组件, 并且父组件在监听子组件更新该值的事件, 这正是 `v-model` 双向绑定的原理
- 所以可以直接在子组件中使用 `v-model`
- `<subComp v-model:parentCompValue="parentCompValue"></subComp>`
  - 第一个 `parentCompValue` 表示父组件监听的子组件 `emit` 的 `update` 值
  - 第二个 `parentCompValue` 表示父组件向子组件传递的值

#### `vue3` 中在组件层面使用 `v-model`

- 在子组件中
  - 接收父组件传递的值 `defineProps(["parentCompValue"])`
  - 设置自定义触发事件 `defineEmits(["update:parentCompValue"])`
  - `<input :value="parentCompValue" @input="$emit('update:parentCompValue',$event.target.value)">`
    - `:value` 用来动态绑定父组件传递的值
    - `@emit('update:parentCompValue',$event.target.value)` 指的是向父组件通知修改数据
      - `'update:parentCompValue'` 指明需要修改的父组件传递的值
      - `$event.target.value` 指的是获取当前输入框的值并传递给父组件
- 在父组件中
  - `<subComp v-model:parentCompValue="parentCompValue"></subComp>`
  - 第一个 `parentCompValue` 表示父组件监听的子组件 `emit` 的 `update` 值
  - 第二个 `parentCompValue` 表示父组件向子组件传递的值
- 在使用某些第三方插件库时, 在调用组件时绑定数据采用 `<tagName modelValue="value" @update:modelValue="function"></tagName>` 来绑定数据与操作 dom 时的触发的事件
  - `modelValue` 是 vue 中默认的一个绑定属性
  - `@update:modelValue` 是在子组件中默认监听的事件, 当操作该元素内容发生变化时会触发

#### 在组件上使用多个 `v-model` 绑定

- 在同一个组件中使用多个 `v-model` 绑定多个数据
- 在父组件中
  - `<subComp v-model:prop1="prop1" v-model:prop2="prop2"></subComp>`
  - `prop1` 与 `prop2` 对应父组件向子组件传递的两个值
- 在子组件中
  - 使用两个 `input` 元素接收
  - 定义属性 `defineProps=(['prop1','prop2'])`
  - `<input :value="prop1" @input="$emit('update:prop1',$event.target.value)">`
  - `<input :value="prop2" @input="$emit('update:prop2',$event.target.value)">`
- 在同一个组件中绑定多个 `v-model` 用法与绑定单个 `v-model` 一致

### 自定义修饰符

- 在使用 `v-model` 时, 可以自定义修饰符, 指定子组件添加该修饰符需要的功能
- 在父组件中
  - `<subComp v-model:prop.decorationSign="prop"></subComp>`
    - `.decorationSign` 是自定义的修饰符名称
- 在子组件中
  - 定义事件 `const emit = defineEmits(['update:prop'])`
  - 定义属性 `defineProps(['prop','propModifiers'])`
    - `prop` 属性是父组件传递的属性
    - `propModifiers` 是父组件传递的属性名 `prop` 与 `Modifiers` 的组合
      - 在该属性中, 可以获取到父组件中添加的自定义修饰符 `decorationSign`
  - `<input :value="prop" @input="subFun">`
    - 在 `input` 元素中绑定父组件传递的属性值
    - 并且监听 `input` 事件, `subFun` 是事件处理函数, 在该函数中实现自定义修饰符的功能
      - `const subFun = (e) => {}` 在函数体中, 通过 `propModifiers.decorationSign` 获取到自定义修饰符是否存在后, 再执行相应逻辑

---

```html
<!-- 父组件 -->
<subComp v-model:prop.decorationSign="prop"></subComp>
```

```JavaScript
// 父组件
const prop=ref('value')
```

---

```html
<!-- 子组件 -->
<input :value="prop" @input="subFun" />
```

```JavaScript
// 子组件
const emit=defineEmits(['update:prop'])
defineProps(['prop','propModifiers'])
const subFun=e=>{
  // 获取当前输入框的值
  let val=e.target.value
  if(propModifiers.decorationSign){
    // coding...
    // 处理事件修饰符的逻辑
  }
  // 通知父组件修改数据
  emit('uodate:prop',val)
}
```

---

### 属性透传

- 使用 `$attrs` 来获取父组件向子组件传递的所有属性
  - 除开已经被 `defineProps()` 或者 `defineEmits()` 接收的属性或者方法

#### 子组件根节点唯一

##### 继承性

- 在父组件中, 使用子组件时 `<subComp prop="value"></subComp>`, 向子组件传递自定义属性
- 在子组件中, 父组件传递的属性会继承到子组件的根元素中

##### 对 `class` 与 `style` 的合并

- 在父组件中, 使用子组件时 `<subComp prop="value"></subComp>`, 向子组件传递自定义属性, 如果属性是 `class` 与 `style`, 并且子组件中存在自己已有的 `class` 与 `style`, 那么在子组件中会将这些同名属性进行合并
- 对于其他同名的属性, 父组件传递额属性值会覆盖子组件中原有的属性值

##### 使用 `v-on` 绑定的事件

- 在父组件中, 使用 `v-on` 向子组件绑定事件 `<subComp @eventName="function"></subComp>`
- 在子组件中, 父组件传递的事件会继承到子组件的根元素中, 并且同类型事件也会进行合并

#### 子组件根节点不唯一

- 如果子组件的根节点存在多个, 当父组件为子组件传递属性与方法时, 需要指定接收属性或方法的位置
- 在根节点中使用 `<tagName v-bind="$attrs"></tagName>` 为某个根节点绑定父组件的传递的值
- 如果不指定哪个节点获取父组件传递的数据, 会抛出警告

#### 深层组件继承

- 使用属性透传可以实现深层数据传递
  - 即父组件向子组件透传之后, 如果子组件使用了另外的子孙组件, 那么子孙组件会收到原始组件传递的数据
- 如果希望关闭掉组件的继承功能, 在子组件中添加一个新的 `script` 标签并设置 `<script>export default{inheritAttrs:false}</script>` 即可
- 在 `js` 中, 如果需要获取 `$attrs` 属性的值, 需要使用函数 `useAttrs()`
  - 引入 `import {useAttrs} from 'vue'`
  - 使用 `const attrs = useAttrs()`, 返回值 `attrs` 包含了父组件传递的数据

### 依赖注入 `provide` 与 `inject`

- 依赖注入的实现需要在存在家族关系的组件之中
- 父组件可以向子组件传递**属性或者方法**
- 使用方法
  - 父组件
    - 引入 `import {provide} from 'vue'`
    - `provide(customedName,value)`, `provide()` 是一个函数, 父组件中可以使用多个 `provide()`
      - `customedName` 是父组件自定义的参数名称
      - `value` 是需要提供给子组件的值, 可以是一个函数
  - 子组件
    - 引入 `import {inject} from 'vue'`
    - `const receiveData = inject(customedName)`, `inject()` 是一个函数, 子组件中可以使用多个 `inject`, 它的返回值就是父组件 `provide` 出去的数据
      - `customedName` 需要与父组件 `provide` 出去的数据或者函数名称一致
- 在 `vue3` 中, 依赖注入传递的数据也是响应式的数据
- 在子组件中, 为了遵循单项数据流的原则, 子组件不能够直接修改父组件 `provide` 的数据. 如果要修改父组件中的数据, 只能够父组件自行修改
  - 一个可行的操作是父组件 `provide` 一个修改目标数据的方法, 子组件在 `inject` 数据的同时也需要注入该修改数据的方法, 然后子组件调用该方法并传递希望修改的数据, 父组件调用该方法修改自身的值

### 类事件总线机制

- 在 `vue3` 中, 不再支持全局事件总线中的 `$emit` 与 `$on` 方法
- 可以使用第三方库 `mitt` 来实现类全局事件总线机制

#### 使用第三方库 `mitt`

- 使用命令 `npm i mitt -S` 下载安装
- 在 `main.js` 中
  - 引入 `import mitt from 'mitt'`
  - 执行 `const mitter = mitt()`
  - 挂载 `app.config.globalProperties.$bus = mitter`, 相当于 `vue2` 中的 `Vue.prototype.$bus=Vue`
- 针对需要传输数据的组件
  - 引入 `import {getCurrentInstance} from 'vue'` 获取当前组件实例
  - 调用 `let {proxy} = getCurrentInstance()` 解构出当前的代理对象
  - 使用 `proxy.$bus.emit(eventName,value)` 代理对象中的 `emit` 方法
    - `$bus` 是添加到全局中的 `mitter` 方法实例
    - `emit(eventName,value)` 是该实例中的方法
      - `eventName` 指的是自定义的一个方法名称
      - `value` 是希望传递的数据
- 针对接收数据的组件
  - 引入 `import {getCurrentInstance} from 'vue'` 获取当前组件实例
  - 调用 `let {proxy} = getCurrentInstance()` 解构出当前的代理对象
  - 使用 `proxy.$bus.on(eventName,function(val){})` 代理对象中的 `on` 方法监听发送数据组件的方法
    - `eventName` 是发送数据的组件自定义的方法名称, 注意该名称需要保持一致
    - `function(val){}` 是需要处理的逻辑函数, `val` 指的是其余组件发送的数据
- 使用 `mitt` 库实现的类事件总线机制与 `vue2` 的事件总线机制用法类似

## `Hook` 复用

### 组合式函数

- 又叫做自定义 `Hook`
- 在 `vue3` 中, 可以将一个实现独立功能的**带有状态与操作逻辑的函数**进行单独封装
- 一般来说, 我们会建立一个单独的文件夹 `hooks` 来存放这些单独封装的函数
- 使用 `自定义 Hook` 可以**提高代码的复用性**

#### `vue2` 中的 `mixin` 与 `vue3` 中的自定义 `Hook` 对比

- 何种形式被复用
  - 在 `vue2` 中, `mixin` 是以对象的形式被复用
  - 在 `vue3` 中, `hook` 是以函数的形式被复用
- 数据来源不清晰
  - 在 `vue2` 中, 使用多个 `mixin` 混入对象时, 不能够清楚地判断组件中的变量或者方法来自于哪个 `mixin`
  - 在 `vue3` 中, 使用多个 `hook` 函数,通过解构赋值, 可以很好地区分是使用了哪个 `hook` 的变量或者方法
- 变量冲突
  - 在 `vue2` 中, 使用多个 `mixin` 混入对象时, 难免在不同的混入对象中存在同名变量或者方法, 这回造成混入时的冲突
  - 在 `vue3` 中, 使用多个 `hook` 时可以在解构时对冲突的变量或者方法进行重命名
- 耦合度
  - 在 `vue2` 中, 多个 `mixin` 对象可能会互相使用彼此的变量或者方法, 增强不同模块中的耦合度
  - 在 `vue3` 中, 使用多个 `hook` 函数时, 可以使用函数的返回值作为另一个 `hook` 的参数, 彼此之间并不会直接影响内部代码

### 工具函数

#### `shallowReactive()`

- 在 `vue3` 中, 默认对使用 `reactive()` 包装的数据都开启了深层响应, 在一个大型对象中, 开启深层次的响应会消耗大量性能
- 引入 `import {shallowReactive} from 'vue'`
- `shallowReactive()` 用来定义一个响应式的对象类型数据, 但是它的**响应式只支持对象中的第一层**, 从第二层开始不支持响应式
- 如果项目中的数据是一个深层次对象, 并且明确了深层次的对象不需要支持响应式操作, 则可以使用 `shallowReactive()`

#### `shallowRef()`

- 引入 `import {shallowRef} from 'vue'`
- 在 `vue3` 中, 默认情况下, `ref()` 可以支持一个简单类型数据实现响应式, 也可以支持一个复杂类型数据实现响应式(借助 `reactive` 实现)
- `shallowRef()` 只支持实现简单类型数据的响应式操作, 不支持实现对象的响应式操作
- 对于一个不需要做任何修改的数据对象, 在执行操作后该数据对象会被新的值替换, 这种情况下可以使用 `shallowRef()`

#### `readonly()`

- 引入 `import {readonly} from 'vue'`
- `readonly` 用来将一个 `reactive` 对象, 普通 `Object` 对象或者一个 `ref` 对象包装为只读的数据, 它返回一个被包装为只读的新对象, 接收一个上述对象作为包装内容, 是深层次的只读

#### `shallowReadonly()`

- 引入 `import {shallowReadonly} from 'vue'`
- `shallowReadonly` 用来将响应式的数据包装为只读对象, 但是是浅只读, 深度属性可以被更改, 它也返回一个被包装为浅只读的新对象, 接收一个响应式的对象作为包装内容

#### `toRaw()`

- 引入 `import {toRaw} from 'vue'`
- `toRaw()` 用来将一个使用 `reactive()`, `readonly()`, `shallowReactive()`, `shallowReadonly()` 包装的代理对象转换为一个普通的对象
- 它接收一个上述类型的数据作为参数, 返回被一个非代理对象

#### `markRow()`

- 引入 `import {markRaw} from 'vue'`
- 一旦一个对象被 `markRaw()` 标记后, 那么这个对象将不会再被转换为代理对象
- 它接收一个对象作为参数, 返回该对象本身

#### 利用 `isRef()`, `isReadonly()`, `isReactive()`, `isProxy()` 判断响应式数据

- 引入 `import {isRef,isReadonly,isReactive,isProxy} from 'vue'`
- 所有的判断函数都接收一个待判断的数据参数, 返回一个 `boolean`
  - `isRef()` 用来判断一个数据是否是 `RefImpl` 类型
  - `isReactive()` 用来判断一个数据是否是由 `reactive()` 包装的响应式数据
  - `isReadonly()` 用来判断一个数据是否是由 `readonly()` 包装的只读数据
  - `isProxy()` 用来判断一个数据是否是由 `reactive()` 或者 `readonly()` 包装的代理对象

## `vue3` 的新增组件

### `Fragment` 标签片段

- 在 `vue2` 中, 每个组件必须要包含一个根标签
- 在 `vue3` 中, 每个组件的根标签可以不唯一
  - 当使用了多个根标签时, 在渲染模板时, `vue3` 会将根标签中的所有元素都包含在一个 `Fragment` 虚拟元素中
- 这样可以减少标签的嵌套层级. 减小内存占用

### `Teleport` 传送

- 在一些应用中, 在深层次的组件中, 有时候会触发一个展示在全局 app 应用层的效果(模态框), 在 `html` 结构中, 元素往往在内层, 而在浏览器的视觉效果中, 却又显示在最顶层
- 这会造成编写 `css` 出现一定的困难
- 使用 `<teleport to="tagName/cssSelector"></teleport>` 可以将希望展示的组件传送到指定的 `html` 元素中
  - `to` 属性用来指定内容会被插入到哪个 `tagName/cssSelector` 之中
    - `tagName` 是 `html` 标签名
    - `cssSelector` 是 `css` 选择器
    - 都可以用来指定将内容展示到目标元素之中
- 在逻辑上, 被 `teleport` 元素包裹的内容仍然从属于当前使用 `teleport` 的组件, 并且仍然可以使用父组件传递的 `props` 属性或其他数据

### `Suspense` 不确定组件

- 在 `vue2` 中, 使用异步组件 `const Comp = () => import('path')`
  - 异步组件在需要使用时才会被加载
- 在 `vue3` 中, 使用 `defineAsyncComponent()` 方法调用异步组件
  - 引入 `import {defineAsyncComponent} from 'vue`
  - 定义 `const Comp = defineAsyncComponent(()=>import('path'))`
  - 返回值 `Comp` 即代表一个异步组件
- 当网速过慢时, 加载静态组件时, 会一直等待所有组件加载完成后同步显示; 加载动态组件时, 会依据加载完成的情况依次显示组件
  - 为了提高用户的体验流畅度, 可以在异步组件尚未加载成功的情况下, 显示备用内容
  - 备用内容使用 `Suspense` 内置标签定义
    - `<Suspense></Suspense>` 标签中可以设置两块区域
    - 插槽 `#default` 用来指定需要被请求渲染的目标组件
    - 插槽 `#fallback` 用来指定在请求渲染的目标组件尚未被加载之前显示的备用内容
- 在 `vue3` 中, 如果在 `<script setup></script>` 中定义了一个 `await` 请求, 那么框架会自动将 `setup` 函数定义成为 `async` 函数, 并且 `setup` 会返回一个 `Promise` 类型的对象
  - 一般情况下, 不允许 `setup` 返回一个 `Promise` 对象, 这样模板无法访问返回值中的数据
  - 但是在使用 `Suspense` 内置组件并结合异步组件使用时 `setup` 可以返回一个 `Promise` 对象类型数据

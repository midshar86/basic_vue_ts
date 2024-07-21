# 网络请求

## 网络请求的方法

### 原生 `XHR` 方式

- 原生 `xhr` 网络请求发送的方式比较古老, 并且操作起来比较复杂

```JavaScript
let xhr=new XMLHttpRequest()
xhr.open('get/post/...',url)
xhr.setRequestHeader('param1','param2')
xhr.send()
xhr.onload=()=>{
  // 处理相应返回的数据
  console.log(JSON.parse(xhr.responseText))
}
```

### 原生 `fetch` 方式

- 原生的 `fetch` 方式, 不支持 IE 浏览器
- 采用 `Promise` 方式进行封装, 但是需要进行两次 `.then` 才能够获取响应数据

```JavaScript
fetch(url,{
  method:'get/post/...',
  // 设置请求头, 以对象形式添加
  headers:object,
  // 设置请求参数, 请求参数根据请求头设置而定
  body:params
  // 对于不能解析成为 json 字符串格式的数据使用 data.text() 解析成纯文本
}).then(data=>data.json/text()).then(res=>console.log(res))
```

### 第三方 `jQuery` 方式

### 第三方 `Axios` 方式

- 支持请求拦截与响应拦截

## 常用的请求方式

- `get` 请求
  - `get` 请求传参在请求的 `url` 地址中使用 `?prop=value&prop=value` 的形式明文传参
- `post` 请求
  - `post` 请求传参方式需要根据设置的请求头来确定以及后端要求的参数形式确定
  - `application/x-www-form-urlencoded` 指的是使用表单编码形式传参
    - 参数格式 `prop=value&prop=value`
  - `application/json` 指的是使用 `json` 数据格式传参
    - 参数格式 `'{"prop":"value","prop":"value"}'`
    - 通常使用 `JSON.stringify(params)` 将需要传递的参数转成 `json` 字符串

## 使用请求数据动态渲染页面

- 撰写静态页面布局
- 根据接口文档请求数据
- 渲染页面结构

## 使用 `Axios` 发送网络请求

- 数据持久化, 指使用 `localStorage` 将数据存储到本地

### 不使用别名发送网络请求

- `Axios` 默认的方法就是 `get` 方法
- 可以使用 `axios(url).then().catch()` 直接发起一个不带参数的 `get` 请求
- 或者使用 `axios({url:path,method:'get/post/...',params/data:{key:value},baseURL:path,headers:{key:value}})`
  - `url` 指的是请求的目标地址
  - `method` 指的是请求的方法, 不带该参数时默认为 `get` 方法
  - `params/data` 指的是请求时携带的参数
    - 需要注意的是
    - 使用 `get` 方法时, 利用 `params` 传参
    - 使用 `post` 方法时, 利用 `data` 传参
  - `headers` 用来设置请求头信息
  - `baseURL` 用来设置基准的请求 `url` 地址
- 完整的参数介绍见官网 [axios 官网](https://www.axios-http.cn/docs/req_config)

### 使用别名发送网络请求

#### 发送 `get` 请求

**不带参数.**

- `axios.get(url).then(res=>console.log(res.data)).catch(err=>console.log(err))`

**带参数.**

- `axios.get(url,{params:{key:value}}).then().catch()`
  - 如果是 `query` 传参形式, 可以直接在 `url` 地址中使用 `?` 拼接参数
  - 或者利用 `params:{key:value}` 的形式传参, 支持传递多条参数

#### 发送 `post` 请求

- 使用 `axios.post(url,{key:value}).then().catch()` 发送一个 `post` 请求
  - `{key:value}` 是请求参数, 可以直接以对象形式传递

## 在 Vue 全局中添加 `Axios` 方法

- 通过在 `Vue` 的原型中添加 `Axios`
- 引入 `import axios from 'axios'`
- 在初始化 `Vue` 之前, 通过 `Vue.prototype.$axios=axios` 设置
- 此后在任意组件中不必再次引入 `Axios` 模块, 直接通过 `this.$axios` 可以使用
- 解决在浏览器中报 `sockjs` 错误的方法
  - 在 `node_modules` 文件夹中找到 `sockjs_client` 文件夹
  - 找到 `dist` 文件夹中的 `sockjs.js` 文件
  - 搜索 `self.xhr.send(payload)`, 注释当前语句

## 二次封装 `Axios`

- 通常我们会创建一个 `api` 或者 `req` 文件夹来存放二次封装的方法
- 在文件夹中新建一个文件二次封装 `Axios`.
- 建立另外一个文件用来存放所有的需要网络请求的函数, 并且按需导出, 一般导出为一个箭头函数形式

### 新建一个 `Axios` 实例

```JavaScript
import axios from 'axios'
const myAxios=axios.create({
  // 配置基准url地址
  baseURL:'protocol://host:port',
  // 配置请求超时时间
  timeout:5000
})
```

### 配置请求拦截

- 在请求拦截阶段, 通常可以统一处理 `post` 请求参数, 统一处理请求进度, 统一添加 `token` 信息

```JavaScript
myAxios.interceptors.request.use(config=>{
  // 配置请求逻辑
  return config
},err=>{
  // 处理错误, 返回一个 Promise 对象
  return Promise.reject(err)
})
```

### 配置响应拦截

- 在响应拦截阶段, 通常可以对响应的参数进行加工处理

```JavaScript
myAxios.interceptors.response.use(response=>{
  // 处理响应的数据
  // 这里直接返回请求的响应数据
  return response.data
},err=>{
  // 处理错误, 返回一个 Promise 对象
  return Promise.reject(err)
})
```

### 导出配置

```JavaScript
exporrt default myAxios
```

### 高阶配置

- 在 `Axios` 中进行请求拦截
  - 使用 `qs` 库的 `qs.stringify()` 方法可以实现将对象形式的数据转换成为 `key=value&key=value` 格式的数据
  - 使用 `qs` 库地 `qs.parse()` 方法可以实现将 `key=value&key=value` 形式地字符串转换成为对象格式地数据
- 使用 `norogress` 插件实现请求时的进度效果
  - 引入主模块 `import nprogress from "nprogress"`
  - 引入样式 `import "nprogress/nprogress.css`
  - 使用 `nprogress.start()` 开启加载动画效果
  - 使用 `nprogress.done()` 关闭加载动画效果
- 通常地, 将所有地请求地址 `url` 存放在一个单独地 `.js` 文件中
  - 使用时直接导入地址
  - 有利于集中管理

## 跨域

### 解决方法一

- 后端通过配置特定地响应头解决跨域问题

### 解决方法二

- 通过 `jsonp` 方法解决跨域, 只能够解决 `get` 请求的跨域问题
- 利用的是通过 `<script></script>` 标签的 `src` 属性引入的外部资源不受同源策略的影响
- `jsonp` 方法需要前后端进行配合
  - 后端人员返回给前端一个特殊地响应数据, 必须要包含一个回调函数 `callback`
  - 前端人员通过 `<script src='path'></script>` 标签将 `src` 指向请求地址
    - 请求的响应数据将会被解析成为一段 `javascript` 代码, 通过调用回调函数 `callback`, 并且将响应数据作为回调函数的参数进行传递
  - 前端人员提前定义好后端返回的 `callback` 函数, 在形参中接收参数即可

### 解决方法三

- 使用代理服务器解决跨域问题
- 开启一个代理服务器, 要求与前端的端口号等保持一致, 前端发送请求给代理服务器, 代理服务器发送请求给后端服务器 (因为服务器与服务器之间的通信不受同源策略限制, 使用的是传统的 `http` 方式, 所以代理服务器可以向后端服务器发送请求并且获取响应数据), 获取数据后整合资源再返回给前端

#### 利用 `nginx` 技术实现反向代理

#### 利用 `vue/cli` 框架配置代理服务器

- 在项目根目录中 `vue.config.js` 中设置代理规则

```JavaScript
module.exports={
  devServer:{
    // 以对象的形式配置代理
    proxy:{
      // 设置一个自定义的别称
      '/customedName':{
        // 将凡是请求路径中存在别称的请求代理到 target 中, 即请求的目标 url
        target:'protocol://host:port',
        // websocket 客户端与服务端通信的一种方式
        ws:true,
        // 控制请求头中的 host
        changeOrigin:true,
        // 配置好代理后请求的地址中将会删除自定义的别称
        pathRewrite:{
          '^/customedName':''
        }
      },
      // 可以配置多个代理
    }
  }
}
```

- 在上面的代理设置中, 前端发送的请求将会被 `vue/cli` 代理并发送给目标服务器
- 在发送网络请求时, 请求地址应当写作 `/customedName/...`, 只要是在发送网络请求时, 匹配到代理规则中的别称, 将会被自动代理至目标 `url`, 即 `protocol://host:port/customedName/...`, 然而在真实的后端响应请求地址中, 应当去掉别称 `/customedName`, 所以配置了 `pathRewrite:{'^/customedName':''}` 是必要的

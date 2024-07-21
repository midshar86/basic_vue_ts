# 基于 Vue 的组件插件

## 移动端

### `Vant` 组件库

### `MintUI` 组件库

## PC 端

### `Element-UI` 组件库

#### 全部引入

- 通过 `npm i element-ui@2.x -S` 限定安装版本
- 在 `main.js` 中
  - 引入 `import ElementUI from 'element-ui'` 主文件
  - 引入 `import 'element-ui/lib/theme-chalk/index.css'`
  - 在 `Vue` 中挂载 `Vue.use(ElementUI)`

#### 按需引入

- 通过 `npm install babel-plugin-component -D` 安装开发版本
- 在 `Vue` 项目中的 `babel.config.js` 文件中配置

```JavaScript
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

- 在 `main.js` 中
  - 按需引入 `import {needModules} from 'element-ui'`
  - 使用 `Vue.prototype.$ELEMENT={size:'small',zIndex:3000}` 可以配置元素的默认尺寸
    - 目前仅支持配置 `size` 与 `zIndex`
    - 上述两个属性值是默认值
  - 在 `Vue` 中挂载 `Vue.use(needModules)`
- 在 `Vue2` 中, 设置 `CSS` 样式规则时在选择器之前添加 `/deep/` 可以提高该选择器的优先级, 深层穿透

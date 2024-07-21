# Less 语法

使用 Node 全局安装 Less, 执行命令 `npm i less -g`
使用 `.less` 文件编写 Less 代码
使用命令 `lessc fileName.less文件 fileName.css文件` 将 `.less` 文件编译成 `.css` 文件
使用的插件 `Prettier` 与 `Easy Less`

更多了解, 见 [less官网](<https://less.bootcss.com/>)

## 在 Less 中声明变量

### 样式变量

- `@varity` 以 `@` 开头, 即声明了一个 Less 变量, 变量可以有单位
- 变量之间进行 `+` 与 `-` 运算时, **注意在符号左右需要各添加一个空格**, 并且**变量的单位会以第一个变量为准进行自动统一**
- 变量之间进行 `*` 与 `/` 运算时, 可以不用在符号左右添加空格, 但是变量的单位依旧是以第一个变量进行统一
- 变量存在作用域规则
  - 在全局中声明的变量作用域在全局, 并且**后声明的变量会覆盖先声明的变量**
  - 在局部作用域声明的变量只在局部生效, 并且**遵循就近原则**
- 使用变量时应当连同 `@` 符号一并使用, 即 `@varity`

### 选择器变量

- 在 Less 中, 元素选择器也可以作为一个变量存在
  - 使用 `@varity=selector` 定义一个变量用来存储选择器
  - 在使用选择器变量的时候, 需要使用 `@{varity}` 语法
  - `selector` 可以是一个完整的选择器, 也可以是一个不完整的选择器, 比如 `class` 或者 `id` 的属性值, 在使用变量时, 需要添加上完整的选择器选择符, 比如 `.@{varity}` 或者 `#@{varity}`

### 属性变量

- 在 Less 中, CSS 的样式规则属性也可以作为变量
  - `@varity:prop` 将属性作为变量
  - 使用属性变量时, `selector:{@{varity}:value}` 可以使用定义的属性变量

### 属性值变量

- 对某些选择器应用一些具有相同的单个属性时 , 可以声明一个变量用来存储这些部分相同的数据, 比如在图片地址 `url` 中, 相同部分的路径便可以作为一个变量提取出来
  - 使用的方法同上

### 独立样式变量

- 对于复用性比较高的一些样式, 可以利用 `@style:{}` 将一个单独的样式整体作为变量
  - 在其他选择器中使用该样式时, 需要使用 `selector:{prop:value;@style()` 的语法, 将自身原有属性与样式变量中的样式进行合并, 使用方法类似于函数调用的语法

## 在 Less 中使用嵌套语法与父级引用

### 嵌套语法

在 Less 中直接用层级嵌套的形式, 对应 HTML 结构编写 CSS 代码

```less
.wraper {
  // style
  .inner1 {
    // style
    .inner2 {
      // style
    }
  }
}
```

将上述 less 代码编译成为 css 代码后:

```css
.wraper {
  /* style */
}
.wraper .inner1 {
  /* style */
}
.wraper .inner1 .inner2 {
  /* style */
}
```

### 父级引用

父级引用指的是当存在伪类或者伪元素时, 在父级元素中选择伪元素或者伪类的写法, 使用 `&` 代替父级元素, 并且**需要使用嵌套语法**

```less
.parent {
  // style
  &::before {
    // style
  }
}
```

上述 less 代码编译成为 css 代码后:

```css
.parent {
  /* style */
}
.parent::before {
  /* style */
}
```

### 嵌套媒体查询

使用 Less 的嵌套写法, 能够极大地精简原本的 CSS 语法

```less
selector {
  // style
  @media (condition1) {
    // style
    @media (condition2) {
      // style
      // 在外层条件cindition1的成立下同时成立内部cindition2的媒体查询条件
    }
  }
  @media (condition) {
    // style
  }
}
```

上述的 Less 代码编译为 CSS 代码后：

```css
@media (condition1) {
  /* style */
}
@media (condition1) and (condition2) {
  /* style */
}
@media (condition) {
  /* style */
}
```

## 混合

混合表示在一个选择器中定义的样式需要引入其他的已有样式

### 定义样式

- 利用 `styleName(@param1,@param2=default,[...]){styleContent}` 定义样式集合, 添加 `()` 的定义方法将不会让该定义出现在样式中; 如果不添加 `()` 定义样式, 该定义样式会出现在样式中
  - 在定义样式时， 可以添加多个参数, 也可以不添加参数, 参数可以设置一个默认值 `@param=default`
  - `styleContent` 表示具体的样式内容

### 使用定义样式

- 使用定义的样式时, 可以直接在另一个样式中使用 `styleName`, 也可以写作 `styleName()` 类似函数调用的形式
- 如果定义样式时有形参, 那么在使用时必须写成 `styleName(@param1,@param2)` 的形式

### 引入其他的 `.less` 文件

- 使用代码 `@import url(path)` 引入其他 `.less` 文件, 可以省略扩展名

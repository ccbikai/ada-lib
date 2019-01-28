# 快速开始

## 安装

可以使用 NPM 或者 yarn 安装

```bash
npm i -S ada-lib
# or
yarn add ada-lib
```

## 使用

```js
import 'ada-lib/lib/ada-lib.css'
import adaLib from 'ada-lib'
import Vue from 'vue'

Vue.use(adaLib)
// or
import 'ada-lib/lib/demo/ada-lib-demo.css'
import { Demo } from 'ada-lib' // 配合 babel 插件可以做到按需加载
import Vue from 'vue'

// 方式一
Vue.use(Demo)
// or
// 方式二
export default {
  components: {
    Demo
  }
}

// or
// 使用 UMD 方式，CDN https://www.jsdelivr.com/package/npm/ada-lib

var adaLib = window['ada-lib'] // https://cdn.jsdelivr.net/npm/ada-lib/lib/ada-lib.umd.min.js

var adaLibDemo = window['ada-lib-demo'] // https://cdn.jsdelivr.net/npm/ada-lib/lib/demo/ada-lib-demo.umd.min.js

```

## 按需加载(推荐)

推荐使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件。

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ada-lib',
        customName: (name) => {
          return `ada-lib/lib/${name}/ada-lib-${name}.common.js`
        },
        style: (name) => {
          return name.replace(/\.common\.js$/g, '.css')
        }
      },
      'ada-lib'
    ]
  ]
}

// page.js
import { Demo } from 'ada-lib'
```

## 自定义主题

自定义主题的核心是重新编译 stylus 文件，依赖 [stylus-loader](https://github.com/shama/stylus-loader), 请自行安装 。

### 自定义主题-全量加载

1. 在项目里边创建一个 `base.styl` 文件

```styl
// 导入组件基础样式库
@import '~ada-lib/src/stylus/base.styl'

// 自定义样式的代码，变量等
primary-color = #f63
```

2. 给 webpack 的 stylus-loader 增加配置

```js
{
  import: [path.join(__dirname, './src/base.styl')] // 注意地址要与第1步对应
}
```

3. 业务代码导入样式文件

```js
// main.js
import 'ada-lib/src/stylus/index.styl'
```

### 自定义主题-按需加载

按需加载与全量加载前两步相同，第`3`步改为使用 Babel 自定义插件导入

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ada-lib',
        customName: (name) => {
          return `ada-lib/lib/${name}/ada-lib-${name}.common.js`
        },
        style: (name) => {
          return name.replace(/\/lib\//g, '/src/stylus/').replace(/ada-lib-(.*)\.common\.js$/g, 'style.styl')
        }
      },
      'ada-lib'
    ]
  ]
}
```

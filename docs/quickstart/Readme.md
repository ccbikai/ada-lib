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

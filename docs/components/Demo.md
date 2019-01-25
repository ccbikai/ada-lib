# 演示组件

> 此组件主要是演示打包工具根据注释自动生成文档的功能，也可以作为其他组件的模板来使用。

## 预览

### 自定义名称 和 slot

> 通过 slot 可以自己写描述

<Example file="Demo/Foo.vue">
<<< examples/Demo/Foo.vue
</Example>

### 自定义性别

> 通过 gender 控制性别

<Example file="Demo/Bar.vue">
<<< examples/Demo/Bar.vue
</Example>

<!-- 自动生成的文档 -->

!!!include(auto/docs/Demo.md)!!!

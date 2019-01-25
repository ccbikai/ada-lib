<template>
  <div v-if="name" class="example">
    <div class="component">
      <component :is="name"/>
    </div>
    <div class="show-code" @click="showCode = !showCode">{{!showCode? '展示代码↓' : '隐藏代码↑'}}</div>
    <div v-if="showCode" class="code">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      name: '',
      showCode: false
    }
  },
  created () {
    const name = this.file.replace(/\//g, '').replace(/\.vue/g, '')

    Vue.component(name, () => import(`../../../examples/${this.file}`))

    this.name = name
  }
}
</script>

<style lang="stylus" scoped>
.example {
  border: 1px #eaecef solid;
  margin-top: 15px;
  background: #fff;

  .component {
    padding: 10px;
  }

  .show-code {
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 32px;
    background: #efefef;
    color: #2c3e50;
  }

  /deep/ {
    pre, pre[class*='language-'] {
      margin: 0;
    }

    div[class*='language-'] {
      border-radius: 0;
    }
  }
}
</style>


<template>
  <div class="icon-list">
    <!-- TODO: 筛选 -->
    <div class="icon-group" v-for="item in icons" :key="item.icons.join('')">
      <div class="icon-item" v-for="icon in item.icons" :key="icon" @click="copyHtml(icon)">
        <i :class="`ion-${icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { writeText } from 'clipboard-polyfill'

import data from 'ionicons/dist/ionicons/data.json'

export default {
  data () {
    return data
  },
  methods: {
    copyHtml (icon) {
      const text = `<i class="ion-${icon}"></i>`

      writeText(text).then(() => {
        alert(`已复制: ${text}`)
      }).catch(() => {
        alert(`复制失败: ${text}`)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;

  .icon-item {
    width: 60px;
    text-align: center;
    font-size: 36px;
    line-height: 1.5;
    cursor: pointer;
  }
}
</style>

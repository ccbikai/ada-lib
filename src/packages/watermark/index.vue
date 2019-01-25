<template>
  <div class="ada-watermark">
    <div
      v-if="waterMark"
      class="watermark-main"
      :style="{backgroundImage: `url(${waterMark})`, zIndex: `${zIndex}`}"
    ></div>
    <div class="watermark-content">
      <!-- 需要打水印的内容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Watermark',
  props: {
    // 水印文字
    text: {
      type: String,
      default: ''
    },
    // zIndex 值，控制遮挡页面内容
    zIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      waterMark: ''
    }
  },
  methods: {
    createImageUrl (options) {
      let canvas = document.createElement('canvas')

      canvas.width = 180
      canvas.height = 100

      let ctx = canvas.getContext('2d')

      ctx.font = '14px serif'
      ctx.textAlign = 'center'
      ctx.fillStyle = '#666'

      ctx.rotate(30 * Math.PI / 180)
      ctx.fillText(options.text, 60, 20)

      return canvas.toDataURL('image/png')
    }
  },
  mounted () {
    this.waterMark = this.createImageUrl({
      text: this.text
    })
  }
}
</script>

<style lang="stylus" scoped>
.ada-watermark {
  position: relative;

  .watermark-main {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-repeat: repeat;
  }

  .watermark-content {
    position: relative;
    z-index: 1;
  }
}
</style>

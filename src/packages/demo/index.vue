<template>
  <div class="ada-demo">
    <div class="ada-demo-name">
      {{name}}
      <span class="ada-demo-gender">{{ gender ? '男' : '女'}}</span>
    </div>
    <!-- 用户描述 -->
    <slot name="desc">
      <!-- `<div>就是一个小喽啰</div>` -->
      <div>就是一个小喽啰</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    // 姓名
    name: {
      type: String,
      required: true
    },
    // 性别
    gender: {
      // `1` / `0`
      type: Number,
      // 默认 `男：1`
      default: 1
    }
  },
  methods: {
    // @vuese
    // 提交表单
    // @arg ($event, form)
    submitForm ($event, form) {
      // 重置事件
      // @arg (form)
      this.$emit('submit', form)
    },
    // @vuese
    // 重置表单
    // @arg (form)
    resetForm (form) {
      // 重置事件
      // @arg { form }
      this.$emit('reset', {
        form
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.ada-demo {
  color: #333;
  line-height: 1.5;

  .ada-demo-name {
    font-size: 20px;
  }

  .ada-demo-gender {
    font-size: 14px;
  }
}
</style>

import Component from './index.vue'

Component.install = function (Vue) {
  Vue.component(Component.name, Component)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component)
}

export default Component

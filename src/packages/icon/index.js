import '../../stylus/icon/style.styl'

const Component = {
  name: 'Icon'
}

Component.install = function (Vue) {
  // Vue.component(Component.name, Component)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component)
}

export default Component

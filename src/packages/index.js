import Demo from './demo'
import Icon from './icon'
import Watermark from './watermark'

const components = {
  Demo,
  Icon,
  Watermark
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}

export {
  install,
  Demo,
  Icon,
  Watermark
}

export default {
  install,
  ...components
}

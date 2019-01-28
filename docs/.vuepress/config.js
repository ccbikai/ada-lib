const path = require('path')
const _ = require('lodash')
const pkg = require('../../package.json')
const examplesDir = 'examples'

module.exports = {
  dest: `dist`,
  title: _.camelCase(pkg.name),
  description: pkg.description,
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-include'))
    }
  },
  stylus: {
    include: [path.join(__dirname, '../../src/stylus')],
    import: ['base.styl']
  },
  plugins: {
    '@vuepress/plugin-register-components': {
      componentsDir: [examplesDir]
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quickstart/' },
      { text: '组件', link: '/components/' },
      { text: '源代码', link: 'https://github.com/ccbikai/ada-lib' },
    ],
    sidebar: [
      '/quickstart/',
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/components/', '总览'],
          '/components/Demo',
          '/components/Watermark'
        ]
      }
    ],
    // displayAllHeaders: true
  }
}

const path = require('path')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        include: [path.join(__dirname, './src/stylus')],
        import: ['base.styl']
      }
    }
  }
}

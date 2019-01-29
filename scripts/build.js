const path = require('path')
const _ = require('lodash')
const globby = require('globby')
const shell = require('shelljs')
const rimraf = require('rimraf')
const pkg = require('../package.json')

;(async () => {
  rimraf.sync('lib')
  const files = await globby('src/packages/**/index.js')

  const result = files.every(file => {
    const name = _.kebabCase(path.basename(path.dirname(file)))
    let code

    if (name === 'packages') {
      code = shell.exec(`npx vue-cli-service build --no-clean --target lib --dest lib --name ${pkg.name} ${file}`).code
    } else {
      code = shell.exec(`npx vue-cli-service build --no-clean --target lib --formats commonjs,umd-min --dest lib/${name} --name ${pkg.name}-${name} ${file}`).code
    }

    console.log(`${name} build ${!code ? 'success' : 'fail'}`)

    return !code
  })

  rimraf.sync('lib/**/demo.html')
  console.log(result ? 'packages build success' : 'packages build fail')
})()

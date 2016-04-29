var path = require('path')
var fs = require('fs')
var babelrc = fs.readFileSync(path.join(__dirname, '../.babelrc'))
var config

try {
  config = JSON.parse(babelrc)
  config.only = /\/app\//
  config.extensions = [ ".js" ]
} catch (err) {
  console.error('Error parsing .babelrc', err)
}

require('babel-core/register')(config)

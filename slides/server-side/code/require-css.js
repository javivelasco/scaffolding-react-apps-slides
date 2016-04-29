var hook = require('css-modules-require-hook')
var sass = require('node-sass')
var path = require('path')

hook({
  rootDir: path.join(__dirname, '../'),
  extensions: [ '.scss' ],
  generateScopedName: process.env.NODE_ENV === 'development'
    ? '[name]__[local]___[hash:base64:5]'
    : '[hash:base64:5]',
  preprocessCss: function (data, filename) {
    return sass.renderSync({
      data: data.replace('from \'sass!', 'from \''), // ignore sass! prefix in composes
      file: filename,
      includePaths: [
        path.join(__dirname, '../app/components'),
        path.join(__dirname, '../node_modules')
      ]
    }).css
  }
})

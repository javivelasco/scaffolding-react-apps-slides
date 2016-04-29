const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'presentation.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.scss', '.js', '.json'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/(node_modules)/]
      }, {
        test: /\.(scss|css)$/,
        loader: 'style!css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
      }, {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=10000&minetype=image/jpg'
      }, {
        test: /\.(gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      VERSION: JSON.stringify(pkg.version)
    })
  ]
};

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: ['./index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'slides.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.scss', '.js', '.json', '.md'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }, {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
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
    new ExtractTextPlugin('slides.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
        inject: false,
        template: path.resolve(__dirname, './index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

/**
 *
 *
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var chunkhash = global.offLine ? global.htmluseRandom : '';
var projectRoot = path.resolve(__dirname, '../');
var configJson = require('../package.json');
module.exports = {
  // 入口
  entry: {
    main: path.join(__dirname, '../src/main.js'),
  },
  // 输出
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]' + chunkhash + '.js',
    chunkFilename: '[name]' + chunkhash + '.chunk.js',
    publicPath: '' //配置静态输出路径
  },
  // 加载器
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: projectRoot },
      { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader") },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
      { test: /\.(html|tpl)$/, loader: 'html-loader' }
    ]
  },
  htmllaod: {
    loaders: {
      css: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?sourceMap',
        {
          publicPath: './'
        }
      )
    }
  },
  // 转es5
  babel: {
    presets: ['es2015'],
    plugins: [['transform-runtime', { 'polyfill': false }]]
  },
  resolve: {
    root: '', // 绝对路径
    extensions: ['', '.js', '.css']
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors' + chunkhash + '.js')
  ]
};

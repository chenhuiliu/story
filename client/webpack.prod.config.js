/**
 *打包压缩
 *
 */

var webpack = require('webpack');
var config = require('./webpack.dev.config');

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

module.exports = config;

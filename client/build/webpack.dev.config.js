/**
 *
 */
var path = require('path');
var fs = require('fs');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cleanPlugin = require('clean-webpack-plugin');

config.plugins = (config.plugins || []).concat([
  new cleanPlugin('./dist/', {
    root: path.join(__dirname, '../'),
    verbose: true,
    dry: false
  }),
  new HtmlWebpackPlugin({
    // minify: {    // 压缩HTML文件
    //   removeComments: true,    // 移除HTML中的注释
    //   collapseWhitespace: false    // 删除空白符与换行符
    // }, // 根据模板插入css/js等生成最终HTML
    templateContent: function () {
      var data = fs.readFileSync('./src/index.html', 'utf-8');
      var str = data.replace('<link rel="stylesheet" href="../dist/main.css">', '')
        .replace('<script src="../dist/vendors.js"></script>', '')
        .replace('<script src="../dist/main.js"></script>', '')
        .replace(/[\r\n]/g, '')
        .replace(/\s+([^<>]+)(?=<)/g, function (m) {
          return m.replace(/\s+/g, '');
        });
      if (global.offLine) {
        str = str.replace(/<html/g, '<html manifest="app.appcache" ');
      }
      return str;
    },
    filename: path.join(__dirname, './../dist/index' + (global.offLine ? (global.htmluseRandom || '') : '') + '.html'),    // 生成的html存放路径，相对于 path
    inject: true    // 允许插件修改哪些内容，包括head与body

  })
]);

module.exports = config;

/**
 * Created by lu on 2016/11/1.
 * 离线打包
 */

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
};

global.offLine = true;
global.htmluseRandom = (new Date()).Format('yyyyMMddmm');

var config = require('./webpack.prod.config');
var offLine = require('./off-line');

var marinHtml = 'index' + global.htmluseRandom + '.html';

config.plugins = (config.plugins || []).concat([
  new offLine({
    outputName: 'app',
    outputPath: './',
    excludePath: ['./' + marinHtml], // 排除某些缓存文件
    addFilesPath: []
  })
]);

module.exports = config;

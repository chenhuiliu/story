function offLine (option) {
  this.outputName = option.outputName || 'app';
  this.outputPath = option.outputPath || '/dist/';
  this.excludePath = option.excludePath || []; // 排除哪些文件不缓存
  this.addFilesPath = option.addFilesPath || []; // 手动添加文件
  this.fileListPath = []; // 最终的输出文件列表
}

function isContains (arr, v) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == v) {
      return true;
    }
  }
  return false;
}

offLine.prototype.createAppCaceFile = function (compilation) {
  var filelist = 'CACHE MANIFEST \n';
  filelist += '#  ' + this.outputName;
  filelist += ' v' + new Date().getTime() + '\n\n'; // 生成时间戳版本号
  filelist += 'CACHE: \n';

  this.fileListPath.forEach(function (val) {
    filelist += val + '\n';
  });
  filelist += '\n\nNETWORK: \n  * \nFALLBACK:\n';

  compilation.assets[this.outputName + '.appcache'] = {
    source: function () {
      return filelist;
    },
    size: function () {
      return filelist.length;
    }
  };
};
offLine.prototype.apply = function (compiler) {
  this.fileList = [];
  var me = this;
  /*eslint-disable */
  compiler.plugin('emit', function (compilation, callback) {
    // debugger
    //遍历收到添加资源列表
    me.addFilesPath.forEach(function (value, index, array) {
      //判断是否在 排除的文件列表中
      if (!isContains(me.excludePath, value)) {
        //判断是否已经已经在缓存文件列表中
        if (!isContains(me.fileListPath, value)) {
          me.fileListPath.push(value);
        }
      }
    });

    for (var filename in compilation.assets) {
      var name = me.outputPath + filename;
      // console.log(name);
      if (!isContains(me.excludePath, name)) {
        //判断是否已经已经在缓存文件列表中
        if (!isContains(me.fileListPath, name)) {
          me.fileListPath.push(name);
        }
      }
    }
    me.createAppCaceFile(compilation);
    callback();
  });
  /*eslint-enable */
};
module.exports = offLine;


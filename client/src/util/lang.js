/**
 * Created by lu on 2016/9/28.
 */

/**
 * 把字符串作为 URI 组件进行编码
 * @param {string} key key
 * @param {string} value  value
 * @returns {string} 返回编码后的字符串
 */
export function toQueryPair(key, value) {
  return encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value));
}
/**
 * 参数对象进行URL字符串转换
 * @param {Object} obj url data 对象
 * @returns {string} 转换后的字符串
 */
export function toQueryString(obj) {
  var result = [];
  for (var key in obj) {
    result.push(toQueryPair(key, obj[key]));
  }
  return result.join('&');
}
/**
 *获取当前url参数
 * @returns {string} 编码的后字符串
 */
export function getUrlParam() {
  var qs = (location.search.length > 0 ? location.search.substring(1) : ''),
    arges = {},
    items = qs.length ? qs.split('&') : [],
    item = null,
    name = null,
    value = null,
    i = 0,
    len = items.length;
  for (i = 0; i < len; i++) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      arges[name] = value;
    }
  }
  return arges;
}

/**
 * 生成 UIID
 * @returns {string} 返回32位的唯一不重复的字符串
 */
export function guId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}
/**
 * 生成guidCss
 * @returns {string} 生成唯一ID
 */
export function guIdCSS() {
  return 'a' + (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1).toUpperCase();
}

/**
 * 得到字符串长度
 * @param {string} str 字符串
 * @returns {number} 返回字符串的字节长度
 */
export function getStrLen(str) {
  var i = 0,
    len = str.length,
    ret = {
      length: 0
    };

  for (; i < len; i++) {
    var _ascii = str.charCodeAt(i);
    if (_ascii > 255) {
      ret.length += 2;
    } else {
      // 判断大写字符
      _ascii > 60 && _ascii < 90 ? ret.length += 2 : ret.length += 1;
    }
  }
  return ret.length;
}

/**
 * 注册到全局TD中
 * @param {string} name
 * @param {object} obj
 */
export function setTD(name, obj) {
  if (!window.TD[name]) {
    window.TD[name] = obj;
  }
}
/**
 * url关键字符替换
 * @param {sttring} url
 * @returns {*|XML|void|string}
 */
export function urlReplace(url) {
  return url.replace(/\//g, '$');
}
/**
 * url 替换后还原
 * @param {string} 字符串
 * @returns {string}  字符串
 */
export function urlReset(url) {
  return url.replace(/\$/g, '/');
}
/**
 *  浅copy
 * @param {object} obja
 * @param {object} objb
 * @returns {object} 合并后的字符串
 */
export function copy(obja, objb) {
  for (var o in objb) {
    obja['' + o + ''] = objb[o];
  }
  return obja;
}
/**
 *创建JSON 副本数据
 *@param {object} json json对象
 *@returns {object} json 对象
 */
export function jsonDataCopy(json) {
  return deepCopy(json);
}

export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
/**
 * 类型判断
 * @param {*} obj 
 */
export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

export function isVisible(dom) {
  return dom.style.display !== "none";
};
export function showBlock(dom) {
  if (dom.style.display === "none" || dom.style.display === "") {
    dom.style.display = "block";
  }
};
export function showInlineBlock(dom) {
  if (dom.style.display === "none" || dom.style.display === "") {
    dom.style.display = "inline-block";
  }
};
export function showTable(dom) {
  if (dom.style.display === "none" || dom.style.display === "") {
    dom.style.display = "table";
  }
};
export function hide(dom) {
  if (dom.style.display !== "none" || dom.style.display === "") {
    dom.style.display = "none";
  }
};
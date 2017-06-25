(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("TDMap", [], factory);
	else if(typeof exports === 'object')
		exports["TDMap"] = factory();
	else
		root["TDMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.getBlen = getBlen;
exports.captureMouse = captureMouse;
/**
 * 是否是函数
 * @param {Mix}
 * @returns {Boolean}
 */
function isFunction(func) {
    return typeof func == "function";
}
/**
 * 是否是数字
 * @param {Mix}
 * @returns {Boolean}
 */
function isNumber(number) {
    return typeof number == "number";
}
/**
 * 是否是字符串
 * @param {Mix}
 * @returns {Boolean}
 */
function isString(string) {
    return typeof string == "string";
}
/**
 * 是否定义
 * @param {Mix}
 * @returns {Boolean}
 */
function isDefined(object) {
    return typeof object != "undefined";
}
/**
 * 是否为对象类型
 * @param {Mix}
 * @returns {Boolean}
 */
function isObject(object) {
    return (typeof object === "undefined" ? "undefined" : _typeof(object)) == 'object';
}
/**
 * 判断目标参数是否Array对象
 * @param {Mix} 
 * @returns {boolean} 类型判断结果
 */
function isArray(source) {
    return '[object Array]' == Object.prototype.toString.call(source);
};
/**
 * 判断字符串长度英文占1个字符，中文汉字占2个字符
 * @param {Object} str
 */
function getBlen(str) {
    return str.replace(/[^\x00-\xff]/g, "01").length;
}

/*
 *获取鼠标相对于canvas 的距离
 */
function captureMouse(element) {
    var mouse = {
        x: 0,
        y: 0,
        event: null
    };

    element.addEventListener('mousemove', function (event) {
        var bounding = element.getBoundingClientRect();
        var offsetLeft = bounding.left;
        var offsetTop = bounding.top;
        var body_scrollTop = document.body.scrollTop;
        var body_scrollLeft = document.body.scrollLeft;
        var x, y;
        x = event.pageX - offsetLeft - body_scrollLeft;
        y = event.pageY - offsetTop - body_scrollTop;
        mouse.x = x;
        mouse.y = y;
        mouse.event = event;
    }, false);

    return mouse;
};
var extend = exports.extend = function extend(target, source) {

    if (target && source && (typeof source === "undefined" ? "undefined" : _typeof(source)) == "object") {
        for (var p in source) {
            target[p] = source[p];
        }

        var prototype_fields = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

        for (var j = 0, key; j < prototype_fields.length; j++) {
            key = prototype_fields[j];
            if (Object.prototype.constructor.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Point = Point;

var _util = __webpack_require__(0);

/**
 * @fileoverview 关于地理点坐标类文件.
 */

//Include("BMap.baidu.lang.Class");


/**
 * 基本点类,代表地理点坐标;
 * 坐标支持base64编码
 * @param {Object} lng 墨卡托X(经度).
 * @param {Object} lat 墨卡托Y(纬度);.
 * @return {Point} 返回一个地理点坐标对象.
 */
function Point(lng, lat) {
    // 新增base64支持 - by jz
    if (isNaN(lng)) {

        lng = isNaN(lng) ? 0 : lng;
    }
    if ((0, _util.isString)(lng)) {
        lng = parseFloat(lng);
    }
    if (isNaN(lat)) {

        lat = isNaN(lat) ? 0 : lat;
    }
    if ((0, _util.isString)(lat)) {
        lat = parseFloat(lat);
    }
    this.lng = lng;
    this.lat = lat;
}
Point.isInRange = function (pt) {
    return pt && pt.lng <= 180 && pt.lng >= -180 && pt.lat <= 74 && pt.lat >= -74;
};
Point.prototype.equals = function (other) {
    return other && this.lat == other.lat && this.lng == other.lng;
};
exports.default = Point;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MercatorProjection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Projection2 = __webpack_require__(5);

var _Point = __webpack_require__(1);

var _Pixel = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MercatorProjection = exports.MercatorProjection = function (_Projection) {
    _inherits(MercatorProjection, _Projection);

    function MercatorProjection() {
        _classCallCheck(this, MercatorProjection);

        var _this = _possibleConstructorReturn(this, (MercatorProjection.__proto__ || Object.getPrototypeOf(MercatorProjection)).call(this));

        _this.EARTHRADIUS = 6370996.81, _this.MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], _this.LLBAND = [75, 60, 45, 30, 15, 0], _this.MC2LL = [[1.410526172116255e-008, 8.983055096488720e-006, -1.99398338163310, 2.009824383106796e+002, -1.872403703815547e+002, 91.60875166698430, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.733798120000000e+007], [-7.435856389565537e-009, 8.983055097726239e-006, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486000000e+007], [-3.030883460898826e-008, 8.983055099835780e-006, 0.30071316287616, 59.74293618442277, 7.35798407487100, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6.856817370000000e+006], [-1.981981304930552e-008, 8.983055099779535e-006, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4.482777060000000e+006], [3.091913710684370e-009, 8.983055096812155e-006, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.63218178102420, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2.555164400000000e+006], [2.890871144776878e-009, 8.983055095805407e-006, -0.00000003068298, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 8.260885000000000e+005]], _this.LL2MC = [[-0.00157021024440, 1.113207020616939e+005, 1.704480524535203e+015, -1.033898737604234e+016, 2.611266785660388e+016, -3.514966917665370e+016, 2.659570071840392e+016, -1.072501245418824e+016, 1.800819912950474e+015, 82.5], [8.277824516172526e-004, 1.113207020463578e+005, 6.477955746671608e+008, -4.082003173641316e+009, 1.077490566351142e+010, -1.517187553151559e+010, 1.205306533862167e+010, -5.124939663577472e+009, 9.133119359512032e+008, 67.5], [0.00337398766765, 1.113207020202162e+005, 4.481351045890365e+006, -2.339375119931662e+007, 7.968221547186455e+007, -1.159649932797253e+008, 9.723671115602145e+007, -4.366194633752821e+007, 8.477230501135234e+006, 52.5], [0.00220636496208, 1.113207020209128e+005, 5.175186112841131e+004, 3.796837749470245e+006, 9.920137397791013e+005, -1.221952217112870e+006, 1.340652697009075e+006, -6.209436990984312e+005, 1.444169293806241e+005, 37.5], [-3.441963504368392e-004, 1.113207020576856e+005, 2.782353980772752e+002, 2.485758690035394e+006, 6.070750963243378e+003, 5.482118345352118e+004, 9.540606633304236e+003, -2.710553267466450e+003, 1.405483844121726e+003, 22.5], [-3.218135878613132e-004, 1.113207020701615e+005, 0.00369383431289, 8.237256402795718e+005, 0.46104986909093, 2.351343141331292e+003, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]];

        return _this;
    }

    _createClass(MercatorProjection, [{
        key: 'getDistanceByMC',
        value: function getDistanceByMC(point1, point2) {
            if (!point1 || !point2) return 0;
            var x1, y1, x2, y2;
            point1 = this.convertMC2LL(point1);
            if (!point1) return 0;
            x1 = this.toRadians(point1.lng);
            y1 = this.toRadians(point1.lat);
            point2 = this.convertMC2LL(point2);
            if (!point2) return 0;
            x2 = this.toRadians(point2.lng);
            y2 = this.toRadians(point2.lat);
            return this.getDistance(x1, x2, y1, y2);
        }
        /**
         * 根据经纬度坐标计算两点间距离;
         * @param {Point} point1 经纬度点坐标1
         * @param {Point} point2 经纬度点坐标2;
         * @return {Number} 返回两点间的距离
         */

    }, {
        key: 'getDistanceByLL',
        value: function getDistanceByLL(point1, point2) {
            if (!point1 || !point2) return 0;
            point1.lng = this.getLoop(point1.lng, -180, 180);
            point1.lat = this.getRange(point1.lat, -74, 74);
            point2.lng = this.getLoop(point2.lng, -180, 180);
            point2.lat = this.getRange(point2.lat, -74, 74);
            var x1, x2, y1, y2;
            x1 = this.toRadians(point1.lng);
            y1 = this.toRadians(point1.lat);
            x2 = this.toRadians(point2.lng);
            y2 = this.toRadians(point2.lat);
            return this.getDistance(x1, x2, y1, y2);
        }
        /**
         * 平面直角坐标转换成经纬度坐标;
         * @param {Point} point 平面直角坐标
         * @return {Point} 返回经纬度坐标
         */

    }, {
        key: 'convertMC2LL',
        value: function convertMC2LL(point) {
            var temp, factor;
            temp = new _Point.Point(Math.abs(point.lng), Math.abs(point.lat));
            for (var i = 0; i < this.MCBAND.length; i++) {
                if (temp.lat >= this.MCBAND[i]) {
                    factor = this.MC2LL[i];
                    break;
                }
            };
            var lnglat = this.convertor(point, factor);
            var point = new _Point.Point(lnglat.lng.toFixed(6), lnglat.lat.toFixed(6));
            return point;
        }

        /**
         * 经纬度坐标转换成平面直角坐标;
         * @param {Point} point 经纬度坐标
         * @return {Point} 返回平面直角坐标
         */

    }, {
        key: 'convertLL2MC',
        value: function convertLL2MC(point) {
            var temp, factor;
            point.lng = this.getLoop(point.lng, -180, 180);
            point.lat = this.getRange(point.lat, -74, 74);
            temp = new _Point.Point(point.lng, point.lat);
            for (var i = 0; i < this.LLBAND.length; i++) {
                if (temp.lat >= this.LLBAND[i]) {
                    factor = this.LL2MC[i];
                    break;
                }
            }
            if (!factor) {
                for (var i = this.LLBAND.length - 1; i >= 0; i--) {
                    if (temp.lat <= -this.LLBAND[i]) {
                        factor = this.LL2MC[i];
                        break;
                    }
                }
            }
            var mc = this.convertor(point, factor);
            var point = new _Point.Point(mc.lng.toFixed(2), mc.lat.toFixed(2));
            return point;
        }
    }, {
        key: 'convertor',
        value: function convertor(fromPoint, factor) {
            if (!fromPoint || !factor) {
                return;
            }
            var x = factor[0] + factor[1] * Math.abs(fromPoint.lng);
            var temp = Math.abs(fromPoint.lat) / factor[9];
            var y = factor[2] + factor[3] * temp + factor[4] * temp * temp + factor[5] * temp * temp * temp + factor[6] * temp * temp * temp * temp + factor[7] * temp * temp * temp * temp * temp + factor[8] * temp * temp * temp * temp * temp * temp;
            x *= fromPoint.lng < 0 ? -1 : 1;
            y *= fromPoint.lat < 0 ? -1 : 1;
            return new _Point.Point(x, y);
        }
    }, {
        key: 'getDistance',
        value: function getDistance(x1, x2, y1, y2) {
            return this.EARTHRADIUS * Math.acos(Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1));
        }
    }, {
        key: 'toRadians',
        value: function toRadians(angdeg) {
            return Math.PI * angdeg / 180;
        }
    }, {
        key: 'toDegrees',
        value: function toDegrees(angrad) {
            return 180 * angrad / Math.PI;
        }
    }, {
        key: 'getRange',
        value: function getRange(v, a, b) {
            if (a != null) {
                v = Math.max(v, a);
            }
            if (b != null) {
                v = Math.min(v, b);
            }
            return v;
        }
    }, {
        key: 'getLoop',
        value: function getLoop(v, a, b) {
            while (v > b) {
                v -= b - a;
            }
            while (v < a) {
                v += b - a;
            }
            return v;
        }

        /**
         * 经纬度变换至墨卡托坐标
         * @param Point 经纬度
         * @return Point 墨卡托
         */

    }, {
        key: 'lngLatToMercator',
        value: function lngLatToMercator(point) {
            return this.convertLL2MC(point);
        }
        /**
         * 球面到平面坐标
         * @param Point 球面坐标
         * @return Pixel 平面坐标
         */

    }, {
        key: 'lngLatToPoint',
        value: function lngLatToPoint(point) {
            var mercator = this.convertLL2MC(point);
            return new _Pixel.Pixel(mercator.lng, mercator.lat);
        }
        /**
         * 墨卡托变换至经纬度
         * @param Point 墨卡托
         * @returns Point 经纬度
         */

    }, {
        key: 'mercatorToLngLat',
        value: function mercatorToLngLat(point) {
            return this.convertMC2LL(point);
        }
        /**
         * 平面到球面坐标
         * @param Pixel 平面坐标
         * @returns Point 球面坐标
         */

    }, {
        key: 'pointToLngLat',
        value: function pointToLngLat(point) {
            var mercator = new _Point.Point(point.x, point.y);
            return this.convertMC2LL(mercator);
        }
        /**
         * 地理坐标转换至像素坐标
         * @param Point 地理坐标
         * @param Number 级别
         * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
         * @param Size 地图容器大小
         * @return Pixel 像素坐标
         */

    }, {
        key: 'pointToPixel',
        value: function pointToPixel(point, zoom, mapCenter, mapSize, curCity) {
            if (!point) {
                return;
            }
            point = this.lngLatToMercator(point, curCity);
            mapCenter = this.lngLatToMercator(mapCenter);
            var zoomUnits = this.getZoomUnits(zoom);
            var x = Math.round((point.lng - mapCenter.lng) / zoomUnits + mapSize.width / 2);
            var y = Math.round((mapCenter.lat - point.lat) / zoomUnits + mapSize.height / 2);
            return new _Pixel.Pixel(x, y);
        }
        /**
         * 像素坐标转换至地理坐标
         * @param Pixel 像素坐标
         * @param Number 级别
         * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
         * @param Size 地图容器大小
         * @return Point 地理坐标
         */

    }, {
        key: 'pixelToPoint',
        value: function pixelToPoint(pixel, zoom, mapCenter, mapSize, curCity) {
            if (!pixel) {
                return;
            }
            var zoomUnits = this.getZoomUnits(zoom);
            var lng = mapCenter.lng + zoomUnits * (pixel.x - mapSize.width / 2);
            var lat = mapCenter.lat - zoomUnits * (pixel.y - mapSize.height / 2);
            var point = new _Point.Point(lng, lat);
            return this.mercatorToLngLat(point, curCity);
        }
    }, {
        key: 'getZoomUnits',
        value: function getZoomUnits(zoom) {
            return Math.pow(2, 18 - zoom);
        }
    }]);

    return MercatorProjection;
}(_Projection2.Projection);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pixel = exports.Pixel = function () {
    function Pixel(x, y) {
        _classCallCheck(this, Pixel);

        this.x = x || 0;
        this.y = y || 0;
    }

    _createClass(Pixel, [{
        key: "Pixel",
        value: function Pixel(other) {
            return other && other.x == this.x && other.y == this.y;
        }
    }]);

    return Pixel;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Projection = exports.Projection = function () {
    function Projection() {
        _classCallCheck(this, Projection);
    }

    _createClass(Projection, [{
        key: "lngLatToPoint",
        value: function lngLatToPoint() {
            throw "lngLatToPoint方法未实现";
        }
    }, {
        key: "pointToLngLat",
        value: function pointToLngLat() {
            throw "pointToLngLat方法未实现";
        }
    }]);

    return Projection;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geo = undefined;

var _MercatorProjection = __webpack_require__(3);

var geo = exports.geo = {
    pointToPixel: function pointToPixel(point, zoom, center, size) {
        return this.projection.pointToPixel(point, zoom, center, size);
    },
    pixelToPoint: function pixelToPoint(piexl) {}
    /**
     * 经纬度变换至墨卡托坐标
     * @param Point 经纬度
     * @return Point 墨卡托
     */

    ,
    lngLatToMercator: function lngLatToMercator() {
        return this.projection.convertLL2MC(point);
    },

    projection: new _MercatorProjection.MercatorProjection()
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pointToPixel = pointToPixel;
exports.pointsToPixels = pointsToPixels;
exports.pointToPixelWorker = pointToPixelWorker;
exports.pointsToPixelsWoker = pointsToPixelsWoker;

var _geo = __webpack_require__(6);

var _util = __webpack_require__(0);

function pointToPixel(point, map) {
    var zoom = map.getZoom();
    var center = map.getCenter();
    var size = map.getSize();
    return _geo.geo.pointToPixel(point, zoom, center, size);
}

function pointsToPixels(points, map) {
    var data = points;
    points = (0, _util.isArray)(data) ? data : data.request.data;
    map = map || data.request.map;
    var pixels = [];
    for (var i = 0, len = points.length; i < len; i++) {
        pixels.push(pointToPixel(points[i], map));
    }
    return pixels;
}

function pointToPixelWorker(point, map) {
    var zoom = map.zoom;
    var center = map.center;
    var size = map.size;
    return _geo.geo.pointToPixel(point, zoom, center, size);
}

function pointsToPixelsWoker(points, map) {
    var data = points;
    points = (0, _util.isArray)(data) ? data : data.request.data;
    map = map || data.request.map;
    var pixels = [];
    for (var i = 0, len = points.length; i < len; i++) {
        pixels.push(pointToPixelWorker(points[i], map));
    }
    return pixels;
};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeatTileOverlay = exports.HeatOverlay = undefined;

var _index = __webpack_require__(7);

var HeatOverlay = exports.HeatOverlay = {
    pointsToPixels: function pointsToPixels(webObj) {
        var pixels = (0, _index.pointsToPixelsWoker)(webObj.request.data, webObj.request.map);
        return {
            data: pixels,
            client: webObj
        };
    }
};
var HeatTileOverlay = exports.HeatTileOverlay = {
    pointsToPixels: function pointsToPixels(webObj) {
        webObj.request.data.forEach(function (item) {
            item.pixelData = (0, _index.pointsToPixelsWoker)(item.data, webObj.request.map);
        });

        return {
            data: webObj.request.data,
            client: webObj
        };
    }
};

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TDpost = undefined;

var _HeatOverlay = __webpack_require__(12);

var callbackList = {
    "HeatOverlay": _HeatOverlay.HeatOverlay,
    'HeatTileOverlay': _HeatOverlay.HeatTileOverlay
};

/**
 * 接收worker消息
 * @param {Event} e
 */
onmessage = function message(e) {
    var data = e.data;
    callback(data);
};
/**
 * 唯一生效队列控制全家对象
 */
var handler = {};
/**
 * worker方法执行解析
 */
var callback = function callback(data) {
    //	console.log('TD.callback', data)
    var request = data.request;
    var classPath = request.classPath;
    var hashCode = request.hashCode;
    var msgId = request.msgId;
    var p = classPath.split('.'),
        index = 0,
        callback = callbackList;
    while (p[index]) {
        callback = callback[p[index]];
        index++;
        if (index >= p.length) {
            //唯一生效队列控制
            handler[classPath] = hashCode + '_' + msgId;
            //查找到执行方法，并执行方法
            var obj = callback(data);
            TDpost(obj.data, obj.client);
            return;
        }

        if (!callback) {
            console.log(p[index - 1] + 'worker ' + classPath + ' is not a function');
            return;
        }
    }
};

/**
 * push到web消息
 * @param {Object} data
 */
var TDpost = exports.TDpost = function TDpost(data, client) {
    var opts = client;
    var request = client.request;
    var classPath = request.classPath;
    var hashCode = request.hashCode;
    var msgId = request.msgId;
    var handler = callbackList[classPath];
    //唯一生效队列判断
    if (handler && handler != hashCode + '_' + msgId) {
        return;
    };
    opts.response = {
        type: 'worker',
        data: data
    };
    postMessage(opts);
};

/***/ })
/******/ ]);
});
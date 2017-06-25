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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = exports.Circle = function () {
    function Circle(ctx) {
        _classCallCheck(this, Circle);

        this.context = ctx;
        this.radius = 10;
    }

    _createClass(Circle, [{
        key: "setContext",
        value: function setContext(ctx) {
            this.context = ctx;
        }
    }, {
        key: "draw",
        value: function draw(pixels, drawOptions, margin) {
            for (var i = 0, len = pixels.length; i < len; i++) {
                var pixel = pixels[i];
                var size = typeof drawOptions.size === 'function' ? drawOptions.size(pixel.count) : drawOptions.size;
                var lineWidth = typeof drawOptions.lineWidth === "function" ? drawOptions.lineWidth(pixel.count) : drawOptions.lineWidth;
                var fillStyle = typeof drawOptions.fillStyle === "function" ? drawOptions.fillStyle(pixel.count) : drawOptions.fillStyle;
                var strokeStyle = typeof drawOptions.strokeStyle === "function" ? drawOptions.strokeStyle(pixel.count) : drawOptions.strokeStyle;
                this.drawCircle(pixel.x + margin, pixel.y + margin, size, fillStyle, lineWidth, strokeStyle);
            }
        }
    }, {
        key: "drawCircle",
        value: function drawCircle(x, y, radius, color, lineWidth, strokeStyle) {
            var ctx = this.context;
            radius = radius || 10;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
            ctx.fill();
            if (lineWidth) {
                ctx.lineWidth = lineWidth;
                if (strokeStyle) {
                    ctx.strokeStyle = strokeStyle;
                }
                ctx.stroke();
            }
        }
    }]);

    return Circle;
}();

/***/ }),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
    apiPath: 'http://localhost:3000',
    workerPath: 'http://localhost:3000/dist/worker.js'
};

if (typeof windows !== 'undefined' && window.TD && window.TD.config) {
    Object.assign(config, window.TD);
}

module.exports = config;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseClass2 = __webpack_require__(16);

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasOverlay = exports.CanvasOverlay = function (_BaseClass) {
    _inherits(CanvasOverlay, _BaseClass);

    function CanvasOverlay() {
        _classCallCheck(this, CanvasOverlay);

        var _this = _possibleConstructorReturn(this, (CanvasOverlay.__proto__ || Object.getPrototypeOf(CanvasOverlay)).call(this));

        _this.margin = 0; //画布margin距离px
        _this.ctx = null; //canvas对象
        _this.eventType = 'moveend';
        return _this;
    }

    _createClass(CanvasOverlay, [{
        key: 'initialize',
        value: function initialize(map) {
            //debugger
            var me = this;
            this.map = map;
            this.container = document.createElement('canvas');
            this.ctx = this.container.getContext('2d');
            this.container.style.cssText = 'position:absolute;left:0;top:0;__background:#F00';
            map.getPanes().labelPane.appendChild(this.container);
            var size = map.getSize();
            this.container.width = size.width + me.margin * 2;
            this.container.height = size.height + me.margin * 2;
            map.addEventListener('resize', function (event) {
                console.log(me.hashCode, event.type);
                me.setCanvasSize();
                me._draw(me, event);
            });

            map.addEventListener("load", function (e) {
                //debugger
                me._draw(me, e);
            });
            map.addEventListener("moveend", function (e) {
                console.log(me.hashCode, e.type);
                me._draw(me, e);
                me.eventType = e.type;
            });
            map.addEventListener("zoomstart", function (e) {
                me.clearCanvas();
            });
            map.addEventListener("zoomend", function (e) {
                me._draw(me, e);
            });
            map.addEventListener("moving", function (e) {
                me.eventType = e.type;
            });

            this.setDrawElement();
            this._overlayParentZIndex();
            //setTimeout(this.resize, this);
            return this.container;
        }
    }, {
        key: 'draw',
        value: function draw() {}
    }, {
        key: '_draw',
        value: function _draw(me, event) {
            var me = this || me;
            this.eventType = event.type;
            me.resize();
            if (!me.keysss) {
                //me.canvasResize();
            }
            me.keysss = true;
        }
    }, {
        key: 'resize',
        value: function resize() {}
    }, {
        key: 'setDrawElement',
        value: function setDrawElement() {}
    }, {
        key: 'canvasResize',
        value: function canvasResize(me) {
            //console.log('canvasResize',new Date().getTime())
            var me = this || me;
            var map = this.map;
            var container = this.container;
            var point = map.getCenter();
            var size = map.getSize();
            ///
            var pixel = map.pointToOverlayPixel(point);
            container.style.left = pixel.x - size.width / 2 - me.margin + 'px';
            container.style.top = pixel.y - size.height / 2 - me.margin + 'px';
        }
    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            var size = this.map.getSize();
            this.getContext().clearRect(0, 0, size.width, size.height); //调整画布
        }
    }, {
        key: 'setCanvasSize',
        value: function setCanvasSize() {
            var size = this.map.getSize();
            this.container.width = size.width + this.margin * 2;
            this.container.height = size.height + this.margin * 2;
        }
    }, {
        key: 'getContext',
        value: function getContext() {
            return this.ctx;
        }
    }, {
        key: '_overlayParentZIndex',
        value: function _overlayParentZIndex() {
            this.container.parentNode.style.zIndex = 200;
        }
        /**
         * 设置overlay z-index
         */

    }, {
        key: 'setZIndex',
        value: function setZIndex(zIndex) {
            this.container.style.zIndex = zIndex;
        }
    }]);

    return CanvasOverlay;
}(_BaseClass3.default);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DotOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Circle = __webpack_require__(2);

var _canvasOverlay = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * 点的绘制
 */
var DotOverlay = exports.DotOverlay = function (_CanvasOverlay) {
    _inherits(DotOverlay, _CanvasOverlay);

    function DotOverlay(points, opts) {
        _classCallCheck(this, DotOverlay);

        var _this = _possibleConstructorReturn(this, (DotOverlay.__proto__ || Object.getPrototypeOf(DotOverlay)).call(this));

        _this.points = points;
        _this.drawOptions = {
            fillStyle: null, // 填充颜色
            lineWidth: 0, // 描边宽度
            shadowColor: null, // 投影颜色
            shadowBlur: 0, // 投影模糊级数
            globalCompositeOperation: null, // 颜色叠加方式
            size: 4, // 半径
            draw: _Circle.Circle //绘画对象
        };
        _this.drawElement = null;
        _this.map = null;
        _this.setDrawOptions(opts);
        return _this;
    }

    _createClass(DotOverlay, [{
        key: 'resize',
        value: function resize() {
            this.setPoints();
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            var me = this;
            this.points = points || this.points;
            if (!this.drawElement || !this.points) {
                return;
            }
            var pixels = [];
            this.postMessage('HeatOverlay.pointsToPixels', this.points, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                var size = me.map.getSize();
                me.getContext().clearRect(0, 0, size.width, size.height); //调整画布
                me.canvasResize(me);

                me._setCtx();

                me.drawElement.draw(pixels, me.drawOptions, me.margin, me.map);
            });
        }
    }, {
        key: 'setDrawOptions',
        value: function setDrawOptions(opts) {
            for (var i in opts) {
                this.drawOptions[i] = opts[i];
            }
        }
    }, {
        key: '_setCtx',
        value: function _setCtx() {
            if (this.drawOptions.shadowBlur) {
                this.ctx.shadowBlur = this.drawOptions.shadowBlur;
            }
            if (this.drawOptions.shadowColor) {
                this.ctx.shadowColor = this.drawOptions.shadowColor;
            }
            if (this.drawOptions.globalCompositeOperation) {
                this.ctx.globalCompositeOperation = this.drawOptions.globalCompositeOperation;
            }
            if (this.drawOptions.lineWidth) {
                this.ctx.lineWidth = this.drawOptions.lineWidth;
            }
        }
    }, {
        key: 'setDrawElement',
        value: function setDrawElement() {
            this.drawElement = new this.drawOptions.draw(this.ctx);
        }
    }, {
        key: 'setDraw',
        value: function setDraw(cir) {
            this.drawElement = new cir(this.ctx);
        }
    }]);

    return DotOverlay;
}(_canvasOverlay.CanvasOverlay);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DotTileOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Circle = __webpack_require__(2);

var _TileBaseOverlay2 = __webpack_require__(17);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * 点的绘制
 */
var DotTileOverlay = exports.DotTileOverlay = function (_TileBaseOverlay) {
    _inherits(DotTileOverlay, _TileBaseOverlay);

    function DotTileOverlay(points, opts) {
        _classCallCheck(this, DotTileOverlay);

        var _this = _possibleConstructorReturn(this, (DotTileOverlay.__proto__ || Object.getPrototypeOf(DotTileOverlay)).call(this));

        _this.points = points;
        _this.drawOptions = {
            fillStyle: null, // 填充颜色
            lineWidth: 0, // 描边宽度
            shadowColor: null, // 投影颜色
            shadowBlur: 0, // 投影模糊级数
            globalCompositeOperation: null, // 颜色叠加方式
            size: 4, // 半径
            draw: _Circle.Circle //绘画对象
        };
        _this.drawElement = null;
        _this.map = null;
        _this.setDrawOptions(opts);
        return _this;
    }

    _createClass(DotTileOverlay, [{
        key: 'drawMap',
        value: function drawMap(pixels) {
            //debugger
            var size = this.map.getSize();
            this.getContext().clearRect(0, 0, size.width, size.height); //调整画布
            this.canvasResize(this);
            this._setCtx();
            this.drawElement.draw(pixels, this.drawOptions, this.margin, this.map);
        }
    }, {
        key: 'setDrawOptions',
        value: function setDrawOptions(opts) {
            for (var i in opts) {
                this.drawOptions[i] = opts[i];
            }
        }
    }, {
        key: '_setCtx',
        value: function _setCtx() {
            if (this.drawOptions.shadowBlur) {
                this.ctx.shadowBlur = this.drawOptions.shadowBlur;
            }
            if (this.drawOptions.shadowColor) {
                this.ctx.shadowColor = this.drawOptions.shadowColor;
            }
            if (this.drawOptions.globalCompositeOperation) {
                this.ctx.globalCompositeOperation = this.drawOptions.globalCompositeOperation;
            }
            if (this.drawOptions.lineWidth) {
                this.ctx.lineWidth = this.drawOptions.lineWidth;
            }
        }
    }, {
        key: 'setDrawElement',
        value: function setDrawElement() {
            this.drawElement = new this.drawOptions.draw(this.ctx);
        }
    }, {
        key: 'setDraw',
        value: function setDraw(cir) {
            this.drawElement = new cir(this.ctx);
        }
    }]);

    return DotTileOverlay;
}(_TileBaseOverlay2.TileBaseOverlay);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toQueryPair = toQueryPair;
exports.toQueryString = toQueryString;
exports.ajax = ajax;

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable */

function toQueryPair(key, value) {
  return encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value));
}
/**
 * 参数对象进行URL字符串转换
 * @param {Object} obj url data 对象
 * @returns {string} 转换后的字符串
 */
function toQueryString(obj) {
  var result = [];
  for (var key in obj) {
    result.push(toQueryPair(key, obj[key]));
  }
  return result.join('&');
}
/**
 *
 *
 * @param option
 * @returns {XMLHttpRequest|*}
 */
function ajax(option) {
  //debugger
  var httpRequest,
      httpSuccess,
      timeout,
      isTimeout = false,
      isComplete = false,
      url;

  url = _config2.default.apiPath + option.url;

  //time 后期封装 解决非正常频繁请求问题 优化网络
  option = {
    url: url,
    method: (option.type || "GET").toUpperCase(),
    data: option.data || null,
    arguments: option.arguments || null,
    success: option.success || function () {},
    error: option.error || function () {},
    complete: option.complete || function () {},
    isAsync: option.isAsync || true,
    timeout: option.timeout || 500000000,
    contentType: option.contentType,
    dataType: option.dataType || "json"
  };

  // url += "?time=" + (new Date()).valueOf();

  if ((option.method == "GET" || option.method == "DELETE") && option.data && _typeof(option.data) === "object") {
    option.data = toQueryString(option.data);
  }

  //检查ajax请求
  httpSuccess = function httpSuccess(r) {
    try {
      return !r.status && location.protocol === "file:" || r.status >= 200 && r.status < 300 || r.status === 304 || navigator.userAgent.indexOf("Safari") > -1 && typeof r.status === "undefined";
    } catch (e) {}
    return false;
  };
  timeout = option.timeout;

  httpRequest = new window.XMLHttpRequest();

  /**
   * @ignore
   */
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      isComplete = true;
      if (!isTimeout) {
        var o = {};
        o.responseText = httpRequest.responseText;
        o.responseXML = httpRequest.responseXML;
        o.data = option.data;
        o.status = httpRequest.status;
        o.uri = option.url;
        o.arguments = option.arguments;
        if (option.dataType === 'json') {
          try {
            o.responseJSON = JSON.parse(httpRequest.responseText);
          } catch (e) {}
        }
        if (httpSuccess(httpRequest)) {
          var data = o.responseJSON;
          option.success(data);
        } else {
          option.error(o);
        }
        option.complete(o);
      }
      //删除对象,防止内存溢出
      httpRequest = null;
    }
  };

  if (option.method === "GET") {
    if (option.data) {
      option.url += (option.url.indexOf("?") > -1 ? "&" : "?") + option.data;
      option.data = null;
    }
  }

  if (option.method === "GET") {
    httpRequest.open("GET", option.url, option.isAsync);
    httpRequest.setRequestHeader("Content-Type", option.contentType || "text/plain;charset=UTF-8");
    httpRequest.send();
  } else if (option.method === "POST" || option.method === "PATCH") {
    httpRequest.open(option.method, option.url, option.isAsync);
    httpRequest.setRequestHeader("Content-Type", option.contentType || "application/json;charset=utf-8");
    httpRequest.send(JSON.stringify(option.data));
  } else {
    httpRequest.open(option.method, option.url, option.isAsync);
    httpRequest.send();
  }
  return httpRequest;
}
/*eslint-enable */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.workerMrg = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = {};

var WorkerMrg = function () {
    function WorkerMrg() {
        _classCallCheck(this, WorkerMrg);

        var bb = new Blob(["importScripts('" + _config2.default.workerPath + "');"]);
        this.worker = new Worker(window.URL.createObjectURL(bb));
        this.worker.addEventListener('message', this.message);
        this.worker.onerror = function (e) {
            console.log('worker.onerror', e);
        };
    }

    _createClass(WorkerMrg, [{
        key: "message",
        value: function message(e) {
            var data = e.data;
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            //console.log(TD.workerMrg.instances[classPath], hashCode+'_'+msgId, TD.workerMrg.instances[classPath] && TD.workerMrg.instances[classPath] == hashCode+'_'+msgId)
            if (instances[classPath + '_' + hashCode] && instances[classPath + '_' + hashCode] == hashCode + '_' + msgId) {
                instances[hashCode + '_' + msgId](data.response.data);
            } else {
                instances[hashCode + '_' + msgId] = null;
            }
        }
        /**
         * 发送消息到worker
         * @param {JSON} data 发送的数据
         * @param {Function} callback 返回的回调
         */

    }, {
        key: "postMessage",
        value: function postMessage(data, callback) {
            //console.log('callback', callback)
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            instances[hashCode + '_' + msgId] = callback;
            //worker队列唯一性判断，
            instances[classPath + '_' + hashCode] = hashCode + '_' + msgId;
            this.worker.postMessage(data);
        }
    }]);

    return WorkerMrg;
}();

var workerMrg = exports.workerMrg = new WorkerMrg();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DotOverlay = __webpack_require__(10);

var _DotTileOverlay = __webpack_require__(11);

var _Circle = __webpack_require__(2);

module.exports = {
    DotOverlay: _DotOverlay.DotOverlay,
    DotTileOverlay: _DotTileOverlay.DotTileOverlay,
    Circle: _Circle.Circle
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _workerMrg = __webpack_require__(14);

var baseClassCounter = 0;
var tdmap_instances = {};
var _count = 0; //消息ID key
/**
 * 父类继承
 * @param {Object} parentClass
 * @param {Object} className
 */
Function.prototype.inherits = function (parentClass, className) {
    var i,
        p,
        op = this.prototype,
        C = function C() {};
    C.prototype = parentClass.prototype;
    p = this.prototype = new C();
    if (typeof className == "string") {
        p.className = className;
    }
    for (i in op) {
        p[i] = op[i];
    }
    this.prototype.constructor = op.constructor;
    op = C = null;
    return p;
};
var Instance = function Instance(hashCode) {
    return tdmap_instances[hashCode];
};

/**
 * TD框架的基类
 * @namespace
 * @name BaseClass
 */
var BaseClass = function BaseClass(hc) {
    tdmap_instances[this.hashCode = hc || BaseClass.guid()] = this;
};

/** @ignore */
BaseClass.guid = function () {
    return "td_" + (baseClassCounter++).toString(36);
};

/**
 * 释放对象所持有的资源。
 * 主要是自定义事件。
 * 好像没有将_listeners中绑定的事件剔除掉..
 */
BaseClass.prototype.dispose = function () {
    if (this.hashCode) {
        tdmap_instances[this.hashCode] = null;
    }

    for (var i in this) {
        if (typeof this[i] != "function") {
            this[i] = null;
        }
    }
};

/**
 * 返回对象的hashCode，如果没有的话，添加一个新的hashCode并将其返回
 * @return {String} 对象的hashCode
 */
BaseClass.prototype.getHashCode = function () {
    if (!this.hashCode) {
        tdmap_instances[this.hashCode = BaseClass.guid()] = this;
    }
    return this.hashCode;
};

/**
 * 从tdmap_instances数组中将对象的引用删除掉。
 * 删除之后就无法使用I()函数获取对象了。
 */
BaseClass.prototype.decontrol = function () {
    tdmap_instances[this.hashCode] = null;
};

var baidu = BMap || {};
BaseClass.inherits(baidu.Overlay, "BaseClass");

/**
 * push消息，
 * @param {string} workerClassPath worker请求的path
 * @param {json} data提交的json数据
 * @param {Function} callback
 */
BaseClass.prototype.postMessage = function (workerClassPath, data, callback) {
    var map = this.map;
    var center = map.getCenter();
    var size = map.getSize();
    var msgId = this.setMsgId();
    var request = {
        'type': 'web',
        'data': data,
        'hashCode': this.hashCode,
        'className': this.className,
        'classPath': workerClassPath,
        'msgId': msgId,
        'map': {
            'center': {
                lng: center.lng,
                lat: center.lat
            },
            'size': {
                width: size.width,
                height: size.height
            },
            'zoom': map.getZoom(),
            'margin': this.margin
        }
    };
    _workerMrg.workerMrg.postMessage({
        request: request
    }, callback);
};
BaseClass.prototype.getMsgId = function () {
    return "msgId_" + _count.toString(36);
};
BaseClass.prototype.setMsgId = function () {
    _count++;
    return "msgId_" + _count.toString(36);
};

module.exports = BaseClass;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TileBaseOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvasOverlay = __webpack_require__(9);

var _util = __webpack_require__(0);

var _index = __webpack_require__(7);

var _Point = __webpack_require__(1);

var _ajax = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileBaseOverlay = exports.TileBaseOverlay = function (_CanvasOverlay) {
    _inherits(TileBaseOverlay, _CanvasOverlay);

    function TileBaseOverlay() {
        _classCallCheck(this, TileBaseOverlay);

        var _this = _possibleConstructorReturn(this, (TileBaseOverlay.__proto__ || Object.getPrototypeOf(TileBaseOverlay)).call(this));

        _this._cacheData = [];
        // this.resize();
        return _this;
    }
    /**
     * 查找屏幕可展示哪些围栏
     */


    _createClass(TileBaseOverlay, [{
        key: 'getScreenShowTilesData',
        value: function getScreenShowTilesData() {
            var _this2 = this;

            var zoom = this.map.getZoom();
            var kb = this.map.KB;
            var arr = [],
                requestTiles = [];

            var _loop = function _loop(j) {
                var temp = kb[j];
                var tile = _this2._cacheData.find(function (item) {
                    return item.x == temp.x && item.y == temp.y;
                });
                if (tile) {
                    arr.push(tile);
                } else {
                    requestTiles.push({
                        x: temp.x,
                        y: temp.y,
                        zoom: zoom
                    });
                }
            };

            for (var j = 0; j < kb.length; j++) {
                _loop(j);
            }

            return {
                cacheTiles: arr,
                requestTiles: requestTiles
            };
        }
    }, {
        key: 'getScreenShowTiles',
        value: function getScreenShowTiles() {
            return this.map.KB;
        }
    }, {
        key: 'setDrawData',
        value: function setDrawData(cacheData) {
            var me = this;
            var data = [],
                //新数据
            data2 = []; //历史数据
            var zo = me.map.getZoom();
            cacheData.forEach(function (item) {
                if (item.pixelData.length == 0 || zo != item.zoom) {
                    data.push(item);
                } else {
                    data2.push(item);
                }
            });

            this.postMessage('HeatTileOverlay.pointsToPixels', data, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                var center = me.map.getCenter();
                var zoom = me.map.getZoom();
                console.log('zoom', zoom);
                data.forEach(function (item) {
                    item.center.lng = center.lng;
                    item.center.lat = center.lat;
                    item.zoom = zoom;
                    var temp = pixels.find(function (a) {
                        return a.x == item.x && a.y == item.y;
                    });
                    if (temp) {
                        item.pixelData = temp.pixelData;
                    }
                });
                //向量差运算 求出像素坐标

                var projection = me.map.getMapType().getProjection();
                var pixels1 = projection.lngLatToPoint(new _Point.Point(center.lng, center.lat));
                data2.forEach(function (item) {
                    var _center = item.center;
                    var pixels2 = projection.lngLatToPoint(new _Point.Point(_center.lng, _center.lat));
                    item.center.lng = center.lng;
                    item.center.lat = center.lat;
                    console.log(pixels1, pixels2);
                    var differenceX = pixels1.x - pixels2.x;
                    var differenceY = pixels1.y - pixels2.y;
                    item.pixelData.forEach(function (pixel) {
                        pixel.x = pixel.x - differenceX;
                        pixel.y = pixel.y - differenceY;
                    });
                });
                me._toDraw(data, data2);
            });
        }
    }, {
        key: 'resize',
        value: function resize() {
            //获取需要
            var result = this.getScreenShowTilesData();
            var cacheTiles = result.cacheTiles;
            var me = this;
            if (result.requestTiles.length > 0) {
                (0, _ajax.ajax)({
                    url: "/tdmap/tile",
                    type: "post",
                    data: result.requestTiles,
                    success: function success(data) {
                        //debugger
                        data.data.forEach(function (item) {
                            var temp = me.pushRow(item);
                            cacheTiles.push(temp);
                        });
                        me.setDrawData(cacheTiles);
                    },
                    error: function error() {}
                });
            } else {
                me.setDrawData(result.cacheTiles);
            }
        }
    }, {
        key: '_toDraw',
        value: function _toDraw(d1, d2) {
            var pixels = [];
            d1.forEach(function (item) {
                pixels.push.apply(pixels, item.pixelData);
            });
            d2.forEach(function (item) {
                pixels.push.apply(pixels, item.pixelData);
            });
            //debugger
            this.drawMap(pixels);
        }
    }, {
        key: 'drawMap',
        value: function drawMap(potion) {
            throw '绘画的抽象方法 需要子类去实现';
        }
    }, {
        key: '_push',
        value: function _push(item) {
            var reulst = {
                x: item.x,
                y: item.y,
                zoom: item.zoom,
                center: {
                    lng: null,
                    lat: null
                },
                data: item.data,
                pixelData: []
            };
            this._cacheData.push(reulst);
            return reulst;
        }
    }, {
        key: 'pushData',
        value: function pushData(data) {
            if ((0, _util.isArray)(data)) {
                this.pushArray(data);
            } else if ((0, _util.isObject)(data)) {
                this.pushRow(data);
            }
        }
    }, {
        key: 'pushArray',
        value: function pushArray(data) {
            var _this3 = this;

            data.forEach(function (item) {
                if (!_this3.isContains(item)) {
                    _this3._push(item);
                }
            });
        }
    }, {
        key: 'pushRow',
        value: function pushRow(item) {
            if (!this.isContains(item)) {
                return this._push(item);
            }
        }
    }, {
        key: 'isContains',
        value: function isContains(item) {
            var index = this._cacheData.findIndex(function (it) {
                return it.x == item.x && it.y == item.y;
            });
            return index > -1;
        }
    }]);

    return TileBaseOverlay;
}(_canvasOverlay.CanvasOverlay);

/***/ })
/******/ ]);
});
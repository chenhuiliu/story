/*eslint-disable */

/**
 * Created by lu on 2016/9/27.
 */
import config from '../../config';
import {
    toQueryString
} from './lang';

import {
    Cache
} from './cache';
var ajaxCache = new Cache(1000);
/**
 *
 *
 * @param option
 * @returns {XMLHttpRequest|*}
 */
export function ajax(option) {
    //debugger
    var httpRequest,
        httpSuccess,
        timeout,
        isTimeout = false,
        isComplete = false,
        url = config.apiPath + option.url;

    //time 后期封装 解决非正常频繁请求问题 优化网络
    option = {
        url: url,
        method: (option.type || "GET").toUpperCase(),
        data: option.data || null,
        arguments: option.arguments || null,
        success: option.success || function () {},
        error: option.error || function () {},
        complete: option.complete || function () {},
        loading: option.loading || false, //loading 动画遮罩层
        isAsync: option.isAsync || true,
        timeout: option.timeout || 500000000,
        contentType: option.contentType,
        dataType: option.dataType || "json",
        cache: option.cache || false, //update 更新换成 true 获取缓存
    };


    if ((option.method == "GET" || option.method == "DELETE") && option.data && typeof option.data === "object") {
        option.data = toQueryString(option.data);
    }

    //检查ajax请求
    httpSuccess = function (r) {
        try {
            return (!r.status && location.protocol === "file:") || (r.status >= 200 && r.status < 300) || (r.status === 304) || (navigator.userAgent.indexOf("Safari") > -1 && typeof r.status === "undefined");
        } catch (e) {

        }
        return false;
    };
    timeout = option.timeout;

    httpRequest = new window.XMLHttpRequest();
    httpRequest.__cache = option.cache;
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
                    if (TDM.ui.loading.show) {
                        TDM.ui.loading.show = false;
                    }
                    // debugger
                    var data = o.responseJSON;
                    //加入cahce
                    if (this.__cache == true || option.cache.toString() == 'true' || option.cache.toString() == 'update') {
                        //  debugger
                        ajaxCache.put(this.responseURL, TDM.util.jsonDataCopy(data));
                    }
                    option.success(data);


                } else {

                    option.error(o);
                }
                option.complete(o);
            }
            //删除对象,防止内存溢出
            httpRequest.__cache = null;
            httpRequest = null;
        }
    };

    if (option.loading && !TDM.ui.loading.show) {
        TDM.ui.loading.show = true;
    }
    // debugger

    if (option.method === "GET") {
        if (option.data) {
            option.url += (option.url.indexOf("?") > -1 ? "&" : "?") + option.data;
            option.data = null;
        }
    }
    /*
     * 查缓存数据返回
     */
    if (option.cache == true || option.cache.toString() == 'true') {
        var cacheData = ajaxCache.get(option.url);
        if (cacheData) {
            if (TDM.ui.loading.show) {
                TDM.ui.loading.show = false;
            }
            option.success(cacheData);

            return;
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
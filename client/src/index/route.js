import {
    hide,
    showBlock,
    showTable,
    getUrlParam
} from '../util/lang';

export function jsRoute() {
    var that = this;
    var prefix = null,
        touchDom, pageDom = [],
        modules = {},
        moduleObj = {},
        titles = {},
        count = 0,
        currIndex = 1,
        history = [],
        tempDiv;
    var tempTtranslatex = 0;
    var pageHeight = 0,
        pageWidth = 0;
    var loadingDom = null,
        subscriptionSataus = {};
    var isIos = null;
    var routerPaths = [];

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        isIos = true;
    } else {
        isIos = false;
    }

    function init() {

        document.querySelector(".scrollerContent").style.width = pageWidth + "px";
        touchDom = document.getElementById("routeScroller");
        prefix = testPrefix();
        setTimeout(function () {
            historyEvent();
        }, 2000);

    }


    function testProps(props) {
        for (var i in props) {
            if (touchDom.style[props[i]] !== undefined) {
                return true;
            }
        }
        return false;
    }

    function testPrefix() {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
        for (var p in prefixes) {
            if (testProps([prefixes[p] + 'Transform'])) {
                return '-' + prefixes[p].toLowerCase() + "-";
            }
        }
        return '';
    }

    function scroll(star, end) {
        if (isIos) {
            scrollPage(star, end);
        } else {
            showPage(star, end);
        }
    }

    function showPage(star, end) {
        var lg = pageDom.length;
        for (var i = 0; i < lg; i++) {
            if (i === end - 1) {
                showBlock(pageDom[i]);
            } else {
                hide(pageDom[i]);
            }
        }
    }

    function scrollPage(star, end) {
        var lg = pageDom.length;
        for (var i = 0; i < lg; i++) {
            if (i === star - 1 || i === end - 1) {
                showBlock(pageDom[i]);
            } else {
                hide(pageDom[i]);
            }
        }
        var temp = 0;
        if (star < end) {
            temp = -pageWidth;
            if (temp === tempTtranslatex) {
                //清零
                touchDom.setAttribute("style", prefix + "transform:translate3d(0px,0px,0);" + prefix + "transition:all 0s ease-out;");

            } else {
                tempTtranslatex = temp;
            }

        } else {
            temp = 0;
            if (temp === tempTtranslatex) {
                touchDom.setAttribute("style", prefix + "transform:translate3d(" + (-pageWidth) + "px,0px,0);" + prefix + "transition:all 0s ease-out;");

            } else {
                tempTtranslatex = 0;
            }

        }

        setTimeout(function () {
            touchDom.setAttribute("style", prefix + "transform:translate3d(" + tempTtranslatex + "px,0px,0);" + prefix + "transition: all 350ms cubic-bezier(0, 0, 0.45, 1);");
        }, 200);

    }

    function bindTitle(val) {
        document.title = val;
    }

    /**
     * 返回查询的path
     */
    function findPathCallBack(name) {
        return routerPaths.find(function (item) {
            return item.path == name;
        });

    }

    function showModule(name, requestCallback, isRecord) {
        if (modules[name]) {
            scroll(currIndex, modules[name]);
            currIndex = modules[name];
            requestCallback && requestCallback(moduleObj[name]);
            setTimeout(function () {
                bindTitle(titles[name]);
            }, 300);
        } else {
            pageloading(true);
            tempDiv = document.createElement("div");
            tempDiv.classList.add("page");
            tempDiv.style.minHeight = pageHeight + "px";
            var component = findPathCallBack(name).component;
            component(function (module) {
                moduleObj[name] = module;
                tempDiv.innerHTML = module.html;
                module.load();
                requestCallback(moduleObj[name]);

            })
            count++;
            modules[name] = count;
            touchDom.appendChild(tempDiv);
            pageDom.push(tempDiv);
            scroll(currIndex, count);
            currIndex = count;
        }
        if (isRecord !== false) {
            history.push(name);
        }

        window.history.pushState(name, String() + modules[name]);
    }

    function historyEvent() {
        window.addEventListener("popstate", function () {
            that.back(window.history.state);
        }, false);
    }



    function pageloading(isShow) {
        if (loadingDom === null) {
            loadingDom = document.getElementById("btn_loading");
        }

        if (isShow) {
            showTable(loadingDom);
        } else {
            hide(loadingDom);
        }
    }

    function bind(obj) {
        routerPaths = obj;
        pageWidth = window.innerWidth;
        pageHeight = window.innerHeight;
        init();
        var params = getUrlParam()["route"];
        if (params) {
            showModule(params, function () {}, function () {});
        }
    }

    return {
        showModule: showModule,
        back: function (name) {
            if (subscriptionSataus[name]) {
                subscriptionSataus[name]();
            } else {
                if (currIndex === 1) {
                    //window.history.back();
                    window.location.href = "index.html";
                } else {
                    showModule(history[history.length - 2], function () {}, false);
                    history.splice(history.length - 1, 1);
                }
            }
        },
        pageloading: pageloading,
        bind: bind
    };
}
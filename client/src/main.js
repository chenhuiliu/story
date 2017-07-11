import './css/main.css';
import * as util from './util/index';
import {
    jsRoute
} from './index/route';
import alertInfo from './index/alertInfo.js';
import confirmInfo from './index/confirmInfo.js';
import loading from './index/loading.js';
// debugger
// alert()
window.TDM = {
    util: util,
    ui: {
        alert: alertInfo,
        confirm: confirmInfo,
        loading: loading
    },
    route: new jsRoute()
}


// alert()
let path = [{
        path: 'editLike',
        component: function (resolve) {
            require(['./component/editorlike/main.js'], resolve);
        }
    },
    {
        path: 'foodies',
        component: function (resolve) {
            require(['./component/foodies/main.js'], resolve);
        }
    },
    {
        path: 'bookshelf',
        component: function (resolve) {
            require(['./component/bookshelf/main.js'], resolve);
        }
    },
    {
        path: 'jingpin',
        component: function (resolve) {
            require(['./component/jingpin/main.js'], resolve);
        }
    },
    {
        path: 'zhuanti',
        component: function (resolve) {
            require(['./component/zhuanti/main.js'], resolve);
        }
    },
    {
        path: 'search',
        component: function (resolve) {
            require(['./component/search/main.js'], resolve);
        }
    },
]

window.addEventListener("load", function () {

    TDM.route.bind(path);

    //FastClick.attach(document.body);
});
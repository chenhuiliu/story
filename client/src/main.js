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
]

window.addEventListener("load", function () {

    TDM.route.bind(path);

    //FastClick.attach(document.body);
});
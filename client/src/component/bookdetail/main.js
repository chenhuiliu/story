import './index.css';
import { addEvent, showBlock, hide } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    modules: ['bookshelf', 'jingpin', 'zhuanti', 'search'],
    load: function () {
        TDM.ui.loading.hide();
        let me = this;
        addEvent(document.getElementById('btn-group'), 'click', 'btn', function (event) {
            let isSearchFrom = document.getElementById('commonModules-render-bookshelf').style.display;
            require(['./../reading/main'], function (model) {
                
                for (var i = 0; i < me.modules.length; i++) {
                    let currentContainer = document.getElementById('commonModules-render-' + me.modules[i]);
                    if (currentContainer.style.display == 'block') {
                        currentContainer.innerHTML = model.html;
                    }
                }
                model.load();
                hide(document.getElementsByClassName('system-footer')[1]);
            })
        })
    }
}
import './index.css';
import { addEvent, showBlock, hide } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide();
        addEvent(document.getElementById('btn-group'), 'click', 'btn', function (event){
            let isSearchFrom = document.getElementById('commonModules-render-bookshelf').style.display;
            require(['./../reading/main'], function (model){
                if(isSearchFrom == 'none'){
                    document.getElementById('commonModules-render-search').innerHTML = model.html;
                } else {
                    document.getElementById('commonModules-render-bookshelf').innerHTML = model.html;
                }
                model.load();
                hide(document.getElementsByClassName('system-footer')[1]);
            })
        })
    }
}
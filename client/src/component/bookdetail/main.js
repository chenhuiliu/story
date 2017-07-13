import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide();
        addEvent(document.getElementById('btn-group'), 'click', 'btn', function (event){
            require(['./../reading/main'], function (model){
                document.getElementById('commonModules-render-bookshelf').innerHTML = model.html;
                model.load();
                document.getElementsByClassName('system-footer')[1].style.display = 'none';
            })
        })
    }
}
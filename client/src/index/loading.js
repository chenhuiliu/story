import {
    hide,
    showTable,
} from '../util/lang';
export default {
    hide: function () {
        hide(document.getElementById("btn_loading"));
    },
    show: function () {
        showTable(document.getElementById("btn_loading"));
    }
}
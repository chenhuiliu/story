import './index.css';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide();
    }
}
import './css.css';
module.exports = {
    html: require("./html.html"),
    load: function () {
        TDM.ui.loading.hide();
    }
}
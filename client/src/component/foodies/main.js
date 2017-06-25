import './css.css';
module.exports = {
    html: require("./html.html"),
    load: function () {
        TDM.ui.loading.hide();
        document.getElementById('foodies-item-click').onclick = function () {
            TDM.route.showModule('editLike', function () {});
            
        }
    }
}
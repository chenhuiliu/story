import './index.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.ajax();
    },
    ajax() {
        var me = this;
        TDM.util.ajax({
            url: '/hotSearch.json',
            data: {

            },
            type: "get",
            success: function (result) {
                var hotSearch = [];
                var data = result.list;
                data.forEach((item)=>{
                    hotSearch.push('<div class="hot-item">'+item.bookName+'</div>');
                });
                document.getElementById('searchModules-hot-searchs').innerHTML= hotSearch.join('');
            }
        })
    }
}
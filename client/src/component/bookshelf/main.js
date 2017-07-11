import './index.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.ajax();
    },
    ajax() {
        TDM.util.ajax({
            url: '/bookshelf.json',
            data: {

            },
            type: "get",
            success: function (result) {
                var html = [];
                var data = result.list;
                var state = {
                    '0':'已读',
                    '1':'未读'
                }
                data.forEach((item)=>{
                    html.push('<div class="item"><div class="item-content">');
                    html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt="">');
                    html.push('<span class="reading-state">'+state[String(item.readingState)]+'</span></div>');
                    html.push('<div class="item-title">'+item.bookName+'</div></div>');
                });
                document.getElementById('clientResourceModules-target').innerHTML= html.join('');
            }
        })
    }
}
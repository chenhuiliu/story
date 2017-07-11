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
            url: '/jingpin.json',
            data: {

            },
            type: "get",
            success: function (result) {
                var html = [];
                var data = result.list;
                data.forEach((item)=>{
                    html.push('<div class="book-item"><div class="img-warrper">');
                    html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    html.push('<div class="item-right"><h3>'+item.bookName+'</h3><p>'+item.authorType+'</p>');
                    html.push('<div class="ellipsis">'+item.description+'</div></div></div>');
                })
                document.getElementById('competitiveProductsModules-tabContent').innerHTML= html.join('');
            }
        })
    }
}
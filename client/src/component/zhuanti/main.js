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
            url: '/zhuanti.json',
            data: {

            },
            type: "get",
            success: function (result) {
                var html = [];
                for (var k in result) {
                    html.push('<div class="special-item"><div class="item-top-warrper"><h2>'+result[k][0]['thematicType']+'</h2>');
                    html.push('<span class="more-link">更多<i class="icon iconfont icon-back"></i></span></div>');
                    for(var i=0;i<3;i++){
                        html.push('<div class="book-item"><div class="img-warrper">');
                        html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                        html.push('<p class="ellipsis">'+result[k][i]['bookName']+'</p></div>');
                    }
                    html.push('</div>');
                }
                document.getElementById('specialModules-content').innerHTML= html.join('');
            }
        })
    }
}
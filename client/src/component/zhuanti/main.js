import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        let me = this;
        TDM.ui.loading.hide()
        me.ajax();
        me.getMoreBooks();
        me.getBookDetail();
    },
    getBookDetail() {
        addEvent(document.getElementById('specialModules-content'), 'click', 'book-item', function (dom) {
            require(['./../bookdetail/main'], function (model) {
                let sepcialContainer = document.getElementById('commonModules-render-zhuanti');
                sepcialContainer.innerHTML = model.html;
                model.load();
            });
        });
    },
    getMoreBooks() {
        addEvent(document.getElementById('specialModules-content'), 'click', 'more-link', function (dom) {
            console.log(dom, '--dom');
            require(['./../more/main'], function (model) {
                let sepcialContainer = document.getElementById('commonModules-render-zhuanti');
                sepcialContainer.innerHTML = model.html;
                model.load();
            });
        });
    },
    ajax() {
        TDM.util.ajax({
            url: '/zhuanti.json',
            data: {

            },
            type: "get",
            success: function (result) {
                let html = [];
                for (let k in result) {
                    html.push('<div class="special-item"><div class="item-top-warrper" id="item-top-warrper"><h2>' + result[k][0]['thematicType'] + '</h2>');
                    html.push('<span class="more-link">更多<i class="icon iconfont icon-back"></i></span></div>');
                    for (let i = 0; i < 3; i++) {
                        html.push('<div class="book-item"><div class="img-warrper">');
                        html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                        html.push('<p class="ellipsis">' + result[k][i]['bookName'] + '</p></div>');
                    }
                    html.push('</div>');
                }
                document.getElementById('specialModules-content').innerHTML = html.join('');
            }
        })
    }
}
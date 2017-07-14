import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.ajax();
        addEvent(document.getElementById('clientResourceModules-target'), 'click', 'item', function (dom) {
            let bookId = dom.getAttribute('data-id');
            TDM.util.ajax({
                url: '/detail.json',
                data: {
                   "id": bookId
                },
                type: "get",
                success: function (result) {
                    console.log(result, '----result---');
                    require(['./../bookdetail/main'], function (model){
                        document.getElementById('commonModules-render-bookshelf').innerHTML = model.html;
                        model.load();
                    })
                }
            })
        });
    },
    getBookDetail(id) {
        TDM.util.ajax({
            url: '/detail.json',
            data: {
                "id": id
            },
            type: "get",
            success: function (result) {
                console.log(result, '----result---');
            }
        })
    },
    ajax() {
        TDM.util.ajax({
            url: '/bookshelf.json',
            data: {

            },
            type: "get",
            success: function (result) {
                let html = [];
                let data = result.list;
                let state = {
                    '0': '已读',
                    '1': '未读'
                }
                data.forEach((item) => {
                    html.push('<div class="item" data-id="' + item.id + '"><div class="item-content">');
                    html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt="">');
                    html.push('<span class="reading-state">' + state[String(item.readingState)] + '</span></div>');
                    html.push('<div class="item-title">' + item.bookName + '</div></div>');
                });
                document.getElementById('clientResourceModules-target').innerHTML = html.join('');
            }
        })
    }
}
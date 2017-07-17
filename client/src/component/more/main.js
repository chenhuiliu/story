import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.ajax();
        addEvent(document.getElementById('moreBooksModules-content'),'click','book-warrper',function(){
            require(['./../bookdetail/main'],function(model){
                document.getElementById('commonModules-render-zhuanti').innerHTML = model.html;
                model.load();
            });
        });
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
                data.forEach((item) => {
                    html.push('<div class="book-warrper"><div class="img-warrper">');
                    html.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    html.push('<div class="book-right"><h3 class="average-height">'+item.bookName+'</h3>');
                    html.push('<p>全职写手</p>');
                    html.push('<div class="ellipsis average-height">记录了一个青年迷茫的大学时代</div></div></div>');
                });
                console.log(html.join(''));
                document.getElementById('moreBooksModules-content').innerHTML = html.join('');
            }
        })
    }
}
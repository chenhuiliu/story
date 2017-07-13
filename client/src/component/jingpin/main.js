import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    types: ['boy', 'girl'],
    load: function () {
        TDM.ui.loading.hide()
        this.ajax(0);
        addEvent(document.getElementById('tab-title-warrper'), 'click', 'tab-title', function (dom) {
            console.log(dom,'---dom---');
            var type = dom.getAttribute('id');
            var types =  ['boy', 'girl'];
            for (var i = 0, l = types.length; i < l; i++) {
                var currentTab = document.getElementById('competitiveProductsModules-' + types[i] + 'Content');
                var currentTabTitle = document.getElementById(types[i]);
                if (type == types[i]) {
                    currentTab.style.display = 'block';
                    currentTabTitle.classList.add('tab-selecetd');
                } else {
                    currentTab.style.display = 'none';
                    currentTabTitle.classList.remove('tab-selecetd');
                }
            }
        })
    },
    ajax(type) {
        TDM.util.ajax({
            url: '/jingpin.json',
            data: {
                "type": type
            },
            type: "get",
            success: function (result) {
                var boyHtml = [];
                var girlHtml = [];
                var boyData = result.boylist;
                var girlData = result.girllist;
                boyData.forEach((item) => {
                    boyHtml.push('<div class="book-item"><div class="img-warrper">');
                    boyHtml.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    boyHtml.push('<div class="item-right"><h3>' + item.bookName + '</h3><p>' + item.authorType + '</p>');
                    boyHtml.push('<div class="ellipsis">' + item.description + '</div></div></div>');
                });
                girlData.forEach((item) => {
                    girlHtml.push('<div class="book-item"><div class="img-warrper">');
                    girlHtml.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    girlHtml.push('<div class="item-right"><h3>' + item.bookName + '</h3><p>' + item.authorType + '</p>');
                    girlHtml.push('<div class="ellipsis">' + item.description + '</div></div></div>');
                });
                document.getElementById('competitiveProductsModules-boyContent').innerHTML = boyHtml.join('');
                document.getElementById('competitiveProductsModules-girlContent').innerHTML = girlHtml.join('');
            }
        })
    }
}
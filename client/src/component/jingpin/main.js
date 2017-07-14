import './index.css';
import { addEvent, showBlock, hide } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.getBoyAjax();
        this.getGirlAjax();

        addEvent(document.getElementById('tab-title-warrper'), 'click', 'tab-title', function (dom) {
            let type = dom.getAttribute('id');
            let types = ['boy', 'girl'];
            for (let i = 0, l = types.length; i < l; i++) {
                let currentTab = document.getElementById('competitiveProductsModules-' + types[i] + 'Content');
                let currentTabTitle = document.getElementById(types[i]);
                if (type == types[i]) {
                    showBlock(currentTab);
                    currentTabTitle.classList.add('tab-selecetd');
                } else {
                    hide(currentTab);
                    currentTabTitle.classList.remove('tab-selecetd');
                }
            }
        });
        document.getElementById('girl').onclick = function () {
            let me = this;
            console.log(me, '-----me');
            //  me.getGirlAjax();
        };
    },
    getGirlAjax() {
        TDM.util.ajax({
            url: '/girlData.json',
            data: {},
            type: 'get',
            success: function (result) {
                let girlData = result.girllist;
                let girlHtml = [];
                girlData.forEach((item) => {
                    girlHtml.push('<div class="book-item"><div class="img-warrper">');
                    girlHtml.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    girlHtml.push('<div class="item-right"><h3>' + item.bookName + '</h3><p>' + item.authorType + '</p>');
                    girlHtml.push('<div class="ellipsis">' + item.description + '</div></div></div>');
                });
                document.getElementById('competitiveProductsModules-girlContent').innerHTML = girlHtml.join('');
            }
        });
    },
    getBoyAjax() {
        TDM.util.ajax({
            url: '/jingpin.json',
            data: {
            },
            type: "get",
            success: function (result) {
                let boyHtml = [];
                let boyData = result.boylist;
                boyData.forEach((item) => {
                    boyHtml.push('<div class="book-item"><div class="img-warrper">');
                    boyHtml.push('<img src="https://qidian.qpic.cn/qdbimg/349573/c_5369131804594101/90" alt=""></div>');
                    boyHtml.push('<div class="item-right"><h3>' + item.bookName + '</h3><p>' + item.authorType + '</p>');
                    boyHtml.push('<div class="ellipsis">' + item.description + '</div></div></div>');
                });
                document.getElementById('competitiveProductsModules-boyContent').innerHTML = boyHtml.join('');
            }
        })
    }
}
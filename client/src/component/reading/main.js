import './index.css';
import { addEvent, showBlock, hide } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        let me = this;
        TDM.ui.loading.hide();
        me.changeBackground();
        hide(document.getElementById('reading-menus'));
        hide(document.getElementById('system-title'));
        me.changeMenu();
        me.changeSmall();
        me.changeLarge();
        me.bindMenu();

    },
    bindMenu() {
        addEvent(document.getElementById('reading-menus'), 'click', 'menu-item', function (dom) {
            let menuName = dom.getAttribute('data-name');
            switch (menuName) {
                case 'catalog':
                    break;
                case 'font':
                    let fontMenu = document.getElementsByClassName('modify-style-box')[0];
                    showBlock(fontMenu);
                    break;
                case 'night':
                    let container = document.getElementsByClassName('commonModules-like')[0];
                    let contentDom = document.getElementsByClassName('content-box')[0];
                    let nightDom = document.getElementById('night');
                    let iconDom = nightDom.getElementsByClassName('icon')[0];
                    let menuDom = nightDom.getElementsByClassName('menu-name')[0];

                    if (menuDom.innerText == '夜晚') {
                        container.style.background = '#50504e';
                        contentDom.style.color = '#FFFFFF';
                        menuDom.innerText = '白天';
                        iconDom.classList.remove('icon-wanshangyueliangye');
                        iconDom.classList.add('icon-baitianqing');
                    } else {
                        container.style.background = '#f1f1f1';
                        contentDom.style.color = '#000';
                        menuDom.innerText = '夜晚';
                        iconDom.classList.remove('icon-baitianqing');
                        iconDom.classList.add('icon-wanshangyueliangye');
                    }
                default: break;
            }
        });
    },
    changeSmall() {
        addEvent(document.getElementById('font-style'), 'click', 'small', function () {
            let paragraphDom = document.getElementById('paragraph-box');
            let styleObject = paragraphDom.currentStyle != null ? paragraphDom.currentStyle : getComputedStyle(paragraphDom, false);
            let currentSizeDom = document.getElementsByClassName('current-size')[0];
            let fontSize = styleObject.fontSize.split('px')[0];
            let newSize = fontSize - 2;
            if (newSize < 12) {
                newSize = 12;
            }
            paragraphDom.style.fontSize = newSize + 'px';
            currentSizeDom.innerText = newSize;
        });
    },
    changeLarge() {
        addEvent(document.getElementById('font-style'), 'click', 'large', function () {
            let paragraphDom = document.getElementById('paragraph-box');
            let styleObject = paragraphDom.currentStyle != null ? paragraphDom.currentStyle : getComputedStyle(paragraphDom, false);
            let currentSizeDom = document.getElementsByClassName('current-size')[0];
            let fontSize = styleObject.fontSize.split('px')[0];
            let newSize = +fontSize + 2;
            if (newSize > 28) {
                newSize = 28;
            }
            paragraphDom.style.fontSize = newSize + 'px';
            currentSizeDom.innerText = newSize;
        });
    },
    changeMenu() {
        document.getElementsByClassName('content-box')[0].onclick = function (event) {
            let readingMenu = document.getElementById('reading-menus');
            let fontMenu = document.getElementsByClassName('modify-style-box')[0];
            let readingMenuStyle = readingMenu.style.display;
            if (readingMenuStyle == 'none') {
                showBlock(readingMenu);
                hide(fontMenu);
            } else {
                hide(readingMenu);
            }
        };
    },
    changeBackground() {
        addEvent(document.getElementById('background-style'), 'click', 'background-color', function (dom) {
            let container = document.getElementsByClassName('commonModules-like')[0];
            let contentDom = document.getElementsByClassName('content-box')[0];
            let color = dom.getAttribute('data-color');
            switch (color) {
                case 'yellow':
                    container.style.background = '#f7f1ae';
                    contentDom.style.color = '#000000';
                    break;
                case 'purple':
                    container.style.background = '#ebdcf1';
                    contentDom.style.color = '#000000';
                    break;
                case 'green':
                    container.style.background = '#dff9e0';
                    contentDom.style.color = '#000000';
                    break;
                case 'black':
                    container.style.background = '#50504e';
                    contentDom.style.color = '#FFFFFF';
                    break;
                default: break;
            }
        });
    }
}
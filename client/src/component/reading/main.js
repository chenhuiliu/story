import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide();
        document.getElementById('reading-menus').style.display = 'none';
        document.getElementById('system-title').style.display = 'none';
        document.getElementsByClassName('content-box')[0].onclick = function (event) {
            let readingMenu = document.getElementById('reading-menus');
            let readingMenuStyle = readingMenu.style.display;
            if (readingMenuStyle == 'none') {
                readingMenu.style.display = 'block';
            } else {
                readingMenu.style.display = 'none';
            }
        };
        addEvent(document.getElementById('reading-menus'), 'click', 'menu-item', function (dom) {
            let menuName = dom.getAttribute('data-name');
            switch (menuName) {
                case 'catalog':
                    break;
                case 'font':
                    document.getElementsByClassName('modify-style-box')[0].style.display = 'block';
                    let smallDom = document.getElementsByClassName('small')[0];
                    let largeDom = document.getElementsByClassName('large')[0];
                    let paragraphDom = document.getElementById('paragraph-box');
                    let styleObject = paragraphDom.currentStyle != null ? paragraphDom.currentStyle : getComputedStyle(paragraphDom, false);
                    let currentSizeDom = document.getElementsByClassName('current-size')[0];

                    smallDom.onclick = function () {
                        let fontSize = styleObject.fontSize.split('px')[0];
                        let newSize = fontSize - 2;
                        if (newSize < 12) {
                            newSize = 12;
                        }
                        paragraphDom.style.fontSize = newSize + 'px';
                        currentSizeDom.innerText = newSize;
                    };

                    largeDom.onclick = function () {
                        let fontSize = styleObject.fontSize.split('px')[0];
                        let newSize = +fontSize + 2;
                        if (newSize > 28) {
                            newSize = 28;
                        }
                        paragraphDom.style.fontSize = newSize + 'px';
                        currentSizeDom.innerText = newSize;
                    };
                    break;
                default: break;
            }
        });
        addEvent(document.getElementById('background-style'), 'click', 'background-color', function (dom) {
            let container = document.getElementsByClassName('commonModules-like')[0];
            let color = dom.getAttribute('data-color');
            switch (color) {
                case 'yellow':
                    container.style.background = '#f7f1ae';
                    container.style.color = '#000000';
                    break;
                case 'purple':
                    container.style.background = '#ebdcf1';
                    container.style.color = '#000000';
                    break;
                case 'green':
                    container.style.background = '#dff9e0';
                    container.style.color = '#000000';
                    break;
                case 'black':
                    container.style.background = '#50504e';
                    container.style.color = '#FFFFFF';
                    break;
                default: break;
            }
        });
    }
}
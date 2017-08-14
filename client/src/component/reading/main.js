import './index.css';
import { addEvent, showBlock, hide } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    state: {
        readingInfo: ''
    },
    load: function () {
        let me = this;
        let paragraphDom = document.getElementById('allmap');
        let fontSize = window.getComputedStyle(paragraphDom).fontSize.split('px')[0];
        TDM.ui.loading.hide();
        TDM.util.ajax({
            url: '/chapter1.json',
            data: {

            },
            type: "get",
            success: function (result) {
                me.writeTextOnCanvas("allmap", 30, String(result.p), 14, "#333");
            }
        });
        hide(document.getElementById('reading-menus'));
        hide(document.getElementById('system-title'));
        me.changeMenu();
        addEvent(document.getElementById('font-style'), 'click', 'small', function () {
            let currentSizeDom = document.getElementsByClassName('current-size')[0];
            let newSize = fontSize - 2;
            if (newSize < 12) {
                newSize = 12;
            }
            me.writeTextOnCanvas("allmap", 20, text, newSize, "#333");
            currentSizeDom.innerText = newSize;
        });
        addEvent(document.getElementById('font-style'), 'click', 'large', function () {
            let currentSizeDom = document.getElementsByClassName('current-size')[0];
            console.log(fontSize);
            let newSize = +fontSize + 2;
            if (newSize > 28) {
                newSize = 28;
            }
            console.log(newSize, '-----------------------');
            me.writeTextOnCanvas("allmap", 20, text, newSize, "#333");
            currentSizeDom.innerText = newSize;
        });
        addEvent(document.getElementById('background-style'), 'click', 'background-color', function (dom) {
            let container = document.getElementsByClassName('commonModules-like')[0];
            let color = dom.getAttribute('data-color');
            switch (color) {
                case 'yellow':
                    container.style.background = '#f7f1ae';
                    me.writeTextOnCanvas("allmap", 20, text, fontSize, "#000000");
                    break;
                case 'purple':
                    container.style.background = '#ebdcf1';
                    me.writeTextOnCanvas("allmap", 20, text, fontSize, "#000000");
                    break;
                case 'green':
                    container.style.background = '#dff9e0';
                    me.writeTextOnCanvas("allmap", 20, text, fontSize, "#000000");
                    break;
                case 'black':
                    container.style.background = '#50504e';
                    me.writeTextOnCanvas("allmap", 20, text, fontSize, "#FFFFFF");
                    break;
                default: break;
            }
        });
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
                    let nightDom = document.getElementById('night');
                    let iconDom = nightDom.getElementsByClassName('icon')[0];
                    let menuDom = nightDom.getElementsByClassName('menu-name')[0];

                    if (menuDom.innerText == '夜晚') {
                        container.style.background = '#50504e';
                        me.writeTextOnCanvas("allmap", 20, text, fontSize, "#FFFFFF");
                        menuDom.innerText = '白天';
                        iconDom.classList.remove('icon-wanshangyueliangye');
                        iconDom.classList.add('icon-baitianqing');
                    } else {
                        container.style.background = '#f1f1f1';
                        me.writeTextOnCanvas("allmap", 20, text, fontSize, "#000");
                        menuDom.innerText = '夜晚';
                        iconDom.classList.remove('icon-baitianqing');
                        iconDom.classList.add('icon-wanshangyueliangye');
                    }
                default: break;
            }
        });
       
        var moveX,   //手指滑动距离
            startX,
            moveDir;  //滑动方向
        var movebox = document.querySelector("#content-box");  //滑动对象
        //触摸开始
        function boxTouchStart(e) {
            var touch = e.touches[0];  //获取触摸对象
            startX = touch.pageX;  //获取触摸坐标
        }

        function boxTouchMove(e) {
            var touch = e.touches[0];
            moveX = touch.pageX - startX;  //手指水平方向移动的距离
        }

        function boxTouchEnd(e) {
            if(moveX !== undefined){
                moveDir = moveX < 0 ? true : false;   //滑动方向大于0表示向左滑动，小于0表示向右滑动
            }
            //手指向左滑动
            if (moveDir !== undefined){
                if (moveDir) {
                    me.writeTextOnCanvas("allmap", 30, 'aaaaaaa', 14, "#333");
                    //手指向右滑动
                } else {
                    me.writeTextOnCanvas("allmap", 30, 'bbbbbb', 14, "#333");
                }
            }
        }
        //滑动对象事件绑定
        movebox.addEventListener("touchstart", boxTouchStart, false);
        movebox.addEventListener("touchmove", boxTouchMove, false);
        movebox.addEventListener("touchend", boxTouchEnd, false);
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
    writeTextOnCanvas(cns, lh, text, font, color) {
        function setDevicePixelRatio(context) {
            let canvasDom = document.getElementById('allmap');
            let windowWidth = document.documentElement.clientWidth;
            let windowHeight = document.documentElement.clientHeight;
            document.getElementById('allmap').width = windowWidth - 20;
            document.getElementById('allmap').height = windowHeight - 120;
            var devicePixelRatio = window.devicePixelRatio;
            context.canvas.width = context.canvas.width * devicePixelRatio;
            context.canvas.height = context.canvas.height * devicePixelRatio;
            context.canvas.style.width = context.canvas.width / devicePixelRatio + 'px';
            context.canvas.style.height = context.canvas.height / devicePixelRatio + 'px';
            //debugger
            context.scale(devicePixelRatio, devicePixelRatio);
        }
        var cns = document.getElementById(cns);
        var ctx = cns.getContext("2d");
        setDevicePixelRatio(ctx);
        let width = cns.offsetWidth;
        let height = cns.offsetHeight;
        let paddding = 10;
        // debugger
        let rw = (width * 2 - (paddding * 3)) / ctx.measureText('我').width;
        var lineheight = lh;
        var text = text;
        ctx.width = cns.width;
        ctx.height = cns.height;

        ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.font = font + 'px Arial';
        ctx.fillStyle = color;

        function getTrueLength(str) { //获取字符串的真实长度（字节长度）
            var len = str.length,
                truelen = 0;
            for (var x = 0; x < len; x++) {
                if (str.charCodeAt(x) > 128) {
                    truelen += 2;
                } else {
                    truelen += 1;
                }
            }
            return truelen;
        }

        function cutString(str, leng) { //按字节长度截取字符串，返回substr截取位置
            var len = str.length,
                tlen = len,
                nlen = 0;
            for (var x = 0; x < len; x++) {
                if (str.charCodeAt(x) > 128) {
                    if (nlen + 2 < leng) {
                        nlen += 2;
                    } else {
                        tlen = x;
                        break;
                    }
                } else {
                    if (nlen + 1 < leng) {
                        nlen += 1;
                    } else {
                        tlen = x;
                        break;
                    }
                }
            }
            return tlen;
        }
        let curentText = "";
        for (var i = 1; getTrueLength(text) > 0; i++) {
            var tl = cutString(text, rw);
            let temp = text.substr(0, tl).replace(/^\s+|\s+$/, "");

            let y = i * lineheight;
            if (y + lineheight > height) {
                break;
            } else {
                curentText += temp;
                ctx.fillText(temp, paddding, y);
                text = text.substr(tl);
            }

        }

        return curentText;
    }
}
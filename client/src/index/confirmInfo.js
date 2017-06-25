export default function confirmInfo() {
    var okFun = null,
        cancerFun = null,
        dom = null;

    function hide() {
        shengyan.dom.hide(dom);
    }

    function showDiv() {
        shengyan.dom.showTable(dom);
        dom.querySelector(".modal").classList.add("fadeInUp");
    }

    function setBtn(btn1, btn2) {
        var btns = dom.querySelectorAll(".modal .clicbtn");
        btns[0].innerText = btn1;
        btns[1].innerText = btn2;
    }



    function show(text, fun1, fun2) {
        bindDom();
        okFun = fun1;
        cancerFun = fun2;
        dom.querySelector(".text").innerHTML = text;
        setBtn("确认", "取消");
        showDiv();
    }

    function showCustom(text, btn1, btn2, fun1, fun2) {
        bindDom();
        okFun = fun1;
        cancerFun = fun2;
        dom.querySelector(".text").innerHTML = text;
        setBtn(btn1, btn2);
        showDiv();

    }

    function bindDom() {
        if (dom === null) {
            dom = document.getElementById("modal-confirm-info");
            var btns = dom.querySelectorAll(".modal .clicbtn");
            btns[0].addEventListener("click", function () {
                event.preventDefault();
                if (okFun) {
                    okFun();
                }
                hide();
            }, false);
            btns[1].addEventListener("click", function () {
                event.preventDefault();
                if (cancerFun) {
                    cancerFun();
                }
                hide();
            }, false);
        }
    }
    return {
        show: show,
        showCustom: showCustom
    };
}
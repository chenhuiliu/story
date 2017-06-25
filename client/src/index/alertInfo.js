 export default function alertInfo() {
     var showTime = 1500;

     function modal(dom) {
         this.dom = dom;
         this.startTime = new Date();
     }

     modal.prototype.show = function () {
         this.dom.style.display = "table";
         this.startTime = new Date();
     };
     modal.prototype.hide = function () {
         this.dom.style.display = "none";

     };
     modal.prototype.bgHide = function () {
         if (new Date() - this.startTime > 750) {
             console.log(event.target.tagName);
             if (event.target.tagName === "TD") {
                 this.dom.style.display = "none";
             }
         }
     };
     var info = new modal(document.getElementById("modal-alert-info"));

     return {
         showMessage: function (txt) {
             if (info.dom === null) {
                 info.dom = document.getElementById("modal-alert-info");
             }
             info.dom.querySelector(".alertInfo").innerText = txt;
             info.show();
             setTimeout(function () {
                 info.hide();
             }, showTime);
         },
         setShowTime: function (time) {
             showTime = time;
         }

     };
 }
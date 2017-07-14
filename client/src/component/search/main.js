import './index.css';
import { addEvent } from '../../util/lang.js';
module.exports = {
    html: require("./index.html"),
    load: function () {
        TDM.ui.loading.hide()
        this.ajax();
        addEvent(document.getElementById('searchModules-hot-searchs'),'click','hot-item',function(dom){
            let inputDom = document.getElementById('search-value');
            inputDom.setAttribute('value',dom.innerText)
        });
        document.getElementsByClassName('icon-clear')[0].onclick = function(){
            let inputDom = document.getElementById('search-value');
            let bookdetail = document.getElementById('search-result');
            let hotSearch = document.getElementsByClassName('hot-searchs')[0];

            inputDom.setAttribute('value','');
            inputDom.focus();
            hotSearch.style.display = 'block';
            bookdetail.style.display = 'none';
        };
        document.getElementById('hot-seatch-btn').onclick = function(){
            require(['./../bookdetail/main'], function(model){
                let hotSearch = document.getElementsByClassName('hot-searchs')[0];
                let searchResult = document.getElementById('search-result');
                let resultStyle = searchResult.style.display;

                hotSearch.style.display = 'none';
                
                if(resultStyle == 'none'){
                    resultStyle = 'block';
                }
                searchResult.innerHTML = model.html;
                model.load();
            });
        };
    },
    ajax() {
        let me = this;
        TDM.util.ajax({
            url: '/hotSearch.json',
            data: {

            },
            type: "get",
            success: function (result) {
                let hotSearch = [];
                let data = result.list;
                data.forEach((item)=>{
                    hotSearch.push('<div class="hot-item" data-id='+item.id+'>'+item.bookName+'</div>');
                });
                document.getElementById('searchModules-hot-searchs').innerHTML= hotSearch.join('');
            }
        })
    }
}
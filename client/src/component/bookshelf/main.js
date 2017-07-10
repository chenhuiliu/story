import './index.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./index.html"),
    load: function () {
         debugger
        TDM.ui.loading.hide();
        this.ajax();
     
    },
    ajax() {
        TDM.util.ajax({
            url: '/bookshelf.json',

            data: {

            },
            type: "get",
            success: function (result) {
                var len = Math.ceil(result.list.length / 3);
                var html = [];
                // for(var i=0;i<len;i++){
                //     debugger
                //     html.push('<div class="row-list">');
                //     for(var j=3*i;j<(i+1)*3;j++){
                //         html.push('<div class="item"><div class="item-content">');
                //         html.push('<img src='+result.list[j][img]+' alt="">');
                //         html.push('<span class="reading-state">未读</span></div>');
                //         html.push('<div class="item-title">'+result.list[j]['bookName']+'</div></div>');
                //     }
                //     html.push('</div>');
                // }
                var data=[];
                for (var i = 0, l = result.list.length; i < l; i += 3) {
                    data.push(result.list.slice(i, i + 3));
                }
                console.log(data,'----data----');
                var template = document.querySelector('#clientResourceModules-template').innerHTML;
                Mustache.parse(template); // optional, speeds up future uses 
                var rendered = Mustache.render(template,{
                    data:function(item){
                        return 
                    }
                });

                document.getElementById('clientResourceModules-target').innerHTML = rendered;
            }
        })
    }
}
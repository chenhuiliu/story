import './css.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./html.html"),
    state:{
        name:"12123",

    },
    load: function () {
     
        TDM.ui.loading.hide()
        this.render()
        // this.showTiitle();
        // this.ajax();
    },
    showTiitle() {
        var template = document.querySelector('#clientResourceModules-template').innerHTML;
        Mustache.parse(template); // optional, speeds up future uses 
        var rendered = Mustache.render(template, {
            name: "Luke"
        });

        document.getElementById('clientResourceModules-target').innerHTML = rendered;
        // $('#clientResourceModules-target').html(rendered);
    },
    render(){
       document.getElementById('clientResourceModules-target').innerHTML=`<h1>Hello, ${this.state.name}</h1>`
    },
    ajax() {
        TDM.util.ajax({
            url: '/a.json',

            data: {

            },
            type: "get",
            success: function (result) {
               // alert();
                // debugger
                // debugger
            }
        })
    }
}
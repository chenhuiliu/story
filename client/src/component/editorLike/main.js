import './css.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./html.html"),
    load: function () {
        // debugger
        TDM.ui.loading.hide();
        // debugger
        debugger
        this.showTiitle();
    },
    showTiitle() {
        var template = document.querySelector('#clientResourceModules-template').innerHTML;
        Mustache.parse(template); // optional, speeds up future uses 
        var rendered = Mustache.render(template, {
            name: "Luke"
        });
        
        document.getElementById('clientResourceModules-target').innerHTML = rendered;
        // $('#clientResourceModules-target').html(rendered);
    }
}
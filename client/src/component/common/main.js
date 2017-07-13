import './css.css';
module.exports = {
    html: require("./html.html"),
    state: {
        bookshelfObj: null,
        jingpinObj: null,
        zhuantiObj: null,
        searchObj: null
    },
    modules: ['bookshelf', 'jingpin', 'zhuanti', 'search'],
    loadModule(obj, module, fun) {
        let me = this;
        if (obj == null) {
            require(['./../' + module + '/main'], function (model) {
                me.state.obj = model;
                document.getElementById('commonModules-render-' + module).innerHTML = model.html;
                model.load();
                fun();
            })
        } else {
            fun();
        }
        for (var i=0,l=me.modules.length;i<l;i++){
            var currentModule = document.getElementById('commonModules-render-' + me.modules[i]);
            var currentMenu = document.getElementById('commonModules-'+me.modules[i]);
            if (me.modules[i] == module) {
                currentModule.style.display = 'block';
                currentMenu.classList.add('menu-selected');
            } else if(currentModule){
                currentModule.style.display = 'none';
                currentMenu.classList.remove('menu-selected');
            }
        }
    },
    load: function () {
        TDM.ui.loading.hide()
        let me = this;
        document.getElementById('commonModules-bookshelf').onclick = function () {
            me.loadModule(me.state.bookshelfObj,'bookshelf',function () {

            });
        }
        document.getElementById('commonModules-jingpin').onclick = function () {
            me.loadModule(me.state.jingpinObj,'jingpin',function () {

            });
        }
        document.getElementById('commonModules-zhuanti').onclick = function () {
            me.loadModule(me.state.zhuantiObj,'zhuanti',function () {

            });
        }
        document.getElementById('commonModules-search').onclick = function () {
            me.loadModule(me.state.searchObj,'search',function () {

            });
        }
    }
}
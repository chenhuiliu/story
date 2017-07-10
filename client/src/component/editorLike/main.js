import './css.css';
import Mustache from 'mustache';
module.exports = {
    html: require("./html.html"),
    load: function () {
        // debugger
        TDM.ui.loading.hide();
        // debugger
      //  debugger
        this.showTiitle();
        this.ajax();
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
    ajax() {
        TDM.util.ajax({
            url: '/qiance-query-engine/queryService',
            data: {
                bindingDataSourceStr: JSON.stringify({
                    "caption": "人口流动",
                    "columnAttributes": [{
                        "attrname": "region",
                        "caption": "板块",
                        "id": "name"
                    }, {
                        "attrname": "target_region",
                        "caption": "板块",
                        "id": "name"
                    }],
                    "dataSourceId": "ds_t_tenant_geo",
                    "filters": [{
                        "@type": "DimensionFilter",
                        "attrName": "city",
                        "predicateList": [{
                            "memberValues": ["成都"],
                            "operatorEnum": "EQUAL"
                        }]
                    }, {
                        "@type": "DimensionFilter",
                        "attrName": "workCategory",
                        "predicateList": [{
                            "memberValues": ["1"],
                            "operatorEnum": "EQUAL"
                        }]
                    }, {
                        "@type": "DimensionFilter",
                        "attrName": "region",
                        "predicateList": [{
                            "memberValues": ["葛大店版块"],
                            "operatorEnum": "EQUAL"
                        }]
                    }],
                    "measures": [{
                        "aggreationEnum": "Sum",
                        "attrName": "diff_device_count",
                        "caption": "板块的工作人群的居住地排行",
                        "id": "板块的工作人群的居住地排行",
                        "quickCalEnum": "None"
                    }]
                })
            },
            type: "get",
            success: function (result) {
                
                // debugger
            }
        })
    }
}
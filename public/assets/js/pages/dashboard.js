! function(a) {
    "use strict";
    var e = function() {};
    e.prototype.createStackedChart = function(a, e, r, t, o, c) {
        Morris.Bar({
            element: a,
            data: e,
            xkey: r,
            ykeys: t,
            stacked: !0,
            labels: o,
            hideHover: "auto",
            barSizeRatio: .4,
            resize: !0,
            gridLineColor: "rgba(108, 120, 151, 0.1)",
            barColors: c
        })
    }, e.prototype.createDonutChart = function(a, e, r) {
        Morris.Donut({
            element: a,
            data: e,
            resize: !0,
            colors: r
        })
    }, e.prototype.init = function() {
        // this.createStackedChart("morris-bar-stacked", [{
        //     y: "2005",
        //     a: 45,
        //     b: 180,
        //     c: 100
        // }, {
        //     y: "2006",
        //     a: 75,
        //     b: 65,
        //     c: 80
        // }, {
        //     y: "2007",
        //     a: 100,
        //     b: 90,
        //     c: 56
        // }, {
        //     y: "2008",
        //     a: 75,
        //     b: 65,
        //     c: 89
        // }, {
        //     y: "2009",
        //     a: 100,
        //     b: 90,
        //     c: 120
        // }, {
        //     y: "2010",
        //     a: 75,
        //     b: 65,
        //     c: 110
        // }, {
        //     y: "2011",
        //     a: 50,
        //     b: 40,
        //     c: 85
        // }, {
        //     y: "2012",
        //     a: 75,
        //     b: 65,
        //     c: 52
        // }, {
        //     y: "2013",
        //     a: 50,
        //     b: 40,
        //     c: 77
        // }, {
        //     y: "2014",
        //     a: 75,
        //     b: 65,
        //     c: 90
        // }, {
        //     y: "2015",
        //     a: 100,
        //     b: 90,
        //     c: 240
        // }], "y", ["a", "b", "c"], ["Series A", "Series B", "Series C"], ["#3db9dc", "#1bb99a", "#ebeff2"]);

        this.createDonutChart("morris-2", [{
            label: "Fully Disagree",
            value: 1
        }, {
            label: "2",
            value: 32
        }, {
            label: "3",
            value: 33
        },{
            label: "4",
            value: 68
        },
            {
            label: "Fully Agree",
            value: 1450
        }], ["#EBEFF2","#BCEBCB","#87D68D" ,"#1bb99a","#3db9dc" ])
        this.createDonutChart("morris-bar-stacked", [{
            label: "Fully Disagree",
            value: 20
        }, {
            label: "2",
            value: 42
        }, {
            label: "3",
            value: 13
        },{
            label: "4",
            value: 88
        },
            {
                label: "Fully Agree",
                value: 1250
        }], ["#EBEFF2","#BCEBCB","#87D68D" ,"#1bb99a","#3db9dc" ])
        this.createDonutChart("morris-donut-example", [{
            label: "Fully Disagree",
            value: 10
        }, {
            label: "2",
            value: 22
        }, {
            label: "3",
            value: 13
        },{
            label: "4",
            value: 48
        },
            {
                label: "Fully Agree",
                value: 1850
        }], ["#EBEFF2","#BCEBCB","#87D68D" ,"#1bb99a","#3db9dc" ])
    }, a.Dashboard = new e, a.Dashboard.Constructor = e
}(window.jQuery),
    function(a) {
        "use strict";
        window.jQuery.Dashboard.init()
    }();

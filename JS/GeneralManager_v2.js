let GeneralManager = {};
GeneralManager.addCommas = (e = > {
    e += "";
    x = e.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var t = /(\d+)(\d{3})/;
    for (; t.test(x1);) x1 = x1.replace(t, "$1,$2");
    x2 = x2.slice(0, 3);
    return x1 + x2
}),
GeneralManager.defaultBarSettings = function () {
    let e = this.chartDefinition;
    e.xAxisLabel_textAngle = -.1,
    e.legendShape = "circle",
    e.selectable = !0,
    e.hoverable = !0,
    e.legendPosition = "top",
    e.plotFrameVisible = !1,
    e.orthoAxisGrid = !0,
    e.orthoAxisTicks = !1,
    e.xAxisLabel_textAlign = "right",
    e.xAxisLabel_textBaseline = "top",
    e.format = {
        number: "0.##A",
        percent: "#.00%"
    },
    e.extensionPoints = [
        ["xAxisRule_strokeStyle", "white"],
        ["yAxisRule_strokeStyle", "white"],
        ["y2AxisRule_strokeStyle", "white"]
    ],
    e.tooltipDelayIn = 20,
    e.tooltipDelayOut = 20,
    e.tooltipFade = !1,
    e.tooltipGravity = "s",
    e.tooltipOpacity = 1,
    e.tooltipFollowMouse = !0,
    e.tooltipFormat = function () {
        let e = this.getSeriesLabel();
        return "<div class='tooltipContainer'><div class='tooltipTitle'>" + this.getCategory() + "</div><div class='tooltipLabel'>" + e + "</div><div class='tooltipValue'>" + GeneralManager.addCommas(this.getValue().toFixed(2)) + "</div></div>"
    },
    e.axisLabel_font = "lighter 16px TPF_Font_Thin",
    e.baseAxisGrid = !0,
    e.baseAxisGrid_strokeStyle = "#FFF",
    e.baseAxisGrid_lineWidth = 4,
    e.baseAxisLabel_textStyle = "#01665e",
    e.baseAxisRule_visible = !1,
    e.baseAxisTooltipEnabled = !1,
    e.orthoAxisLabel_textStyle = "#999999",
    e.legendLabel_textStyle = function (e) {
        return (0, this.panel.axes.color.scale)(this.getValue())
    }
	//color
    e.colors = ['#0055B8','#FF9E16','#009BDE','#71A087'];
},
GeneralManager.defaultPieSettings = function () {
    let e = this.chartDefinition;
    e.legendShape = "circle",
    e.selectable = !0,
    e.hoverable = !0,
    e.legendPosition = "bottom",
    e.legendLabel_textStyle = function (e) {
        return (0, this.panel.axes.color.scale)(this.getValue())
    },
    e.tooltipDelayIn = 20,
    e.tooltipDelayOut = 20,
    e.tooltipFade = !1,
    e.tooltipGravity = "s",
    e.tooltipOpacity = 1,
    e.tooltipFollowMouse = !0,
    e.tooltipFormat = function () {
        this.getSeriesLabel();
        return "<div class='tooltipContainer'><div class='tooltipTitle'>" + this.getCategory() + "</div><div class='tooltipValue'>" + GeneralManager.addCommas(this.getValue().toFixed(2)) + "</div></div>"
    }
	
},
GeneralManager.defaultLineSettings = function () {
    let e = this.chartDefinition;
    e.colors = ["#01665e", "#f46d43"],
    e.height = 330,
    e.plotFrameVisible = !1,
    e.margins = "0 1 1 -12",
    e.legendPosition = "top",
    e.legendAlign = "right",
    e.legendLabel_font = "lighter 16px Open Sans",
    e.legendLabel_textDecoration = pvc.finished("none"),
    e.legendItemPadding = 0,
    e.legendMargins = "0 0 -14 0",
    e.legendItemSize = 80,
    e.legendDot_shape = "circle",
    e.legendDot_fillStyle = pvc.finished(function (e) {
        var t = this.delegate();
        return e.isActive ? t : "#FFF"
    }),
    e.legendDot_strokeStyle = pvc.finished(function (e) {
        return this.delegate()
    }),
    e.legendDot_lineWidth = pvc.finished(4),
    e.legendDot_shapeRadius = pvc.finished(3),
    e.legendDrawLine = !1,
    e.legendDot_cursor = "pointer",
    e.legendLabel_textStyle = function (e) {
        return (0, this.panel.axes.color.scale)(this.getValue())
    },
    e.tooltipDelayIn = 20,
    e.tooltipDelayOut = 20,
    e.tooltipFade = !1,
    e.tooltipGravity = "s",
    e.tooltipOpacity = 1,
    e.tooltipFollowMouse = !0,
    e.tooltipFormat = function () {
        var e = this.getSeriesLabel(),
            t = this.getCategory(),
            i = GeneralManager.addCommas(this.getValue().toFixed(0));
        return "<div class='tooltipContainer " + ("Sales" == e ? "sales" : "target") + "'><div class='tooltipTitle'>" + t + "</div><div class='tooltipLabel'>" + e + "</div><div class='tooltipValue'>￥" + i + "</div></div>"
    },
    e.axisLabel_font = "lighter 16px TPF_Font_Thin",
    e.baseAxisLabel_textStyle = "#4d4d4d",
    e.baseAxisLabel_visible = function () {
        return this.index % 2 == 0
    },
    e.baseAxisRule_visible = !1,
    e.baseAxisTooltipEnabled = !1,
    e.orthoAxisLabel_textStyle = "#999999",
    e.orthoAxisDesiredTickCount = 2,
    e.orthoAxisGrid = !0,
    e.orthoAxisGrid_strokeStyle = function () {
        return this.index,
        this.scene.parent.childNodes.length,
        "#CCC"
    },
    e.orthoAxisGrid_lineWidth = function () {
        return this.index,
        this.scene.parent.childNodes.length,
        1
    },
    e.orthoAxisGrid_visible = !0,
    e.orthoAxisRule_visible = !1,
    e.orthoAxisTicks = !1,
    e.orthoAxisLabel_visible = function () {
        return this.index === this.scene.parent.childNodes.length - 1
    },
    e.orthoAxisLabel_textMargin = 8,
    e.orthoAxisLabel_textAlign = "left",
    e.orthoAxisLabel_textBaseline = "bottom",
    e.orthoAxisTickFormatter = function (e) {
        return "$" + GeneralManager.addCommas(e)
    },
    e.line_lineWidth = pvc.finished(4),
    e.dotsVisible = !0,
    e.dot_shapeRadius = pvc.finished(3),
    e.dot_lineWidth = pvc.finished(4),
    e.hoverable = !0,
    e.dot_fillStyle = pvc.finished(function (e) {
        var t = this.delegate();
        return e.isActive ? t : "#FFF"
    }),
    e.dot_strokeStyle = pvc.finished(function (e) {
        return this.delegate()
    }),
    e.legendLabel_call = function () {
        this.events("all").event("point", function (e) {
            var t = e.panel();
            !e.hoverable() || t.selectingByRubberband() || t.animating() || (e.setActive(!0), t.renderInteractive())
        }).event("unpoint", function (e) {
            var t = e.panel();
            !e.hoverable() || t.selectingByRubberband() || t.animating() || e.clearActive() && t.renderInteractive()
        })
    },
    e.format = {
        number: "0.##A",
        percent: "#.00%"
    },
    e.extensionPoints = [
        ["xAxisRule_strokeStyle", "white"],
        ["yAxisRule_strokeStyle", "white"],
        ["y2AxisRule_strokeStyle", "white"]
    ],
    e.xAxisLabel_textAngle = -.1,
    e.stacked = !0,
    e.legendShape = "circle",
    e.selectable = !0,
    e.hoverable = !0,
    e.legendPosition = "top",
    e.plotFrameVisible = !1,
    e.orthoAxisGrid = !0,
    e.orthoAxisTicks = !1,
    e.xAxisLabel_textAlign = "right",
    e.xAxisLabel_textBaseline = "top",
    e.orthoAxisTickFormatter = function (e) {
        return e < 1e6 && e >= 1e3 ? sprintf("%d", e / 1e3) + "K" : e >= 1e6 ? sprintf("%d", e / 1e6) + "M" : sprintf("%d", e / 1e3) + "K"
    }
};
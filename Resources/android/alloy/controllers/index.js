function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.MainWindow = Ti.UI.createWindow(function() {
        var o = {};
        _.extend(o, {
            backgroundColor: "#EEE"
        });
        Alloy.isHandheld && _.extend(o, {
            orientationModes: [ Ti.UI.PORTRAIT ]
        });
        _.extend(o, {
            navBarHidden: true,
            exitOnClose: true
        });
        Alloy.isTablet && _.extend(o, {
            orientationModes: [ Ti.UI.LANDSCAPE_LEFT ]
        });
        _.extend(o, {
            id: "MainWindow"
        });
        return o;
    }());
    $.__views.MainWindow && $.addTopLevelView($.__views.MainWindow);
    $.__views.SlideMenu = Alloy.createWidget("com.mcongrove.slideMenu", "widget", {
        id: "SlideMenu",
        __parentSymbol: $.__views.MainWindow
    });
    $.__views.SlideMenu.setParent($.__views.MainWindow);
    $.__views.GlobalWrapper = Ti.UI.createView({
        width: "100%",
        id: "GlobalWrapper"
    });
    $.__views.MainWindow.add($.__views.GlobalWrapper);
    $.__views.ContentWrapper = Ti.UI.createView({
        top: "0dp",
        bottom: "60dp",
        id: "ContentWrapper"
    });
    $.__views.GlobalWrapper.add($.__views.ContentWrapper);
    $.__views.Tabs = Alloy.createWidget("com.mcongrove.tabs", "widget", {
        id: "Tabs",
        __parentSymbol: $.__views.GlobalWrapper
    });
    $.__views.Tabs.setParent($.__views.GlobalWrapper);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    APP.MainWindow = $.MainWindow;
    APP.GlobalWrapper = $.GlobalWrapper;
    APP.ContentWrapper = $.ContentWrapper;
    APP.Tabs = $.Tabs;
    APP.SlideMenu = $.SlideMenu;
    APP.init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
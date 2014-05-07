function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsevents";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Newsevents"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.container = Ti.UI.createView({
        top: "0dp",
        backgroundColor: "#FFF",
        layout: "vertical",
        showVerticalScrollIndicator: true,
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    $.__views.heading = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        id: "heading"
    });
    $.__views.container.add($.__views.heading);
    $.__views.text = Ti.UI.createLabel({
        top: "10dp",
        left: "15dp",
        right: "15dp",
        bottom: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        id: "text"
    });
    $.__views.container.add($.__views.text);
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: "94%",
        height: "94%",
        bottom: "75dp",
        id: "__alloyId55"
    });
    $.__views.container.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        backgroundColor: "#388E8E",
        width: "31%",
        height: "50dp",
        top: "1dp",
        left: "1dp",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "Recent",
        left: "32dp",
        color: "black",
        verticalAlign: "center",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        backgroundColor: "#ADEAEA",
        width: "31%",
        height: "50dp",
        top: "1dp",
        id: "__alloyId58"
    });
    $.__views.__alloyId55.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        text: "Popular",
        left: "32dp",
        color: "black",
        textAlign: "center",
        verticalAlign: "center",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        backgroundColor: "#ADEAEA",
        width: "31%",
        height: "50dp",
        top: "1dp",
        right: "1dp",
        id: "__alloyId60"
    });
    $.__views.__alloyId55.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        text: "Critical",
        left: "32dp",
        color: "black",
        zIndex: "1",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        scrollsToTop: false,
        backgroundColor: "white",
        width: "95%",
        height: "95%",
        top: "61dp",
        bottom: "60dp",
        id: "__alloyId62"
    });
    $.__views.__alloyId55.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "Content will go here.",
        color: "black",
        zIndex: "1",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var CONFIG = arguments[0];
    APP.log("debug", "text | " + JSON.stringify(CONFIG));
    $.heading.text = CONFIG.heading;
    $.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
    $.text.text = CONFIG.text;
    $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
    true === CONFIG.isChild ? $.NavigationBar.showBack(function() {
        APP.removeChild();
    }) : APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
        APP.toggleMenu();
    }) : $.NavigationBar.showSettings(function() {
        APP.openSettings();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
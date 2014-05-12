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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "15dp",
        left: "15dp",
        right: "15dp",
        font: {
            fontSize: "18dp",
            fontFamily: "HelveticaNeue-Light"
        },
        id: "heading"
    });
    $.__views.container.add($.__views.heading);
    $.__views.text = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        left: "15dp",
        right: "15dp",
        bottom: "15dp",
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        id: "text"
    });
    $.__views.container.add($.__views.text);
    $.__views.myStuff = Ti.UI.createTableView({
        scrollsToTop: false,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "myStuff"
    });
    $.__views.container.add($.__views.myStuff);
    $.__views.__alloyId210 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: "94%",
        height: "400dp",
        bottom: "75dp",
        id: "__alloyId210"
    });
    $.__views.container.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createView({
        backgroundColor: "#388E8E",
        width: "31%",
        height: "50dp",
        top: "1dp",
        left: "1dp",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Recent",
        left: "32dp",
        verticalAlign: "center",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createView({
        backgroundColor: "#ADEAEA",
        width: "31%",
        height: "50dp",
        top: "1dp",
        id: "__alloyId213"
    });
    $.__views.__alloyId210.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Popular",
        left: "32dp",
        textAlign: "center",
        verticalAlign: "center",
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        backgroundColor: "#ADEAEA",
        width: "31%",
        height: "50dp",
        top: "1dp",
        right: "1dp",
        id: "__alloyId215"
    });
    $.__views.__alloyId210.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Critical",
        left: "32dp",
        zIndex: "1",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createScrollView({
        scrollsToTop: false,
        backgroundColor: "white",
        width: "95%",
        top: "61dp",
        bottom: "7dp",
        id: "__alloyId217"
    });
    $.__views.__alloyId210.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        height: "300dp",
        color: "gray",
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Content will go here.",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        height: "300dp",
        id: "__alloyId220"
    });
    $.__views.__alloyId217.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Most interesting news!",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
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
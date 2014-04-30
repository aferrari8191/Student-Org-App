function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "alumni";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Alumni"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.NavigationBar = Alloy.createWidget("com.mcongrove.navigationBar", "widget", {
        id: "NavigationBar",
        image: "data/logo.png",
        __parentSymbol: $.__views.Wrapper
    });
    $.__views.NavigationBar.setParent($.__views.Wrapper);
    $.__views.container = Ti.UI.createScrollView({
        scrollsToTop: false,
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
    $.__views.showInfo = Ti.UI.createView({
        backgroundColor: "black",
        width: Titanium.UI.FILL,
        id: "showInfo",
        height: "30dp"
    });
    $.__views.container.add($.__views.showInfo);
    doClick ? $.__views.showInfo.addEventListener("click", doClick) : __defers["$.__views.showInfo!click!doClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Alumni",
        left: "32dp",
        id: "__alloyId1"
    });
    $.__views.showInfo.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId2"
    });
    $.__views.showInfo.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId3"
    });
    $.__views.container.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Logan Peterson",
        left: "32dp",
        color: "white",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        image: "/images/portraitlogan.jpg",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId7"
    });
    $.__views.container.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Matt Cash",
        left: "32dp",
        color: "white",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createImageView({
        image: "/images/portraitmatt.png",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId11"
    });
    $.__views.container.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Scott Nelson",
        left: "32dp",
        color: "white",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createImageView({
        image: "/images/portraitscott.png",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId15"
    });
    $.__views.container.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Sean Mackman",
        left: "32dp",
        color: "white",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        image: "/images/portraitsean.png",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var showInfo = Ti.UI.createView({
        backgroundColor: "white",
        width: "100dp",
        height: "100dp"
    });
    showInfo.addEventListener("click", doClick);
    add(showInfo);
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
    __defers["$.__views.showInfo!click!doClick"] && $.__views.showInfo.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
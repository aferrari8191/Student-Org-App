function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings_credits";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Settings Credits"
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
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        text: "Primary design and development by Matthew Congrove with the assistance of Josh Jensen, Roger White, Aaron Hartwig and Fokke Zandbergen.",
        id: "__alloyId213"
    });
    $.__views.container.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        text: "Uses open source code or designs developed by Mads Møller, Fokke Zandbergen, Jon Alter, Tim Wood, Ivo Ivanov and Sérgio Jardim.",
        id: "__alloyId214"
    });
    $.__views.container.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        text: "Special thanks to Rick Blalock, Tony Lukasavage, Greg DiPaolo, Dennis Ashby, Varun Joshi, Elyse Phillips, Sandeep Johri, Jeff Haynie and the rest of the team at Appcelerator, Ray Miranda, Ivan Mathy, Oleg Polyakov, and the entire crowd of developers at Appcelerator's 2012 Hack-to-Help.",
        id: "__alloyId215"
    });
    $.__views.container.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        text: "We'd also like to recognize all of the folks at ROAR and the University of Wisconsin-Milwaukee's App Brewery.",
        id: "__alloyId216"
    });
    $.__views.container.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        text: "ChariTi is built on Appcelerator's Titanium Mobile and utilizes the Alloy framework. ChariTi's code is hosted for free by the amazing folks at GitHub, kept DRY by Simon Harris' Simian, documented by JSDuck, and kept clean thanks to Einar Lielmanis' JS Beautifier.",
        id: "__alloyId217"
    });
    $.__views.container.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        color: "#000",
        bottom: "15dp",
        text: "Custom icons were provided by Roger White.",
        id: "__alloyId218"
    });
    $.__views.container.add($.__views.__alloyId218);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    $.init = function() {
        APP.log("debug", "settings_credits.init");
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        $.NavigationBar.showBack(function() {
            APP.removeChild(true);
        });
    };
    $.init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
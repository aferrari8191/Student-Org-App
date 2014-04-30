function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "members2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Members"
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
    $.__views.__alloyId20 = Ti.UI.createView({
        backgroundColor: "black",
        width: Titanium.UI.FILL,
        height: "30dp",
        id: "__alloyId20"
    });
    $.__views.container.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "Members",
        left: "32dp",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId23"
    });
    $.__views.container.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        text: "Member 1 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId23.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId27"
    });
    $.__views.container.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "Member 2 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId31"
    });
    $.__views.container.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        text: "Member 3 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId35"
    });
    $.__views.container.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        text: "Member 4 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId39"
    });
    $.__views.container.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        text: "Member 5 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId43"
    });
    $.__views.container.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        text: "Member 6 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId46"
    });
    $.__views.__alloyId43.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId47"
    });
    $.__views.container.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        text: "Member 7 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId49"
    });
    $.__views.__alloyId47.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId50"
    });
    $.__views.__alloyId47.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId51"
    });
    $.__views.container.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        text: "Member 8 Example",
        left: "32dp",
        color: "white",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId53"
    });
    $.__views.__alloyId51.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId54"
    });
    $.__views.__alloyId51.add($.__views.__alloyId54);
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
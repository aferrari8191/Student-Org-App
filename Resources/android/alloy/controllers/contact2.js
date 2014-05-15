function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contact2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Contact"
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
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/images/portraitmatt.png",
        height: "90dp",
        width: "70dp",
        id: "__alloyId20"
    });
    $.__views.container.add($.__views.__alloyId20);
    $.__views.emailtxt = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "sigmachilambdachi@gmail.com",
        id: "emailtxt"
    });
    $.__views.container.add($.__views.emailtxt);
    $.__views.emailbtn = Ti.UI.createButton({
        backgroundColor: "#0380Ba",
        width: Ti.UI.Fill,
        top: "10dp",
        height: "35dp",
        borderRadius: 10,
        title: "Questions?",
        id: "emailbtn",
        label: "email"
    });
    $.__views.container.add($.__views.emailbtn);
    $.__views.phonetxt = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "262-215-5758",
        id: "phonetxt"
    });
    $.__views.container.add($.__views.phonetxt);
    $.__views.officetxt = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "Office:Union 325",
        id: "officetxt"
    });
    $.__views.container.add($.__views.officetxt);
    $.__views.commonqs = Ti.UI.createTableView({
        scrollsToTop: false,
        id: "commonqs"
    });
    $.__views.container.add($.__views.commonqs);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var CONFIG = arguments[0];
    var APP = require("core");
    require("ti.cloud");
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
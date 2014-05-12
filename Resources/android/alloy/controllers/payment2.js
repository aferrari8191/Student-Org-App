function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "payment2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Payment"
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
    $.__views.amount = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "Payment Amount",
        id: "amount",
        left: "10dp"
    });
    $.__views.container.add($.__views.amount);
    $.__views.amounttxt = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: 10,
        height: "45dp",
        width: "250dp",
        backgroundColor: "#0380Ba",
        maxLength: 10,
        hintText: "XXXXXX.XX",
        id: "amounttxt",
        left: "10dp"
    });
    $.__views.container.add($.__views.amounttxt);
    $.__views.ccn = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "Credit Card Number",
        id: "ccn",
        left: "10dp"
    });
    $.__views.container.add($.__views.ccn);
    $.__views.ccntxt = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: 10,
        height: "45dp",
        width: "250dp",
        backgroundColor: "#0380Ba",
        maxLength: 18,
        hintText: "XXXX-XXXX-XXXX-XXXX",
        id: "ccntxt",
        left: "10dp"
    });
    $.__views.container.add($.__views.ccntxt);
    $.__views.scn = Ti.UI.createLabel({
        color: "black",
        height: Ti.UI.SIZE,
        font: {
            fontsize: "18dp",
            fontfamily: "HelveticaNeue"
        },
        text: "Security Code",
        id: "scn",
        left: "10dp"
    });
    $.__views.container.add($.__views.scn);
    $.__views.scntxt = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: 10,
        height: "45dp",
        width: "250dp",
        backgroundColor: "#0380Ba",
        maxLength: 3,
        hintText: "XXX",
        id: "scntxt",
        left: "10dp"
    });
    $.__views.container.add($.__views.scntxt);
    $.__views.submit = Ti.UI.createButton({
        backgroundColor: "#0380Ba",
        width: Ti.UI.Fill,
        top: "10dp",
        height: "35dp",
        borderRadius: 10,
        title: "Submit",
        id: "submit",
        left: "30dp"
    });
    $.__views.container.add($.__views.submit);
    $.__views.clear = Ti.UI.createButton({
        backgroundColor: "#0380Ba",
        width: Ti.UI.Fill,
        top: "10dp",
        height: "35dp",
        borderRadius: 10,
        title: "Clear",
        id: "clear",
        left: "30dp"
    });
    $.__views.container.add($.__views.clear);
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
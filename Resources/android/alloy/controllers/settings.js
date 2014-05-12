function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Settings"
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
        backgroundColor: "#EEE",
        contentWidth: "auto",
        contentHeight: "auto",
        layout: "vertical",
        id: "container"
    });
    $.__views.Wrapper.add($.__views.container);
    var __alloyId222 = [];
    $.__views.terms = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#DDD",
        font: {
            fontSize: "17dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        selectedColor: "#000",
        height: "45dp",
        id: "terms",
        title: "Terms of Service",
        hasChild: "true"
    });
    __alloyId222.push($.__views.terms);
    $.__views.privacy = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#DDD",
        font: {
            fontSize: "17dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        selectedColor: "#000",
        height: "45dp",
        id: "privacy",
        title: "Privacy Policy",
        hasChild: "true"
    });
    __alloyId222.push($.__views.privacy);
    $.__views.legal_table = Ti.UI.createTableView({
        scrollsToTop: false,
        right: "0dp",
        left: "0dp",
        top: "20dp",
        separatorColor: "#EEE",
        rowHeight: "45dp",
        backgroundColor: "#FFF",
        scrollable: false,
        data: __alloyId222,
        id: "legal_table",
        height: "90dp"
    });
    $.__views.container.add($.__views.legal_table);
    var __alloyId223 = [];
    $.__views.logs = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#DDD",
        font: {
            fontSize: "17dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        selectedColor: "#000",
        height: "45dp",
        id: "logs",
        title: "Send Application Logs",
        hasChild: "true"
    });
    __alloyId223.push($.__views.logs);
    $.__views.acknowledgements = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#DDD",
        font: {
            fontSize: "17dp",
            fontFamily: "HelveticaNeue-Light"
        },
        color: "#000",
        selectedColor: "#000",
        height: "45dp",
        id: "acknowledgements",
        title: "Acknowledgements",
        hasChild: "true"
    });
    __alloyId223.push($.__views.acknowledgements);
    $.__views.logs_table = Ti.UI.createTableView({
        scrollsToTop: false,
        right: "0dp",
        left: "0dp",
        top: "20dp",
        separatorColor: "#EEE",
        rowHeight: "45dp",
        backgroundColor: "#FFF",
        scrollable: false,
        data: __alloyId223,
        id: "logs_table",
        height: "90dp"
    });
    $.__views.container.add($.__views.logs_table);
    $.__views.copyright = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        top: "20dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "copyright"
    });
    $.__views.container.add($.__views.copyright);
    $.__views.version = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        top: "5dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        textAlign: "left",
        id: "version"
    });
    $.__views.container.add($.__views.version);
    $.__views.__alloyId224 = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        top: "5dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        textAlign: "left",
        text: "This application was created using the open source ChariTi framework, freely available at:\nhttp://chariti.mobi",
        id: "__alloyId224"
    });
    $.__views.container.add($.__views.__alloyId224);
    $.__views.chariti = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontSize: "14dp",
            fontFamily: "HelveticaNeue"
        },
        top: "5dp",
        left: "15dp",
        right: "15dp",
        height: Ti.UI.SIZE,
        textAlign: "left",
        bottom: "20dp",
        id: "chariti"
    });
    $.__views.container.add($.__views.chariti);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    $.init = function() {
        APP.log("debug", "settings.init");
        if (APP.LEGAL.TOS || APP.LEGAL.PRIVACY) {
            if (!APP.LEGAL.TOS || !APP.LEGAL.PRIVACY) {
                APP.LEGAL.TOS || setTimeout(function() {
                    $.legal_table.deleteRow(0);
                }, 1);
                APP.LEGAL.PRIVACY || setTimeout(function() {
                    $.legal_table.deleteRow(1);
                }, 1);
                $.legal_table.height = "45dp";
            }
        } else $.container.remove($.legal_table);
        Ti.UI.createEmailDialog().isSupported || $.container.remove($.logs_table);
        $.copyright.text = APP.LEGAL.COPYRIGHT + " v" + APP.VERSION;
        $.chariti.text = "ChariTi ‌© 2013 Matthew Congrove v" + APP.CVERSION;
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
            APP.toggleMenu();
        }) : $.NavigationBar.showBack(function() {
            APP.removeChild(true);
        });
    };
    $.terms.addEventListener("click", function() {
        APP.log("debug", "settings @terms");
        APP.addChild("settings_legal", {
            title: "Terms of Service",
            url: APP.LEGAL.TOS
        }, true);
    });
    $.privacy.addEventListener("click", function() {
        APP.log("debug", "settings @privacy");
        APP.addChild("settings_legal", {
            title: "Privacy Policy",
            url: APP.LEGAL.PRIVACY
        }, true);
    });
    $.acknowledgements.addEventListener("click", function() {
        APP.log("debug", "settings @credits");
        APP.addChild("settings_credits", {}, true);
    });
    $.logs.addEventListener("click", function() {
        APP.log("debug", "settings @logs");
        APP.logSend();
    });
    $.init();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
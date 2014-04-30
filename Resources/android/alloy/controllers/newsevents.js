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
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: "94%",
        height: "400dp",
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Recent",
        left: "32dp",
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Popular",
        left: "32dp",
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
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Critical",
        left: "32dp",
        zIndex: "1",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        scrollsToTop: false,
        backgroundColor: "white",
        width: "95%",
        top: "61dp",
        bottom: "7dp",
        id: "__alloyId62"
    });
    $.__views.__alloyId55.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: "300dp",
        color: "gray",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Content will go here.",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: "300dp",
        id: "__alloyId65"
    });
    $.__views.__alloyId62.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Most interesting news!",
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var Cloud = require("ti.cloud");
    var CONFIG = arguments[0];
    var init = function() {
        APP.log("debug", "text | " + JSON.stringify(CONFIG));
        $.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);
        true === CONFIG.isChild ? $.NavigationBar.showBack(function() {
            APP.removeChild();
        }) : APP.Settings.useSlideMenu ? $.NavigationBar.showMenu(function() {
            APP.toggleMenu();
        }) : $.NavigationBar.showSettings(function() {
            APP.openSettings();
        });
        loginUser();
    };
    var getAllTheThings = function() {
        Cloud.Objects.query({
            classname: "News",
            page: 1,
            per_page: 50
        }, function(e) {
            if (e.success) {
                var rows = [];
                alert("Success:\nCount: " + e.News.length);
                for (var i = 0; e.News.length > i; i++) {
                    var newse = e.News[i];
                    var row = Ti.UI.createTableViewRow({
                        layout: "vertical",
                        hasChild: true,
                        title: newse.title,
                        bodyText: newse.bodyText
                    });
                    var title = Ti.UI.createLabel({
                        text: newse.title,
                        font: {
                            fontFamily: "bold",
                            fontSize: "22dp"
                        },
                        left: "10dp"
                    });
                    var author = Ti.UI.createLabel({
                        text: "by: " + newse.author,
                        left: "10dp"
                    });
                    row.add(title);
                    row.add(author);
                    rows.push(row);
                }
                $.myStuff.setData(rows);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    };
    var loginUser = function() {
        Cloud.Users.login({
            login: "email@email.org",
            password: "email"
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                alert("Success:\nid: " + user.id);
                getAllTheThings();
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    };
    $.myStuff.addEventListener("click", function(e) {
        APP.addChild("text", {
            heading: e.row.title,
            text: e.row.bodyText
        });
    });
    init();
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
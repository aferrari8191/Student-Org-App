var Alloy = require("alloy");

var UTIL = require("utilities");

var HTTP = require("http");

var APP = {
    ID: null,
    VERSION: null,
    CVERSION: "1.2.1",
    LEGAL: {
        COPYRIGHT: null,
        TOS: null,
        PRIVACY: null
    },
    ConfigurationURL: null,
    Nodes: [],
    Settings: null,
    Device: {
        isHandheld: Alloy.isHandheld,
        isTablet: Alloy.isTablet,
        type: Alloy.isHandheld ? "handheld" : "tablet",
        os: null,
        name: null,
        version: Ti.Platform.version,
        versionMajor: parseInt(Ti.Platform.version.split(".")[0], 10),
        versionMinor: parseInt(Ti.Platform.version.split(".")[1], 10),
        width: Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformWidth,
        height: Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformHeight,
        dpi: Ti.Platform.displayCaps.dpi,
        orientation: Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT || Ti.Gesture.orientation == Ti.UI.LANDSCAPE_RIGHT ? "LANDSCAPE" : "PORTRAIT",
        statusBarOrientation: null
    },
    Network: {
        type: Ti.Network.networkTypeName,
        online: Ti.Network.online
    },
    currentStack: -1,
    previousScreen: null,
    controllerStacks: [],
    modalStack: [],
    hasDetail: false,
    currentDetailStack: -1,
    previousDetailScreen: null,
    detailStacks: [],
    Master: [],
    Detail: [],
    MainWindow: null,
    GlobalWrapper: null,
    ContentWrapper: null,
    ACS: null,
    Loading: Alloy.createWidget("com.mcongrove.loading").getView(),
    cancelLoading: false,
    loadingOpen: false,
    Tabs: null,
    SlideMenu: null,
    SlideMenuOpen: false,
    SlideMenuEngaged: true,
    init: function() {
        Ti.API.debug("APP.init");
        Ti.Network.addEventListener("change", APP.networkObserver);
        Ti.Gesture.addEventListener("orientationchange", APP.orientationObserver);
        Ti.App.addEventListener("pause", APP.exitObserver);
        Ti.App.addEventListener("close", APP.exitObserver);
        Ti.App.addEventListener("resumed", APP.resumeObserver);
        APP.MainWindow.addEventListener("androidback", APP.backButtonObserver);
        APP.determineDevice();
        require("migrate").init();
        APP.setupDatabase();
        APP.loadContent();
        APP.build();
        APP.MainWindow.open();
        APP.handleNavigation(0);
        APP.update();
        APP.initACS();
        APP.initPush();
    },
    determineDevice: function() {
        APP.Device.os = "ANDROID";
        APP.Device.name = Ti.Platform.model.toUpperCase();
        APP.Device.width = APP.Device.width / (APP.Device.dpi / 160);
        APP.Device.height = APP.Device.height / (APP.Device.dpi / 160);
    },
    setupDatabase: function() {
        Ti.API.debug("APP.setupDatabase");
        var db = Ti.Database.open("ChariTi");
        db.execute("CREATE TABLE IF NOT EXISTS updates (url TEXT PRIMARY KEY, time TEXT);");
        db.execute("CREATE TABLE IF NOT EXISTS log (time INTEGER, type TEXT, message TEXT);");
        var data = db.execute("SELECT time FROM log;");
        if (0 === data.rowCount) {
            db.execute("BEGIN TRANSACTION;");
            for (var i = 0; 100 > i; i++) db.execute("INSERT INTO log VALUES (" + i + ', "", "");');
            db.execute("END TRANSACTION;");
        }
        data.close();
        db.close();
    },
    dropDatabase: function() {
        Ti.API.debug("APP.dropDatabase");
        var db = Ti.Database.open("ChariTi");
        db.remove();
    },
    loadContent: function() {
        APP.log("debug", "APP.loadContent");
        var contentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "app.json");
        contentFile.exists() || (contentFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "data/app.json"));
        var content = contentFile.read();
        var data;
        try {
            data = JSON.parse(content.text);
        } catch (_error) {
            APP.log("error", "Unable to parse downloaded JSON, reverting to packaged JSON");
            contentFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + "data/app.json");
            if (!contentFile.exists()) {
                APP.log("error", "Unable to parse local JSON, dying");
                alert("Unable to open the application");
                return;
            }
            content = contentFile.read();
            data = JSON.parse(content.text);
        }
        APP.ID = data.id;
        APP.VERSION = data.version;
        APP.LEGAL = {
            COPYRIGHT: data.legal.copyright,
            TOS: data.legal.terms,
            PRIVACY: data.legal.privacy
        };
        APP.ConfigurationURL = data.configurationUrl && data.configurationUrl.length > 10 ? data.configurationUrl : false;
        APP.Settings = data.settings;
        APP.Nodes = data.tabs;
        for (var i = 0, x = APP.Nodes.length; x > i; i++) APP.Nodes[i].index = i;
        "undefined" == typeof APP.Settings.useSlideMenu && (APP.Settings.useSlideMenu = false);
        APP.Settings.colors.hsb = {
            primary: UTIL.hexToHsb(APP.Settings.colors.primary),
            secondary: UTIL.hexToHsb(APP.Settings.colors.secondary)
        };
        APP.Settings.colors.theme = 65 > APP.Settings.colors.hsb.primary.b ? "dark" : "light";
    },
    build: function() {
        APP.log("debug", "APP.build");
        var nodes = [];
        var imageFolder = APP.Settings.useSlideMenu || "light" != APP.Settings.colors.theme ? "/icons/white/" : "/icons/black/";
        var hasMenuHeaders = false;
        for (var i = 0, x = APP.Nodes.length; x > i; i++) {
            nodes.push({
                id: i,
                title: APP.Nodes[i].title,
                image: UTIL.fileExists(imageFolder + APP.Nodes[i].image + ".png") ? imageFolder + APP.Nodes[i].image + ".png" : null,
                controller: APP.Nodes[i].type.toLowerCase(),
                menuHeader: APP.Nodes[i].menuHeader
            });
            APP.Settings.useSlideMenu && APP.Nodes[i].menuHeader && (hasMenuHeaders = true);
        }
        if (APP.Settings.useSlideMenu) {
            nodes.push({
                id: "settings",
                title: "Settings",
                image: "/icons/white/settings.png",
                menuHeader: hasMenuHeaders ? "Application" : null
            });
            APP.buildMenu(nodes);
        } else APP.buildTabs(nodes);
    },
    buildTabs: function(_nodes) {
        APP.log("debug", "APP.buildTabs");
        APP.Tabs.init({
            nodes: _nodes,
            more: "dark" == APP.Settings.colors.theme ? "/icons/white/more.png" : "/icons/black/more.png",
            color: {
                background: APP.Settings.colors.primary,
                active: APP.Settings.colors.secondary,
                text: "dark" == APP.Settings.colors.theme ? "#FFF" : "#000"
            }
        });
        APP.Tabs.Wrapper.removeEventListener("click", APP.handleTabClick);
        APP.Tabs.Wrapper.addEventListener("click", APP.handleTabClick);
    },
    buildMenu: function(_nodes) {
        APP.log("debug", "APP.buildMenu");
        APP.SlideMenu.init({
            nodes: _nodes,
            color: {
                headingBackground: APP.Settings.colors.primary,
                headingText: "dark" == APP.Settings.colors.theme ? "#FFF" : "#000"
            }
        });
        APP.GlobalWrapper.remove(APP.Tabs.Wrapper);
        APP.ContentWrapper.bottom = "0dp";
        APP.SlideMenu.Nodes.removeEventListener("click", APP.handleMenuClick);
        APP.SlideMenu.Nodes.addEventListener("click", APP.handleMenuClick);
        APP.GlobalWrapper.addEventListener("swipe", function(_event) {
            APP.SlideMenuEngaged && ("right" == _event.direction ? APP.openMenu() : "left" == _event.direction && APP.closeMenu());
        });
    },
    rebuild: function() {
        APP.log("debug", "APP.rebuild");
        APP.SlideMenu.clear();
        APP.Tabs.clear();
        APP.GlobalWrapper.remove(APP.Tabs.Wrapper);
        APP.GlobalWrapper.add(APP.Tabs.Wrapper);
        APP.ContentWrapper.bottom = "60dp";
        APP.currentStack = -1;
        APP.previousScreen = null;
        APP.controllerStacks = [];
        APP.modalStack = [];
        APP.hasDetail = false;
        APP.currentDetailStack = -1;
        APP.previousDetailScreen = null;
        APP.detailStacks = [];
        APP.Master = [];
        APP.Detail = [];
        APP.cancelLoading = false;
        APP.loadingOpen = false;
        APP.dropDatabase();
        APP.rebuildRestart();
    },
    rebuildRestart: function() {
        Ti.API.debug("APP.rebuildRestart");
        APP.setupDatabase();
        APP.loadContent();
        APP.build();
        APP.handleNavigation(0);
    },
    update: function() {
        require("update").init();
    },
    initACS: function() {
        APP.log("debug", "APP.initACS");
        APP.ACS = require("ti.cloud");
    },
    initPush: function() {
        APP.log("debug", "APP.initPush");
        APP.Settings.notifications.enabled && require("push").init();
    },
    handleTabClick: function(_event) {
        "undefined" != typeof _event.source.id && "number" == typeof _event.source.id && APP.handleNavigation(_event.source.id);
    },
    handleMenuClick: function(_event) {
        if ("undefined" != typeof _event.row.id && "number" == typeof _event.row.id) {
            APP.closeSettings();
            APP.handleNavigation(_event.row.id);
        } else "undefined" != typeof _event.row.id && "settings" == _event.row.id && APP.openSettings();
        APP.toggleMenu();
    },
    handleNavigation: function(_id) {
        APP.log("debug", "APP.handleNavigation | " + APP.Nodes[_id].type);
        if (_id == APP.currentStack) return;
        APP.Settings.useSlideMenu ? APP.SlideMenu.setIndex(_id) : APP.Tabs.setIndex(_id);
        APP.closeLoading();
        APP.currentStack = _id;
        "undefined" == typeof APP.controllerStacks[_id] && (APP.controllerStacks[_id] = []);
        if (APP.Device.isTablet) {
            APP.currentDetailStack = _id;
            "undefined" == typeof APP.detailStacks[_id] && (APP.detailStacks[_id] = []);
        }
        var controllerStack = APP.controllerStacks[_id];
        var screen;
        APP.hasDetail = false;
        APP.previousDetailScreen = null;
        if (controllerStack.length > 0) if (APP.Device.isTablet) {
            screen = controllerStack[0];
            "tablet" == screen.type && (APP.hasDetail = true);
        } else screen = controllerStack[controllerStack.length - 1]; else {
            var type = APP.Nodes[_id].type.toLowerCase();
            var tabletSupport = APP.Nodes[_id].tabletSupport;
            if (APP.Device.isTablet) if (tabletSupport) {
                type = "tablet";
                APP.hasDetail = true;
            } else switch (type) {
              case "article":
              case "event":
              case "facebook":
              case "flickr":
              case "podcast":
              case "share":
              case "vimeo":
              case "youtube":
                type = "tablet";
                APP.hasDetail = true;
            }
            screen = Alloy.createController(type, APP.Nodes[_id]).getView();
            controllerStack.push(screen);
        }
        APP.addScreen(screen);
        APP.modalStack = [];
    },
    addChild: function(_controller, _params, _modal, _sibling) {
        var stack;
        stack = _modal ? APP.modalStack : APP.Device.isHandheld || !APP.hasDetail ? APP.controllerStacks[APP.currentStack] : APP.detailStacks[APP.currentDetailStack];
        var screen = Alloy.createController(_controller, _params).getView();
        _sibling && stack.pop();
        stack.push(screen);
        APP.Device.isHandheld || !APP.hasDetail || _modal ? APP.addScreen(screen) : APP.addDetailScreen(screen);
    },
    removeChild: function(_modal) {
        var stack;
        stack = _modal ? APP.modalStack : APP.Device.isTablet && APP.hasDetail ? APP.detailStacks[APP.currentDetailStack] : APP.controllerStacks[APP.currentStack];
        stack[stack.length - 1];
        var previousStack;
        var previousScreen;
        stack.pop();
        if (0 === stack.length) {
            previousStack = APP.controllerStacks[APP.currentStack];
            if (APP.Device.isHandheld || !APP.hasDetail) {
                previousScreen = previousStack[previousStack.length - 1];
                APP.addScreen(previousScreen);
            } else {
                previousScreen = previousStack[0];
                _modal ? APP.addScreen(previousScreen) : APP.addDetailScreen(previousScreen);
            }
        } else {
            previousScreen = stack[stack.length - 1];
            APP.Device.isHandheld || !APP.hasDetail ? APP.addScreen(previousScreen) : _modal ? APP.addScreen(previousScreen) : APP.addDetailScreen(previousScreen);
        }
    },
    removeAllChildren: function(_modal) {
        var stack = _modal ? APP.modalStack : APP.controllerStacks[APP.currentStack];
        for (var i = stack.length - 1; i > 0; i--) stack.pop();
        APP.addScreen(stack[0]);
    },
    addScreen: function(_screen) {
        if (_screen) {
            APP.ContentWrapper.add(_screen);
            APP.previousScreen && APP.removeScreen(APP.previousScreen);
            APP.previousScreen = _screen;
        }
    },
    removeScreen: function(_screen) {
        if (_screen) {
            APP.ContentWrapper.remove(_screen);
            APP.previousScreen = null;
        }
    },
    addMasterScreen: function(_controller, _params) {
        var screen = Alloy.createController(_controller, _params).getView();
        APP.Master[APP.currentStack].add(screen);
    },
    addDetailScreen: function(_screen) {
        if (_screen) {
            APP.Detail[APP.currentStack].add(_screen);
            if (APP.previousDetailScreen && APP.previousDetailScreen != _screen) {
                var pop = true;
                "PARENT" == APP.detailStacks[APP.currentDetailStack][0].type && "PARENT" != _screen.type && (pop = false);
                APP.removeDetailScreen(APP.previousDetailScreen, pop);
            }
            APP.previousDetailScreen = _screen;
        }
    },
    removeDetailScreen: function(_screen, _pop) {
        if (_screen) {
            APP.Detail[APP.currentStack].remove(_screen);
            APP.previousDetailScreen = null;
            if (_pop) {
                var stack = APP.detailStacks[APP.currentDetailStack];
                stack.splice(0, stack.length - 1);
            }
        }
    },
    openSettings: function() {
        APP.log("debug", "APP.openSettings");
        APP.addChild("settings", {}, true);
    },
    closeSettings: function() {
        APP.modalStack.length > 0 && APP.removeChild(true);
    },
    toggleMenu: function() {
        APP.SlideMenuOpen ? APP.closeMenu() : APP.openMenu();
    },
    openMenu: function() {
        APP.SlideMenu.Wrapper.left = "0dp";
        APP.GlobalWrapper.animate({
            left: "200dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        APP.SlideMenuOpen = true;
    },
    closeMenu: function() {
        APP.GlobalWrapper.animate({
            left: "0dp",
            duration: 250,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT
        });
        APP.SlideMenuOpen = false;
    },
    openLoading: function() {
        APP.cancelLoading = false;
        setTimeout(function() {
            if (!APP.cancelLoading) {
                APP.loadingOpen = true;
                APP.GlobalWrapper.add(APP.Loading);
            }
        }, 100);
    },
    closeLoading: function() {
        APP.cancelLoading = true;
        if (APP.loadingOpen) {
            APP.GlobalWrapper.remove(APP.Loading);
            APP.loadingOpen = false;
        }
    },
    log: function(_severity, _text) {
        switch (_severity.toLowerCase()) {
          case "debug":
            Ti.API.debug(_text);
            break;

          case "error":
            Ti.API.error(_text);
            break;

          case "info":
            Ti.API.info(_text);
            break;

          case "log":
            Ti.API.log(_text);
            break;

          case "trace":
            Ti.API.trace(_text);
            break;

          case "warn":
            Ti.API.warn(_text);
        }
        var db = Ti.Database.open("ChariTi");
        var time = new Date().getTime();
        var type = UTIL.escapeString(_severity);
        var message = UTIL.escapeString(_text);
        db.execute("UPDATE log SET time = " + time + ", type = " + type + ", message = " + message + " WHERE time = (SELECT min(time) FROM log);");
        db.close();
    },
    logSend: function() {
        var db = Ti.Database.open("ChariTi");
        var data = db.execute('SELECT * FROM log WHERE message != "" ORDER BY time DESC;');
        var log = "\n\n=====\n\n" + APP.ID + " " + APP.VERSION + " (" + APP.CVERSION + ")\n" + APP.Device.os + " " + APP.Device.version + " (" + APP.Device.name + ") " + Ti.Platform.locale + "\n\n";
        while (data.isValidRow()) {
            log += "[" + data.fieldByName("type") + "] " + data.fieldByName("message") + "\n";
            data.next();
        }
        log += "\n=====";
        data.close();
        db.close();
        var email = Ti.UI.createEmailDialog({
            barColor: APP.Settings.colors.primary,
            subject: "Application Log",
            messageBody: log
        });
        email.isSupported && email.open();
    },
    orientationObserver: function(_event) {
        APP.log("debug", "APP.orientationObserver");
        if (APP.Device.statusBarOrientation && APP.Device.statusBarOrientation == _event.orientation) return;
        APP.Device.statusBarOrientation = _event.orientation;
        APP.Device.orientation = _event.orientation == Ti.UI.LANDSCAPE_LEFT || _event.orientation == Ti.UI.LANDSCAPE_RIGHT ? "LANDSCAPE" : "PORTRAIT";
        Ti.App.fireEvent("APP:orientationChange");
    },
    networkObserver: function(_event) {
        APP.log("debug", "APP.networkObserver");
        APP.Network.type = _event.networkTypeName;
        APP.Network.online = _event.online;
        Ti.App.fireEvent("APP:networkChange");
    },
    exitObserver: function() {
        APP.log("debug", "APP.exitObserver");
    },
    resumeObserver: function() {
        APP.log("debug", "APP.resumeObserver");
    },
    backButtonObserver: function() {
        APP.log("debug", "APP.backButtonObserver");
        if (APP.modalStack.length > 0) {
            APP.removeChild(true);
            return;
        }
        var stack;
        stack = APP.Device.isHandheld || !APP.hasDetail ? APP.controllerStacks[APP.currentStack] : APP.detailStacks[APP.currentDetailStack];
        stack.length > 1 ? APP.removeChild() : APP.MainWindow.close();
    }
};

module.exports = APP;
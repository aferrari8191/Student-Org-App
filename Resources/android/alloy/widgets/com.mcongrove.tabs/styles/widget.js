function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.mcongrove.tabs/" + s : s.substring(0, index) + "/com.mcongrove.tabs/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "TableView",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "WebView",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextArea",
    style: {
        scrollsToTop: false
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "ScrollView",
    style: {
        scrollsToTop: false
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "Wrapper",
    style: {
        height: "60dp",
        bottom: "0dp"
    }
}, {
    isId: true,
    priority: 100000.0026,
    key: "TabGroup",
    style: {
        height: "60dp",
        width: Ti.UI.FILL,
        bottom: "0dp"
    }
}, {
    isId: true,
    priority: 100000.0027,
    key: "Border",
    style: {
        top: "0dp",
        height: "1dp",
        width: Ti.UI.FILL,
        backgroundColor: "#000",
        opacity: .2
    }
}, {
    isId: true,
    priority: 100000.0028,
    key: "IndicatorContainer",
    style: {
        height: "59dp"
    }
}, {
    isId: true,
    priority: 100000.0029,
    key: "Indicator",
    style: {
        height: "59dp",
        bottom: "0dp",
        left: "0dp",
        backgroundColor: "#FFF",
        opacity: .4
    }
}, {
    isId: true,
    priority: 100000.003,
    key: "Overlay",
    style: {
        width: Ti.UI.FILL,
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0031,
    key: "TabContainer",
    style: {
        height: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0032,
    key: "Tabs",
    style: {
        layout: "horizontal",
        height: "60dp",
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0033,
    key: "TabGroupMore",
    style: {
        height: Ti.UI.SIZE,
        bottom: "60dp"
    }
}, {
    isId: true,
    priority: 100000.0034,
    key: "IndicatorMore",
    style: {
        height: "60dp",
        top: "0dp",
        left: "0dp",
        width: Ti.UI.FILL,
        backgroundColor: "#FFF",
        opacity: .4
    }
}, {
    isId: true,
    priority: 100000.0035,
    key: "TabContainerMore",
    style: {
        height: Ti.UI.SIZE,
        right: "0dp"
    }
}, {
    isId: true,
    priority: 100000.0036,
    key: "TabsMore",
    style: {
        layout: "vertical",
        height: Ti.UI.SIZE,
        bottom: "0dp"
    }
} ];
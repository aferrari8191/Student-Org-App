function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
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
    isClass: true,
    priority: 10000.0047,
    key: "ptr",
    style: {
        backgroundColor: "#eeeeee"
    }
}, {
    isClass: true,
    priority: 10000.0048,
    key: "ptrCenter",
    style: {
        bottom: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0049,
    key: "ptrArrow",
    style: {
        left: 8,
        width: 12,
        height: 30,
        image: WPATH("/images/grey.png")
    }
}, {
    isClass: true,
    priority: 10000.005,
    key: "ptrIndicator",
    style: {
        left: 0,
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.0052,
    key: "ptrText",
    style: {
        left: 30,
        color: "#777",
        font: {
            fontSize: 13,
            fontWeight: "bold"
        }
    }
} ];
function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.mcongrove.toast/" + s : s.substring(0, index) + "/com.mcongrove.toast/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("com.mcongrove.toast");
    this.__widgetId = "com.mcongrove.toast";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var CONFIG = arguments[0] || {};
    if (CONFIG.text) {
        var toast = Ti.UI.createNotification({
            message: CONFIG.text,
            duration: 2e3 > CONFIG.duration ? Ti.UI.NOTIFICATION_DURATION_SHORT : Ti.UI.NOTIFICATION_DURATION_LONG
        });
        toast.show();
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
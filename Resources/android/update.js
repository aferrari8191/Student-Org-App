var APP = require("core");

var HTTP = require("http");

var manifestCount = 0;

var onComplete;

exports.init = function(_params) {
    APP.log("debug", "UPDATE.init");
    _params ? HTTP.request({
        timeout: 1e4,
        type: "GET",
        format: "DATA",
        url: _params.url,
        success: exports.handleUpdate,
        passthrough: _params.callback
    }) : APP.ConfigurationURL && (Ti.App.Properties.getBool("OUTDATED", false) ? APP.log("error", "Configuration file not supported by this version") : HTTP.request({
        timeout: 1e4,
        type: "GET",
        format: "DATA",
        url: APP.ConfigurationURL,
        success: exports.handleUpdate
    }));
};

exports.handleUpdate = function(_data, _url, _callback) {
    APP.log("debug", "UPDATE.handleUpdate");
    var data = JSON.parse(_data);
    if ("undefined" == typeof _callback && data.version == APP.VERSION) {
        APP.log("info", "Application is up-to-date");
        return;
    }
    if (!Ti.App.Properties.getBool("OUTDATED", false)) {
        var current = parseInt(Ti.App.Properties.getString("CVERSION", APP.CVERSION).replace(".", ""), 10);
        var minimum = parseInt(data.minimumVersion.replace(".", ""), 10);
        if (minimum > current) {
            APP.log("error", "Configuration file not supported by this version");
            Ti.App.Properties.setBool("OUTDATED", true);
            var dialog = Ti.UI.createAlertDialog({
                title: "Update Available",
                message: "Please downloaded the latest version of this application"
            });
            dialog.show();
            return;
        }
    }
    data.manifest && exports.downloadManifest(data.manifest);
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "app.json");
    file.write(_data);
    file = null;
    onComplete = "undefined" == typeof _callback ? function() {
        var dialog = Ti.UI.createAlertDialog({
            title: "Update Available",
            message: "New content has been downloaded."
        });
        dialog.addEventListener("click", function() {
            APP.log("info", "Update accepted");
            APP.rebuild();
        });
        dialog.show();
    } : _callback;
};

exports.downloadManifest = function(_items) {
    APP.log("debug", "UPDATE.downloadManifest");
    manifestCount = _items.length;
    for (var i = 0, x = manifestCount; x > i; i++) HTTP.request({
        timeout: 1e4,
        type: "GET",
        format: "DATA",
        url: _items[i],
        success: exports.handleManifestItem
    });
};

exports.handleManifestItem = function(_data, _url) {
    APP.log("debug", "UPDATE.handleManifestItem");
    var filename = _url.substring(_url.lastIndexOf("/") + 1);
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename);
    file.write(_data);
    file = null;
    manifestCount--;
    if (0 === manifestCount) {
        onComplete();
        onComplete = null;
    }
};
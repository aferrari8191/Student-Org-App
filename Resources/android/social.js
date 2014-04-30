var APP = require("core");

var SOCIAL;

exports.share = function(_url, _view) {
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_SEND,
        type: "text/plain"
    });
    intent.putExtra(Ti.Android.EXTRA_TEXT, APP.Settings.share + " " + _url);
    Ti.Android.currentActivity.startActivity(intent);
};
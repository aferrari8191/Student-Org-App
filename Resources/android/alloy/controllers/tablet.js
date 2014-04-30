function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tablet";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        backgroundColor: "#DDD",
        id: "Wrapper",
        type: "tablet"
    });
    $.__views.Wrapper && $.addTopLevelView($.__views.Wrapper);
    $.__views.Master = Ti.UI.createView({
        left: "0dp",
        top: "0dp",
        width: "320dp",
        id: "Master"
    });
    $.__views.Wrapper.add($.__views.Master);
    $.__views.Detail = Ti.UI.createView({
        left: "321dp",
        top: "0dp",
        width: Ti.UI.FILL,
        id: "Detail"
    });
    $.__views.Wrapper.add($.__views.Detail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP = require("core");
    var CONFIG = arguments[0];
    APP.Master[APP.currentStack] = $.Master;
    APP.Detail[APP.currentStack] = $.Detail;
    APP.addChild("tablet_detail");
    APP.addMasterScreen(CONFIG.type.toLowerCase(), CONFIG, $.Wrapper);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
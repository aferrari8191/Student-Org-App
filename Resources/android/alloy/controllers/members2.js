function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "members2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Wrapper = Ti.UI.createView({
        layout: "vertical",
        id: "Wrapper",
        name: "Members"
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
    $.__views.__alloyId21 = Ti.UI.createView({
        backgroundColor: "black",
        width: Titanium.UI.FILL,
        height: "30dp",
        id: "__alloyId21"
    });
    $.__views.container.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        text: "Executive Board",
        left: "32dp",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId24"
    });
    $.__views.container.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        text: "President: Eric Sundquist",
        left: "32dp",
        color: "white",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId28"
    });
    $.__views.container.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        text: "Vice President: Kevin Barbour",
        left: "32dp",
        color: "white",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId32"
    });
    $.__views.container.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        text: "Annotator: Paul Oshefsky",
        left: "32dp",
        color: "white",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId34"
    });
    $.__views.__alloyId32.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId35"
    });
    $.__views.__alloyId32.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId36"
    });
    $.__views.container.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "Questor: Tim Keenen",
        left: "32dp",
        color: "white",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId39"
    });
    $.__views.__alloyId36.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId40"
    });
    $.__views.container.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "Magister: Clyde Giddings",
        left: "32dp",
        color: "white",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId43"
    });
    $.__views.__alloyId40.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId44"
    });
    $.__views.container.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Tribune: Brett Kearns",
        left: "32dp",
        color: "white",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId46"
    });
    $.__views.__alloyId44.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId47"
    });
    $.__views.__alloyId44.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId48"
    });
    $.__views.container.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "Kustos: Alex Saunders",
        left: "32dp",
        color: "white",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId50"
    });
    $.__views.__alloyId48.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId51"
    });
    $.__views.__alloyId48.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        backgroundColor: "black",
        width: Titanium.UI.FILL,
        height: "30dp",
        id: "__alloyId52"
    });
    $.__views.container.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        text: "Chairman Postions",
        left: "32dp",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId55"
    });
    $.__views.container.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        text: "Recruitment: Chris Harms",
        left: "32dp",
        color: "white",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId58"
    });
    $.__views.__alloyId55.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId59"
    });
    $.__views.container.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        text: "Philanthropy: Richie Franz",
        left: "32dp",
        color: "white",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId61"
    });
    $.__views.__alloyId59.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId62"
    });
    $.__views.__alloyId59.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId63"
    });
    $.__views.container.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        text: "Brotherhood: Brett Weyers",
        left: "32dp",
        color: "white",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId65"
    });
    $.__views.__alloyId63.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId66"
    });
    $.__views.__alloyId63.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId67"
    });
    $.__views.container.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        text: "Derby Days: Domenic Pellicori",
        left: "32dp",
        color: "white",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId69"
    });
    $.__views.__alloyId67.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId70"
    });
    $.__views.__alloyId67.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId71"
    });
    $.__views.container.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        text: "Risk Management: Mike Stefik",
        left: "32dp",
        color: "white",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId73"
    });
    $.__views.__alloyId71.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId74"
    });
    $.__views.__alloyId71.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId75"
    });
    $.__views.container.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        text: "Chapter Editor: Dan Zeilinski",
        left: "32dp",
        color: "white",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId79"
    });
    $.__views.container.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        text: "Historian : Casey Mullins",
        left: "32dp",
        color: "white",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId81"
    });
    $.__views.__alloyId79.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId82"
    });
    $.__views.__alloyId79.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId83"
    });
    $.__views.container.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        text: "Greek Council: Ben Wenzel",
        left: "32dp",
        color: "white",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId85"
    });
    $.__views.__alloyId83.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId86"
    });
    $.__views.__alloyId83.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId87"
    });
    $.__views.container.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        text: "PR: Chris Harms-",
        left: "32dp",
        color: "white",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId89"
    });
    $.__views.__alloyId87.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId91"
    });
    $.__views.container.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        text: "Scholarship: Brendan Semph",
        left: "32dp",
        color: "white",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId93"
    });
    $.__views.__alloyId91.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId94"
    });
    $.__views.__alloyId91.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId95"
    });
    $.__views.container.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        text: "Community Service: Alex Shott",
        left: "32dp",
        color: "white",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId97"
    });
    $.__views.__alloyId95.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId98"
    });
    $.__views.__alloyId95.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId99"
    });
    $.__views.container.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        text: "Greek Week/ Greek Olypmics: Matt Nordman",
        left: "32dp",
        color: "white",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId101"
    });
    $.__views.__alloyId99.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId102"
    });
    $.__views.__alloyId99.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId103"
    });
    $.__views.container.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        text: "Formal: Drew Kendl",
        left: "32dp",
        color: "white",
        id: "__alloyId104"
    });
    $.__views.__alloyId103.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId105"
    });
    $.__views.__alloyId103.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId106"
    });
    $.__views.__alloyId103.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId107"
    });
    $.__views.container.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        text: "Intermural: Taylor Koss",
        left: "32dp",
        color: "white",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId110"
    });
    $.__views.__alloyId107.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId111"
    });
    $.__views.container.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        text: "T-Shirt: Dom Pelicori",
        left: "32dp",
        color: "white",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId113"
    });
    $.__views.__alloyId111.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId114"
    });
    $.__views.__alloyId111.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId115"
    });
    $.__views.container.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        text: "Sweethheart: Kevin Barbour",
        left: "32dp",
        color: "white",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId117"
    });
    $.__views.__alloyId115.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId118"
    });
    $.__views.__alloyId115.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId119"
    });
    $.__views.container.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        text: "Social: Drew Kendl",
        left: "32dp",
        color: "white",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId121"
    });
    $.__views.__alloyId119.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId122"
    });
    $.__views.__alloyId119.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId123"
    });
    $.__views.container.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        text: "Fundraising: Alex Schott",
        left: "32dp",
        color: "white",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId125"
    });
    $.__views.__alloyId123.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId126"
    });
    $.__views.__alloyId123.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId127"
    });
    $.__views.container.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        text: "Parent: Mitch Horne",
        left: "32dp",
        color: "white",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId129"
    });
    $.__views.__alloyId127.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId130"
    });
    $.__views.__alloyId127.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId131"
    });
    $.__views.container.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        text: "Ritual: Nicholas Mangini",
        left: "32dp",
        color: "white",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId133"
    });
    $.__views.__alloyId131.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId134"
    });
    $.__views.__alloyId131.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId135"
    });
    $.__views.container.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "Judicial: Brett Weyers",
        left: "32dp",
        color: "white",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId137"
    });
    $.__views.__alloyId135.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId138"
    });
    $.__views.__alloyId135.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createView({
        backgroundColor: "black",
        width: Titanium.UI.FILL,
        height: "30dp",
        id: "__alloyId139"
    });
    $.__views.container.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        text: "Brothers",
        left: "32dp",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId141"
    });
    $.__views.__alloyId139.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId142"
    });
    $.__views.container.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        text: "Anthony Ferrari",
        left: "32dp",
        color: "white",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId144"
    });
    $.__views.__alloyId142.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId145"
    });
    $.__views.__alloyId142.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId146"
    });
    $.__views.container.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        text: "Frank Berg",
        left: "32dp",
        color: "white",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId149"
    });
    $.__views.__alloyId146.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId150"
    });
    $.__views.container.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        text: "Niko Giuliani",
        left: "32dp",
        color: "white",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId152"
    });
    $.__views.__alloyId150.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId153"
    });
    $.__views.__alloyId150.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId154"
    });
    $.__views.container.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        text: "Andrew La Fleur",
        left: "32dp",
        color: "white",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId156"
    });
    $.__views.__alloyId154.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId157"
    });
    $.__views.__alloyId154.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId158"
    });
    $.__views.container.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        text: "Peter Smith",
        left: "32dp",
        color: "white",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId161"
    });
    $.__views.__alloyId158.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId162"
    });
    $.__views.container.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        text: "Jordan Matis",
        left: "32dp",
        color: "white",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId164"
    });
    $.__views.__alloyId162.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId165"
    });
    $.__views.__alloyId162.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId166"
    });
    $.__views.container.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        text: "Mike Casali",
        left: "32dp",
        color: "white",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId168"
    });
    $.__views.__alloyId166.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId169"
    });
    $.__views.__alloyId166.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId170"
    });
    $.__views.container.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        text: "Brian Lynch",
        left: "32dp",
        color: "white",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId172"
    });
    $.__views.__alloyId170.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId173"
    });
    $.__views.__alloyId170.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId174"
    });
    $.__views.container.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        text: "Ryan Dresden",
        left: "32dp",
        color: "white",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId176"
    });
    $.__views.__alloyId174.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId177"
    });
    $.__views.__alloyId174.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId178"
    });
    $.__views.container.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        text: "Brandon Moy",
        left: "32dp",
        color: "white",
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId180"
    });
    $.__views.__alloyId178.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId181"
    });
    $.__views.__alloyId178.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId182"
    });
    $.__views.container.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        text: "William Casey",
        left: "32dp",
        color: "white",
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId184"
    });
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId185"
    });
    $.__views.__alloyId182.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId186"
    });
    $.__views.container.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        text: "Josh Wicks",
        left: "32dp",
        color: "white",
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId188"
    });
    $.__views.__alloyId186.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId189"
    });
    $.__views.__alloyId186.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId190"
    });
    $.__views.container.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "Parker Kring",
        left: "32dp",
        color: "white",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId192"
    });
    $.__views.__alloyId190.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId193"
    });
    $.__views.__alloyId190.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId194"
    });
    $.__views.container.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        text: "Chris Kirst",
        left: "32dp",
        color: "white",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId196"
    });
    $.__views.__alloyId194.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId197"
    });
    $.__views.__alloyId194.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId198"
    });
    $.__views.container.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "Luke Wagner",
        left: "32dp",
        color: "white",
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId200"
    });
    $.__views.__alloyId198.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId201"
    });
    $.__views.__alloyId198.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId202"
    });
    $.__views.container.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "Tim Keenan",
        left: "32dp",
        color: "white",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId204"
    });
    $.__views.__alloyId202.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId205"
    });
    $.__views.__alloyId202.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        backgroundColor: "#0380BA",
        width: Titanium.UI.FILL,
        height: "64dp",
        id: "__alloyId206"
    });
    $.__views.container.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        text: "Joe Love",
        left: "32dp",
        color: "white",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createImageView({
        image: "",
        right: "0dp",
        height: Ti.UI.Fill,
        id: "__alloyId208"
    });
    $.__views.__alloyId206.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        backgroundColor: "white",
        width: Titanium.UI.FILL,
        height: "1dp",
        bottom: "0dp",
        id: "__alloyId209"
    });
    $.__views.__alloyId206.add($.__views.__alloyId209);
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
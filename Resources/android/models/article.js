function Model() {
    var TID;
    this.init = function(_id) {
        APP.log("debug", "ARTICLE.init(" + _id + ")");
        TID = _id;
        var db = Ti.Database.open("ChariTi");
        db.execute("CREATE TABLE IF NOT EXISTS article_" + TID + " (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, date TEXT, description TEXT, link TEXT, image TEXT);");
        db.close();
    };
    this.fetch = function(_params) {
        APP.log("debug", "ARTICLE.fetch");
        APP.log("trace", JSON.stringify(_params));
        var isStale = UTIL.isStale(_params.url, _params.cache);
        if (isStale) {
            0 !== _params.cache && "new" !== isStale && _params.callback();
            HTTP.request({
                timeout: 1e4,
                type: "GET",
                format: "TEXT",
                url: _params.url,
                passthrough: _params.callback,
                success: this.handleData,
                failure: _params.error
            });
        } else _params.callback();
    };
    this.handleData = function(_data, _url, _callback) {
        APP.log("debug", "ARTICLE.handleData");
        var xml = Ti.XML.parseString(UTIL.xmlNormalize(_data));
        var nodes = xml.documentElement.getElementsByTagName("item");
        if (nodes.length > 0) {
            var db = Ti.Database.open("ChariTi");
            db.execute("DELETE FROM article_" + TID + ";");
            db.execute("BEGIN TRANSACTION;");
            for (var i = 0, x = nodes.length; x > i; i++) {
                var title = UTIL.cleanEscapeString(nodes.item(i).getElementsByTagName("title").item(0).text);
                var date = UTIL.escapeString(new Date(UTIL.cleanString(nodes.item(i).getElementsByTagName("pubDate").item(0).text)).getTime());
                var description = UTIL.cleanEscapeString(nodes.item(i).getElementsByTagName("description").item(0).text);
                var link = UTIL.escapeString(nodes.item(i).getElementsByTagName("link").item(0).text);
                var image = null;
                nodes.item(i).getElementsByTagName("media:content").length > 0 && (image = UTIL.escapeString(nodes.item(i).getElementsByTagName("media:content").item(0).attributes.getNamedItem("url").nodeValue));
                db.execute("INSERT INTO article_" + TID + " (id, title, date, description, link, image) VALUES (NULL, " + title + ", " + date + ", " + description + ", " + link + ", " + image + ");");
            }
            db.execute("INSERT OR REPLACE INTO updates (url, time) VALUES(" + UTIL.escapeString(_url) + ", " + new Date().getTime() + ");");
            db.execute("END TRANSACTION;");
            db.close();
        }
        _callback && _callback();
    };
    this.getAllArticles = function() {
        APP.log("debug", "ARTICLE.getAllArticles");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id, title, date FROM article_" + TID + " ORDER BY id ASC LIMIT 25;");
        var temp = [];
        while (data.isValidRow()) {
            temp.push({
                id: data.fieldByName("id"),
                title: data.fieldByName("title"),
                date: data.fieldByName("date")
            });
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
    this.getArticle = function(_id) {
        APP.log("debug", "ARTICLE.getArticle");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT * FROM article_" + TID + " WHERE id = " + UTIL.cleanEscapeString(_id) + ";");
        var temp;
        while (data.isValidRow()) {
            temp = {
                id: data.fieldByName("id"),
                title: data.fieldByName("title"),
                date: data.fieldByName("date"),
                description: data.fieldByName("description"),
                link: data.fieldByName("link"),
                image: null
            };
            data.fieldByName("image") && (temp.image = data.fieldByName("image"));
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
    this.getNextArticle = function(_id) {
        APP.log("debug", "ARTICLE.getNextArticle");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id FROM article_" + TID + " WHERE id > " + UTIL.cleanEscapeString(_id) + " ORDER BY id ASC LIMIT 1;");
        0 === data.rowCount && (data = db.execute("SELECT id FROM article_" + TID + " ORDER BY id ASC LIMIT 1;"));
        var temp;
        while (data.isValidRow()) {
            temp = {
                id: data.fieldByName("id")
            };
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
    this.getPreviousArticle = function(_id) {
        APP.log("debug", "ARTICLE.getPreviousArticle");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id FROM article_" + TID + " WHERE id < " + UTIL.cleanEscapeString(_id) + " ORDER BY id DESC LIMIT 1;");
        0 === data.rowCount && (data = db.execute("SELECT id FROM article_" + TID + " ORDER BY id DESC LIMIT 1;"));
        var temp;
        while (data.isValidRow()) {
            temp = {
                id: data.fieldByName("id")
            };
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
}

var APP = require("core");

var HTTP = require("http");

var UTIL = require("utilities");

module.exports = function() {
    return new Model();
};
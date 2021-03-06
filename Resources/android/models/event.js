function Model() {
    var TID;
    this.init = function(_id) {
        APP.log("debug", "EVENT.init(" + _id + ")");
        TID = _id;
        var db = Ti.Database.open("ChariTi");
        db.execute("CREATE TABLE IF NOT EXISTS event_" + TID + " (id TEXT PRIMARY KEY, title TEXT, date_start TEXT, date_end TEXT, location TEXT, description TEXT);");
        db.close();
    };
    this.fetch = function(_params) {
        APP.log("debug", "EVENT.fetch");
        APP.log("trace", JSON.stringify(_params));
        var isStale = UTIL.isStale(_params.url, _params.cache);
        if (isStale) {
            0 !== _params.cache && "new" !== isStale && _params.callback();
            HTTP.request({
                timeout: 1e4,
                type: "GET",
                format: "JSON",
                url: _params.url,
                passthrough: _params.callback,
                success: this.handleData,
                failure: _params.error
            });
        } else _params.callback();
    };
    this.handleData = function(_data, _url, _callback) {
        APP.log("debug", "EVENT.handleData");
        if (_data.data.length > 0) {
            var db = Ti.Database.open("ChariTi");
            db.execute("DELETE FROM event_" + TID + ";");
            db.execute("BEGIN TRANSACTION;");
            for (var i = 0, x = _data.data.length; x > i; i++) {
                var event = _data.data[i];
                var date_start = "";
                var date_end = "";
                if (event.start_time) {
                    date_start = event.start_time.split("T")[0].replace(/-/g, "/") + " " + event.start_time.split("T")[1].split("-")[0];
                    date_start = new Date(date_start).getTime();
                }
                if (event.end_time) {
                    date_end = event.end_time.split("T")[0].replace(/-/g, "/") + " " + event.end_time.split("T")[1].split("-")[0];
                    date_end = new Date(date_end).getTime();
                }
                var id = UTIL.escapeString(event.id);
                var title = UTIL.cleanEscapeString(event.name);
                date_start = UTIL.escapeString(date_start);
                date_end = UTIL.escapeString(date_end);
                var location = UTIL.cleanEscapeString(event.location);
                var description = UTIL.cleanEscapeString(event.description);
                db.execute("INSERT OR REPLACE INTO event_" + TID + " (id, title, date_start, date_end, location, description) VALUES (" + id + ", " + title + ", " + date_start + ", " + date_end + ", " + location + ", " + description + ");");
            }
            db.execute("INSERT OR REPLACE INTO updates (url, time) VALUES(" + UTIL.escapeString(_url) + ", " + new Date().getTime() + ");");
            db.execute("END TRANSACTION;");
            db.close();
        }
        _callback && _callback();
    };
    this.getAllEvents = function() {
        APP.log("debug", "EVENT.getAllEvents");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id, title, date_start FROM event_" + TID + " ORDER BY date_start ASC;");
        var temp = [];
        while (data.isValidRow()) {
            temp.push({
                id: data.fieldByName("id"),
                title: data.fieldByName("title"),
                date_start: data.fieldByName("date_start")
            });
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
    this.getEvent = function(_id) {
        APP.log("debug", "EVENT.getEvent");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT * FROM event_" + TID + " WHERE id = " + UTIL.cleanEscapeString(_id) + ";");
        var temp;
        while (data.isValidRow()) {
            temp = {
                id: data.fieldByName("id"),
                title: data.fieldByName("title"),
                date_start: data.fieldByName("date_start"),
                date_end: data.fieldByName("date_end"),
                location: data.fieldByName("location"),
                description: data.fieldByName("description")
            };
            data.next();
        }
        data.close();
        db.close();
        return temp;
    };
    this.getNextEvent = function(_date) {
        APP.log("debug", "EVENT.getNextEvent");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id FROM event_" + TID + " WHERE date_start > " + UTIL.cleanEscapeString(_date) + " ORDER BY date_start ASC LIMIT 1;");
        0 == data.rowCount && (data = db.execute("SELECT id FROM event_" + TID + " ORDER BY date_start ASC LIMIT 1;"));
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
    this.getPreviousEvent = function(_date) {
        APP.log("debug", "EVENT.getPreviousEvent");
        var db = Ti.Database.open("ChariTi");
        var data = db.execute("SELECT id FROM event_" + TID + " WHERE date_start < " + UTIL.cleanEscapeString(_date) + " ORDER BY date_start DESC LIMIT 1;");
        0 == data.rowCount && (data = db.execute("SELECT id FROM event_" + TID + " ORDER BY date_start DESC LIMIT 1;"));
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
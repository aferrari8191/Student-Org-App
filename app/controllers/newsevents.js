/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var APP = require("core");
//TODO: create onClick events for different tabs & news items for newsevents tab
//TODO: create new views for those different items
var Cloud = require("ti.cloud");
var init = function() {
	//loginUser();
	
	$.index.open();
};

var loginUser = function() {
Cloud.Users.login({
    login: 'test@test.com',
    password: 'test_password'
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'sessionId: ' + Cloud.sessionId + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
};

var getallthethings = function() {
Cloud.Objects.query({
    classname: 'cars',
    page: 1,
    per_page: 10,
  // "want everything, get rid of where claus"  where: {
        //color: 'blue'
    //}
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.cars.length);
        for (var i = 0; i < e.cars.length; i++) {
            var car = e.cars[i];
            alert('id: ' + cars.id + '\n' +
                'make: ' + car.make + '\n' +
                'color: ' + car.color + '\n' +
                'year: ' + car.year + '\n' +
                'created_at: ' + car.created_at);
        }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
};







// previous stuff
var CONFIG = arguments[0];

APP.log("debug", "text | " + JSON.stringify(CONFIG));

$.heading.text = CONFIG.heading;
$.heading.color = APP.Settings.colors.hsb.primary.b > 70 ? "#000" : APP.Settings.colors.primary;
$.text.text = CONFIG.text;

$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary);

if(CONFIG.isChild === true) {
	$.NavigationBar.showBack(function(_event) {
		APP.removeChild();
	});
} else {
	if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu(function(_event) {
			APP.toggleMenu();
		});
	} else {
		$.NavigationBar.showSettings(function(_event) {
			APP.openSettings();
		});
	}
}
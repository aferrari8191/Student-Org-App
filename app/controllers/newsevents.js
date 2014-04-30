var APP = require("core");
var Cloud = require("ti.cloud");
var CONFIG = arguments[0];
var init = function() {
	APP.log("debug", "text | " + JSON.stringify(CONFIG));

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

	loginUser();
};
//TODO: read comments below. make changes, test. 
var makeSomeThing = function() {
	Cloud.Objects.create({
		classname: 'News',
		fields: {
			title: 'Geekweek with Bill Nye',
			author: 'Jessica Smith',
			logo: "/images/news1.png", // change this to thumbnail for article
			menuId: 0,
			bodyText: "Geek out over Bill Nye, award winning scientist, engineer, comedian, author, inventor, and man on a mission to help people everywhere understand and appreciate the science that makes our world work. Nye, a mechanical engineer by training, combined his love of science with his flair for comedy into a side job as a comedy writer and performer, and has been entertaining and educating children of all ages ever since." // change this to be article content
		}
	}, function(e) {
		if(e.success) {

			Ti.API.info("=====");
			Ti.API.info("Inspecting Object e: " + e);
			for(var thing in e) {
				Ti.API.info("e." + thing + " = " + e[thing]);
			}
			Ti.API.info("=====");

			var test = e.News[0];
			alert('Success:\n' + 'id: ' + test.id + '\n' + 'title: ' + test.title);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

var getAllTheThings = function() {
	Cloud.Objects.query({
		classname: 'News',
		page: 1,
		per_page: 50
	}, function(e) {
		if(e.success) {
			var rows = [];
			alert('Success:\n' + 'Count: ' + e.News.length);
			for(var i = 0; i < e.News.length; i++) {
				var newse = e.News[i];
				//alert('id: ' + newse.id + '\n' + 'title: ' + newse.title );
				var row = Ti.UI.createTableViewRow({
					layout: "vertical",
					hasChild: true,
					title: newse.title,
					bodyText: newse.bodyText
				});
				var title = Ti.UI.createLabel({
					text: newse.title,
					font: {
						fontFamily: "bold",
						fontSize: "22dp"
					},
					left: "10dp"
				});
				var author = Ti.UI.createLabel({
					text: "by: " + newse.author, // TODO: added "by:" thing... hopefully this works. delete comment if it does. 
					left: "10dp"
				});
				row.add(title);
				row.add(author);
				rows.push(row);
			}
			$.myStuff.setData(rows);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};
// TODO: change login details to test user already created in our acs account. 
var loginUser = function() {
	Cloud.Users.login({
		login: 'email@email.org',
		password: 'email'
	}, function(e) {
		if(e.success) {
			var user = e.users[0];
			alert('Success:\n' + 'id: ' + user.id);
			//makeSomeThing(); //uncomment this to create items. comment again when done. 
			getAllTheThings();
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
};

$.myStuff.addEventListener("click", function(e) {
	APP.addChild("text", {
		heading: e.row.title,
		text: e.row.bodyText
	});
});

init();

// previous stuff

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
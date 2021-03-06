/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */
var CONFIG = arguments[0];
var APP = require("core");
var Cloud = require("ti.cloud");

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

//need actual phone for otherwise comment out
$.emailbtn.addEventListner("click",function(){
	
var emailDialog = Ti.UI.createEmailDialog()
emailDialog.subject = "Questions about/for Sigma Chi";
emailDialog.toRecipients = ['sigmachilambdachi@gmail.com'];
emailDialog.messageBody = '<b>Sent from Mobile App</b>';
emailDialog.open();
)};

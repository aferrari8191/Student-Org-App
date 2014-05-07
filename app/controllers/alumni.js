/**
 * Controller for the text screen
 *
 * @class Controllers.text
 * @uses core
 */

// ********The commented out code is waiting for website to be updated so we can pull from the website directly.*********

var APP = require("core");
//TODO: let alumni be onClick and bring up details on each w/ view. 
//TODO: change views etc into TableViews... should work better for listing students, etc. 
//TODO: check out quinn's cloud example from 4-21 to get info about array, looping etc pushing stuff to tableview
// HASCHILD!!!!!!

//$.myStuff.addEventListener("click", function(e)){
//APP.addChild("text")	
//};
/*var showInfo = Ti.UI.createView({
	backgroundColor: 'white',
	width: '100dp',
	height: '100dp'
});
showInfo.addEventListener('click', doClick);
add(showInfo);
//stuff from xml= id="showInfo" onClick="doClick" 
*/
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
windowFunctions['Approve Friends'] = function (evt) {
    var win = createWindow();
    var offset = addBackButton(win);

	var checked = [];

    var table = Ti.UI.createTableView({
        backgroundColor: '#fff',
        top: offset + u, bottom: 0,
        data: [
            { title: 'Loading, please wait...' }
        ]
    });

    table.addEventListener('click', function (evt) {
        if (evt.row.id) {
            evt.row.hasCheck = !evt.row.hasCheck;
	        if (evt.row.hasCheck) {
		        checked.push(evt.row.id);
	        } else {
		        checked.splice(checked.indexOf(evt.row.id),1);
	        }
        } else if (checked.length == 0) {
            alert('No users selected');
        } else {
			Cloud.Friends.approve({
				user_ids: checked.join(",")
			}, function(e) {
		        if (e.success) {
			        alert('Friend(s) approved');
		        } else {
			        error(e);
		        }
	        });
        }
    });
    win.add(table);

    function getRequests() {
        
    }

    win.addEventListener('open', getRequests);
    win.open();
};
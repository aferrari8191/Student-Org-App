module.exports = [{"isApi":true,"priority":1000.0002,"key":"TableView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0003,"key":"WebView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0004,"key":"TextArea","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0005,"key":"ScrollView","style":{scrollsToTop:false,}},{"isClass":true,"priority":10000.0052,"key":"ptr","style":{backgroundColor:"#eeeeee",}},{"isClass":true,"priority":10000.0053,"key":"ptrCenter","style":{bottom:10,width:Ti.UI.SIZE,height:Ti.UI.SIZE,}},{"isClass":true,"priority":10000.0054,"key":"ptrArrow","style":{left:8,width:12,height:30,image:WPATH('/images/grey.png'),}},{"isClass":true,"priority":10000.0055,"key":"ptrIndicator","style":{left:0,style:Ti.UI.ActivityIndicatorStyle.DARK,}},{"isClass":true,"priority":10000.0057,"key":"ptrText","style":{left:30,color:"#777",font:{fontSize:13,fontWeight:"bold",},}}];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
		'nl.fokkezb.pullToRefresh/' + s :
		s.substring(0,index) + '/nl.fokkezb.pullToRefresh/' + s.substring(index+1);

	// TODO: http://jira.appcelerator.org/browse/ALOY-296
	return OS_ANDROID && path.indexOf('/') !== 0 ? '/' + path : path;
}
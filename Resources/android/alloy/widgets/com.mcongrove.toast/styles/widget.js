module.exports = [{"isApi":true,"priority":1000.0002,"key":"TableView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0003,"key":"WebView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0004,"key":"TextArea","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0005,"key":"ScrollView","style":{scrollsToTop:false,}},{"isId":true,"priority":100000.0037,"key":"Wrapper","style":{width:Ti.UI.FILL,height:"70dp",bottom:"0dp",}},{"isId":true,"priority":100000.0038,"key":"Modal","style":{top:"70dp",width:"280dp",height:"30dp",borderRadius:5,backgroundColor:"#000",}},{"isId":true,"priority":100000.0039,"key":"textLabel","style":{top:"0dp",left:"0dp",right:"0dp",height:"30dp",color:"#FFF",textAlign:"center",font:{fontSize:13,fontWeight:"bold",},}}];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
		'com.mcongrove.toast/' + s :
		s.substring(0,index) + '/com.mcongrove.toast/' + s.substring(index+1);

	// TODO: http://jira.appcelerator.org/browse/ALOY-296
	return OS_ANDROID && path.indexOf('/') !== 0 ? '/' + path : path;
}
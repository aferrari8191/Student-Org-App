module.exports = [{"isApi":true,"priority":1000.0002,"key":"TableView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0003,"key":"WebView","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0004,"key":"TextArea","style":{scrollsToTop:false,}},{"isApi":true,"priority":1000.0005,"key":"ScrollView","style":{scrollsToTop:false,}},{"isId":true,"priority":100000.0007,"key":"Wrapper","style":{width:"66dp",height:"12dp",top:"17dp",}},{"isId":true,"priority":100000.0008,"key":"arrowUpWrapper","style":{width:"22dp",height:"12dp",top:"0dp",left:"0dp",}},{"isId":true,"priority":100000.0009,"key":"arrowUp","style":{width:"22dp",height:"12dp",top:"0dp",left:"0dp",preventDefaultImage:true,}},{"isId":true,"priority":100000.001,"key":"arrowDownWrapper","style":{width:"22dp",height:"12dp",top:"0dp",right:"0dp",}},{"isId":true,"priority":100000.0011,"key":"arrowDown","style":{width:"22dp",height:"12dp",top:"0dp",right:"0dp",preventDefaultImage:true,}}];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
		'com.mcongrove.detailNavigation/' + s :
		s.substring(0,index) + '/com.mcongrove.detailNavigation/' + s.substring(index+1);

	// TODO: http://jira.appcelerator.org/browse/ALOY-296
	return OS_ANDROID && path.indexOf('/') !== 0 ? '/' + path : path;
}
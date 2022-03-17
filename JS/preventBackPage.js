function preventBackPage(){
	setTimeout("window.history.forward();", 0);
	window.onunload = function () {};
}
preventBackPage();
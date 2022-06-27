function addfilesIndex() {
	let httpLink;
	let hostName = window.location.host;

	if (hostName === "johnchourp.github.io") {
		httpLink = "https://";
		hostName = window.location.host + "/driver-license-test";

	} else {
		hostName = window.location.host;
		httpLink = "http://";
	}

	let bodyCSS = document.createElement("link");
	bodyCSS.rel = "stylesheet";
	bodyCSS.type = "text/css";
	bodyCSS.href = httpLink + hostName + "/CSS/body.css";

	let testsCSS = document.createElement("link");
	testsCSS.rel = "stylesheet";
	testsCSS.type = "text/css";
	testsCSS.href = httpLink + hostName + "/CSS/tests.css";

	document.head.appendChild(bodyCSS);
	document.head.appendChild(testsCSS);
}
addfilesIndex();

function filesHrefIndex() {
	let httpLink;
	let hostName = window.location.host;

	if (hostName === "johnchourp.github.io") {
		httpLink = "https://";
		hostName = window.location.host + "/driver-license-test";

	} else {
		hostName = window.location.host;
		httpLink = "http://";
	}
	let tests = document.getElementsByClassName("tests");
	tests.item(0).href = httpLink + hostName + "/TaKuriaOrganaTouOximatosKaiTaXeiristiriaStoXoroOdigisis/test.html";
}


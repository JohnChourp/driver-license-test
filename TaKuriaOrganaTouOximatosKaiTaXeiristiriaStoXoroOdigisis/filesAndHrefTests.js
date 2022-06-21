function addfilesTests() {
	let httpLink;
	let hostName = window.location.host;

	if (hostName === "johnchourp.github.io") {
		httpLink = "https://";
		hostName = window.location.host + "driver-license-test";

	} else {
		hostName = window.location.host;
		httpLink = "http://";
	}

	let bodyCSS = document.createElement("link");
	bodyCSS.rel = "stylesheet";
	bodyCSS.type = "text/css";
	bodyCSS.href = httpLink + hostName + "/CSS/body.css";

	let imgPhotoQuestionCSS = document.createElement("link");
	imgPhotoQuestionCSS.rel = "stylesheet";
	imgPhotoQuestionCSS.type = "text/css";
	imgPhotoQuestionCSS.href = httpLink + hostName + "/CSS/photoQuestions.css";

	let nextButtonsCSS = document.createElement("link");
	nextButtonsCSS.rel = "stylesheet";
	nextButtonsCSS.type = "text/css";
	nextButtonsCSS.href = httpLink + hostName + "/CSS/nextButtons.css";

	let radioCheckboxCSS = document.createElement("link");
	radioCheckboxCSS.rel = "stylesheet";
	radioCheckboxCSS.type = "text/css";
	radioCheckboxCSS.href = httpLink + hostName + "/CSS/radioCheckbox.css";

	document.head.appendChild(bodyCSS);
	document.head.appendChild(imgPhotoQuestionCSS);
	document.head.appendChild(nextButtonsCSS);
	document.head.appendChild(radioCheckboxCSS);

	let testJS = document.createElement("script");
	testJS.type = "text/javascript";
	testJS.src = httpLink + hostName + "/TaKuriaOrganaTouOximatosKaiTaXeiristiriaStoXoroOdigisis/test.js";

	document.head.appendChild(testJS);
}
addfilesTests();

function filesHrefTests() {
	let httpLink;
	let hostName = window.location.host;

	if (hostName === "johnchourp.github.io") {
		httpLink = "https://";
		hostName = window.location.host + "driver-license-test";

	} else {
		hostName = window.location.host;
		httpLink = "http://";
	}
	let imgPhotoQuestion = document.getElementsByClassName("imgPhotoQuestion");
	imgPhotoQuestion.item(0).src = httpLink + hostName + "/Photos/TaKuriaOrganaTouOximatosKaiTaXeiristiriaStoXoroOdigisis/kef1-01.png";
	imgPhotoQuestion.item(1).src = httpLink + hostName + "/Photos/TaKuriaOrganaTouOximatosKaiTaXeiristiriaStoXoroOdigisis/kef1-02.png";
	imgPhotoQuestion.item(2).src = httpLink + hostName + "/Photos/TaKuriaOrganaTouOximatosKaiTaXeiristiriaStoXoroOdigisis/kef1-03.png";
}


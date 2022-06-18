function hideQuestion1(n) {
	let question = document.getElementsByClassName("question");

	let answerNum = 0;
	let QTrurNum = 0;
	localStorage.setItem("trueQNum", QTrurNum);

	if (((document.getElementsByTagName("input").item(answerNum).value == "true") ||
		(document.getElementsByTagName("input").item(answerNum + 1).value == "true")) &&
		(document.getElementsByTagName("input").item(answerNum + 1).checked == true)) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}

	question.item(n).style.display = "none";
	question.item(n + 1).style.display = "block";
	localStorage.setItem("trueQNum", QTrurNum);
}

function hideQuestion2(n) {
	let question = document.getElementsByClassName("question");

	let answerNum = 0;
	let QTrurNum = localStorage.getItem("trueQNum");

	if (((document.getElementsByTagName("input").item(answerNum + 2).value == "true") ||
		(document.getElementsByTagName("input").item(answerNum + 2 + 1).value == "true")) &&
		(document.getElementsByTagName("input").item(answerNum + 2 + 1).checked == true)) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}

	question.item(n).style.display = "none";
	question.item(n + 1).style.display = "block";

	localStorage.setItem("trueQNum", QTrurNum);
}

function hideQuestion3(n) {
	let question = document.getElementsByClassName("question");

	let answerNum = 0;
	let QTrurNum = localStorage.getItem("trueQNum");

	if (((document.getElementsByTagName("input").item(answerNum + 4).value == "true") ||
		(document.getElementsByTagName("input").item(answerNum + 4 + 1).value == "true") ||
		(document.getElementsByTagName("input").item(answerNum + 4 + 2).value == "true")) &&
		(document.getElementsByTagName("input").item(answerNum + 4).checked == true)) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}

	question.item(n).style.display = "none";

	localStorage.setItem("trueQNum", QTrurNum);
}

function checkAnswerQuestion() {
	let question = document.getElementsByClassName("question");
	let nextQuestionBtn = document.getElementsByClassName("nextQuestionBtn");
	let questionTrue = document.getElementsByClassName("questionTrue");
	let questionFalse = document.getElementsByClassName("questionFalse");
	let result = document.getElementById("result");
	let radioCheckBox = document.getElementsByClassName("radioCheckBox");

	for (let i = 0; i < question.length; i++) {
		question.item(i).style.display = "block";
	}

	for (let i = 0; i < nextQuestionBtn.length; i++) {
		nextQuestionBtn.item(i).style.display = "none";
	}

	for (let i = 0; i < questionTrue.length; i++) {
		questionTrue.item(i).style.backgroundColor = "green";
	}

	for (let i = 0; i < questionFalse.length; i++) {
		questionFalse.item(i).style.backgroundColor = "red";
	}

	for (let i = 0; i < radioCheckBox.length; i++) {
		radioCheckBox.item(i).disabled = "disabled";
	}

	result.innerHTML = "Απάντησες " + parseInt(localStorage.getItem("trueQNum")) + " από τις " + question.length + " Σωστές";
}
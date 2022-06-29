function initInputElements() {
	let input = document.getElementsByTagName('input');
	let questionNum = document.getElementsByClassName("questionNum");

	for (let i = 0; i < questionNum.length; i++) {
		let answerListINum = answersList(i);

		if (questionNum.item(i).childElementCount == 2) {
			input.item(answerListINum).setAttribute("name", "radio" + i);
			input.item(answerListINum + 1).setAttribute("name", "radio" + i);
		}
		if (questionNum.item(i).childElementCount == 3) {
			input.item(answerListINum).setAttribute("name", "radio" + i);
			input.item(answerListINum + 1).setAttribute("name", "radio" + i);
			input.item(answerListINum + 2).setAttribute("name", "radio" + i);
		}
		if (questionNum.item(i).childElementCount == 4) {
			input.item(answerListINum).setAttribute("name", "radio" + i);
			input.item(answerListINum + 1).setAttribute("name", "radio" + i);
			input.item(answerListINum + 2).setAttribute("name", "radio" + i);
			input.item(answerListINum + 3).setAttribute("name", "radio" + i);
		}
	}
}

function answersList(n) {
	//                1, 2, 3, 4, 5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42	
	let answerList = [0, 2, 4, 7, 9, 11, 14, 16, 18, 22, 24, 27, 29, 32, 34, 37, 39, 42, 44, 46, 48, 51, 54, 57, 60, 62, 65, 68, 71, 73, 76, 79, 81, 85, 88];
	return answerList[n];
}

function answersTrueList(n) {
	//                    1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42
	let answerTrueList = [1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 2, 0, 1, 1, 2, 0, 0, 0, 1, 1, 0, 0];
	return answerTrueList[n];
}

function initQuestionFunc(question, divNextBtnQuestion, QTrurNum, n) {
	question.item(n).style.display = "none";
	question.item(n + 1).style.display = "block";
	divNextBtnQuestion.item(n).style.display = "none";
	divNextBtnQuestion.item(n + 1).style.display = "block";
	localStorage.setItem("trueQNum", QTrurNum);
}

function hideQuestionFirst(n) {
	let question = document.getElementsByClassName("question");
	let divNextBtnQuestion = document.getElementsByClassName("divNextBtnQuestion");
	let answerNum = 0;
	let QTrurNum = 0;
	localStorage.setItem("trueQNum", QTrurNum);

	if (document.getElementsByTagName("input").item(answerNum + answersList(n) + answersTrueList(n)).checked == true) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}
	initQuestionFunc(question, divNextBtnQuestion, QTrurNum, n);
}

function hideQuestion(n) {
	let question = document.getElementsByClassName("question");
	let divNextBtnQuestion = document.getElementsByClassName("divNextBtnQuestion");
	let answerNum = 0;
	let QTrurNum = localStorage.getItem("trueQNum");

	if (document.getElementsByTagName("input").item(answerNum + answersList(n) + answersTrueList(n)).checked == true) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}
	initQuestionFunc(question, divNextBtnQuestion, QTrurNum, n);
}

function hideQuestionLast(n) {
	let question = document.getElementsByClassName("question");
	let divNextBtnQuestion = document.getElementsByClassName("divNextBtnQuestion");
	let answerNum = 0;
	let QTrurNum = localStorage.getItem("trueQNum");

	if (document.getElementsByTagName("input").item(answerNum + answersList(n) + answersTrueList(n)).checked == true) {
		QTrurNum = parseInt(localStorage.getItem("trueQNum")) + 1;
	}

	question.item(n).style.display = "none";
	divNextBtnQuestion.item(n).style.display = "none";
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
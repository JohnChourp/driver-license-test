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

function questionNumChildElementCount(n, questionNum) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum = sum + questionNum.item(i).childElementCount;
	}
	return sum;
}

function answersList(n) {
	let answerList = [];
	let questionNum = document.getElementsByClassName("questionNum");

	for (let i = 0; i < questionNum.length; i++) {
		answerList[i] = questionNumChildElementCount(i, questionNum);
	}
	return answerList[n];
}

function initAnswersTrueList(){
	let answerTrueList = [];
	let questionNum = document.getElementsByClassName("questionNum");

	for (let i = 0; i < questionNum.length; i++) {
		if(questionNum.item(i).childElementCount === 2){
			if (questionNum.item(i).getElementsByTagName("div").item(0).classList.contains('questionTrue')) {
				answerTrueList[i] = 0;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(1).classList.contains('questionTrue')) {
				answerTrueList[i] = 1;
			}
		}
		if(questionNum.item(i).childElementCount === 3){
			if (questionNum.item(i).getElementsByTagName("div").item(0).classList.contains('questionTrue')) {
				answerTrueList[i] = 0;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(1).classList.contains('questionTrue')) {
				answerTrueList[i] = 1;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(2).classList.contains('questionTrue')) {
				answerTrueList[i] = 2;
			}
		}
		if(questionNum.item(i).childElementCount === 4){
			if (questionNum.item(i).getElementsByTagName("div").item(0).classList.contains('questionTrue')) {
				answerTrueList[i] = 0;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(1).classList.contains('questionTrue')) {
				answerTrueList[i] = 1;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(2).classList.contains('questionTrue')) {
				answerTrueList[i] = 2;
			}
			if (questionNum.item(i).getElementsByTagName("div").item(3).classList.contains('questionTrue')) {
				answerTrueList[i] = 3;
			}
		}
	}
	return answerTrueList;
}

function answersTrueList(n) {
	let answerTrueList = initAnswersTrueList();
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

	result.innerHTML = "?????????????????? " + parseInt(localStorage.getItem("trueQNum")) + " ?????? ?????? " + question.length + " ????????????";
}
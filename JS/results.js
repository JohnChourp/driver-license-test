function results(){
	let results = document.getElementById("results");
	results.innerHTML = "Σωστές απαντήσεις: " + localStorage.getItem("sum") + " από τις 30";
	
	let inputTrue = document.getElementsByClassName("true");
	let inputTrueLength = document.getElementsByClassName("true").length;
	let inputFalse = document.getElementsByClassName("false");
	let inputFalseLength = document.getElementsByClassName("false").length;
	
	for(let i = 0; i < inputTrueLength; i ++){
		inputTrue.item(i).style.backgroundColor = "#24B052";
	}
	for(let i = 0; i < inputFalseLength; i ++){
		inputFalse.item(i).style.backgroundColor = "#c40e25";
	}
	if(localStorage.getItem("question1Checked") === "true"){
		document.getElementsByClassName("checkmark").item(1).style.backgroundColor = "#7691fd";
	}
	if(localStorage.getItem("question2Checked") === "true"){
		document.getElementsByClassName("checkmark").item(2).style.backgroundColor = "#7691fd";
	}
	if(localStorage.getItem("question3Checked") === "true"){
		document.getElementsByClassName("checkmark").item(6).style.backgroundColor = "#7691fd";
	}
}
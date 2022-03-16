function results(){
	let sum = 0;
	let inputTrue = document.getElementsByClassName("true");
	let inputFalse = document.getElementsByClassName("false");
	let checkmark = document.getElementsByClassName("checkmark");
	let results = document.getElementById("results");
	
	for(let i = 0; i < inputTrue.length; i ++){
		inputTrue.item(i).style.backgroundColor = "#24B052";
	}
	
	for(let i = 0; i < inputFalse.length; i ++){
		inputFalse.item(i).style.backgroundColor = "#C40E25";
	}
	
	if(localStorage.getItem("question1Checked") === "true"){
		checkmark.item(1).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question2Checked") === "true"){
		checkmark.item(2).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question3Checked") === "true"){
		checkmark.item(6).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	
	results.innerHTML = "Σωστές απαντήσεις: " + sum + " από τις 30";
}
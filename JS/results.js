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
	
	//Question1
	if(localStorage.getItem("question1-0") === "false"){
		checkmark.item(0).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question1-1") === "true"){
		checkmark.item(1).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	//Question1
	
	//Question2
	if(localStorage.getItem("question2-0") === "true"){
		checkmark.item(2).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question2-1") === "false"){
		checkmark.item(3).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question2-2") === "false"){
		checkmark.item(4).style.backgroundColor = "#7691FD";
	}
	//Question2
	
	//Question3
	if(localStorage.getItem("question3-0") === "false"){
		checkmark.item(5).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question3-1") === "true"){
		checkmark.item(6).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question3-2") === "false"){
		checkmark.item(7).style.backgroundColor = "#7691FD";
	}
	//Question3
	
	results.innerHTML = "Σωστές απαντήσεις: " + sum + " από τις 30";
}
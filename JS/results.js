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
	if(localStorage.getItem("question1-0") === "checked"){
		checkmark.item(0).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question1-1") === "checked"){
		checkmark.item(1).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	//Question1
	
	//Question2
	if(localStorage.getItem("question2-0") === "checked"){
		checkmark.item(2).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question2-1") === "checked"){
		checkmark.item(3).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question2-2") === "checked"){
		checkmark.item(4).style.backgroundColor = "#7691FD";
	}
	//Question2
	
	//Question3
	if(localStorage.getItem("question3-0") === "checked"){
		checkmark.item(5).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question3-1") === "checked"){
		checkmark.item(6).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question3-2") === "checked"){
		checkmark.item(7).style.backgroundColor = "#7691FD";
	}
	//Question3
	
	//Question4
	if(localStorage.getItem("question4-0") === "checked"){
		checkmark.item(8).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question4-1") === "checked"){
		checkmark.item(9).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question4-2") === "checked"){
		checkmark.item(10).style.backgroundColor = "#7691FD";
	}
	//Question4
	
	//Question5
	if(localStorage.getItem("question5-0") === "checked"){
		checkmark.item(11).style.backgroundColor = "#7691FD";
		sum = sum + 1;
	}
	if(localStorage.getItem("question5-1") === "checked"){
		checkmark.item(12).style.backgroundColor = "#7691FD";
	}
	if(localStorage.getItem("question5-2") === "checked"){
		checkmark.item(13).style.backgroundColor = "#7691FD";
	}
	//Question5
	
	results.innerHTML = "Σωστές απαντήσεις: " + sum + " από τις 30";
}
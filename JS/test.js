function setSum(){
	localStorage.setItem("sum","0");
}

function testQuestion1(){
	let inputTrue = document.getElementsByClassName("true");
	let inputFalse = document.getElementsByClassName("false");
	let btnNextQuestion = document.getElementById("nextQuestion");
	let sum = parseInt(localStorage.getItem("sum"));
	
	inputTrue.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputTrue.item(0).classList.add("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
			inputFalse.item(0).classList.remove("checkedTrue");
		}
	});
	inputFalse.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
			inputTrue.item(0).classList.remove("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputFalse.item(0).classList.add("checkedTrue");
		}
	});
	
	btnNextQuestion.addEventListener('click' , function(){
		if(inputTrue.item(0).checked){
			sum = sum + 1;
			localStorage.setItem("sum",sum);
			localStorage.setItem("question1","true");
		}
		let checkedTrue = document.getElementsByClassName("checkedTrue").item(0);
		if(checkedTrue.classList.contains("true")){
			localStorage.setItem("question1Checked","true");
		}else{
			localStorage.setItem("question1Checked","false");
		}
	});
}

function testQuestion2(){
	let inputTrue = document.getElementsByClassName("true");
	let inputFalse = document.getElementsByClassName("false");
	let btnNextQuestion = document.getElementById("nextQuestion");
	let sum = parseInt(localStorage.getItem("sum"));
	
	inputTrue.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputTrue.item(0).classList.add("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
			inputFalse.item(0).classList.remove("checkedTrue");
		}
	});
	
	inputFalse.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
			inputTrue.item(0).classList.remove("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputFalse.item(0).classList.add("checkedTrue");
		}
	});
	
	inputFalse.item(1).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
			inputTrue.item(0).classList.remove("checkedTrue");
		}
		
		if(inputFalse.item(1).classList.contains("checkedTrue")){
		
		}else{
			inputFalse.item(1).classList.add("checkedTrue");
		}
	});
	
	btnNextQuestion.addEventListener('click' , function(){
		if(inputTrue.item(0).checked){
			sum = sum + 1;
			localStorage.setItem("sum",sum);
			localStorage.setItem("question2","true");
		}
		let checkedTrue = document.getElementsByClassName("checkedTrue").item(0);
		if(checkedTrue.classList.contains("true")){
			localStorage.setItem("question2Checked","true");
		}else{
			localStorage.setItem("question2Checked","false");
		}
	});
}

function testQuestion3(){
	let inputTrue = document.getElementsByClassName("true");
	let inputFalse = document.getElementsByClassName("false");
	let btnNextQuestion = document.getElementById("nextQuestion");
	let sum = parseInt(localStorage.getItem("sum"));
	
	inputTrue.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputTrue.item(0).classList.add("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
			inputFalse.item(0).classList.remove("checkedTrue");
		}
	});
	inputFalse.item(0).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
			inputTrue.item(0).classList.remove("checkedTrue");
		}
		
		if(inputFalse.item(0).classList.contains("checkedTrue")){
		
		}else{
			inputFalse.item(0).classList.add("checkedTrue");
		}
	});
	
	inputFalse.item(1).addEventListener('click' , function(){
		if(inputTrue.item(0).classList.contains("checkedTrue")){
			inputTrue.item(0).classList.remove("checkedTrue");
		}
		
		if(inputFalse.item(1).classList.contains("checkedTrue")){
		
		}else{
			inputFalse.item(1).classList.add("checkedTrue");
		}
	});
	
	btnNextQuestion.addEventListener('click' , function(){
		if(inputTrue.item(0).checked){
			sum = sum + 1;
			localStorage.setItem("sum",sum);
			localStorage.setItem("question3","true");
		}
		let checkedTrue = document.getElementsByClassName("checkedTrue").item(0);
		if(checkedTrue.classList.contains("true")){
			localStorage.setItem("question3Checked","true");
		}else{
			localStorage.setItem("question3Checked","false");
		}
	});
}
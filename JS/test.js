function testQuestion1(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		if(input.item(0).checked){
			localStorage.setItem("question1-0" , "false");
		}else{
			localStorage.setItem("question1-0" , "true");
		}
		if(input.item(1).checked){
			localStorage.setItem("question1-1" , "true");
		}else{
			localStorage.setItem("question1-1" , "false");
		}
	});
}

function testQuestion2(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		if(input.item(0).checked){
			localStorage.setItem("question2-0" , "true");
		}else{
			localStorage.setItem("question2-0" , "false");
		}
		if(input.item(1).checked){
			localStorage.setItem("question2-1" , "false");
		}else{
			localStorage.setItem("question2-1" , "true");
		}
		if(input.item(2).checked){
			localStorage.setItem("question2-2" , "false");
		}else{
			localStorage.setItem("question2-2" , "true");
		}
	});
}

function testQuestion3(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		if(input.item(0).checked){
			localStorage.setItem("question3-0" , "false");
		}else{
			localStorage.setItem("question3-0" , "true");
		}
		if(input.item(1).checked){
			localStorage.setItem("question3-1" , "true");
		}else{
			localStorage.setItem("question3-1" , "false");
		}
		if(input.item(2).checked){
			localStorage.setItem("question3-2" , "false");
		}else{
			localStorage.setItem("question3-2" , "true");
		}
	});
}
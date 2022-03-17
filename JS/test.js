function testQuestion1(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		for(let i = 0; i < input.length; i ++){
			if(input.item(i).checked){
				localStorage.setItem("question1-" + i , "checked");
			}else{
				localStorage.removeItem("question1-" + i);
			}
		}
	});
}

function testQuestion2(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		for(let i = 0; i < input.length; i ++){
			if(input.item(i).checked){
				localStorage.setItem("question2-" + i , "checked");
			}else{
				localStorage.removeItem("question2-" + i);
			}
		}
	});
}

function testQuestion3(){
	let btnNextQuestion = document.getElementById("nextQuestion");
	let input = document.getElementsByTagName("input");
	
	btnNextQuestion.addEventListener('click' , function(){
		for(let i = 0; i < input.length; i ++){
			if(input.item(i).checked){
				localStorage.setItem("question3-" + i , "checked");
			}else{
				localStorage.removeItem("question3-" + i);
			}
		}
	});
}
function testResults(){
	let trueAnswer = document.getElementsByClassName("true");
	let falseAnswer = document.getElementsByClassName("false");
	let trueAnswerLength = trueAnswer.length;
	let falseAnswerLength = falseAnswer.length;
	
	//Ερώτηση 1
	falseAnswer.item(0).addEventListener('click' , function(){
		if(trueAnswer.item(0).classList.contains("checkedTrue")){
			trueAnswer.item(0).classList.remove("checkedTrue");
		}
	});
	
	trueAnswer.item(0).addEventListener('click' , function(){
		if(trueAnswer.item(0).classList.contains("checkedTrue")){
		
		}else{
			trueAnswer.item(0).classList.add("checkedTrue");
		}
	});
	//Ερώτηση 1
	
	//Ερώτηση 2
	falseAnswer.item(1).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checkedTrue")){
			trueAnswer.item(1).classList.remove("checkedTrue");
		}
	});
	
	falseAnswer.item(2).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checkedTrue")){
			trueAnswer.item(1).classList.remove("checkedTrue");
		}
	});
	
	trueAnswer.item(1).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checkedTrue")){
		
		}else{
			trueAnswer.item(1).classList.add("checkedTrue");
		}
	});
	//Ερώτηση 2
	
	//Ερώτηση 3
	falseAnswer.item(3).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checkedTrue")){
			trueAnswer.item(2).classList.remove("checkedTrue");
		}
	});
	
	falseAnswer.item(4).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checkedTrue")){
			trueAnswer.item(2).classList.remove("checkedTrue");
		}
	});
	
	trueAnswer.item(2).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checkedTrue")){
		
		}else{
			trueAnswer.item(2).classList.add("checkedTrue");
		}
	});
	//Ερώτηση 3
	let done = document.getElementById("done");
	done.addEventListener('click' , function(){
		let checkedTrue = document.getElementsByClassName("checkedTrue");
		let checkedLength = checkedTrue.length;
		
		for(let i = 0; i < trueAnswerLength; i ++){
			trueAnswer.item(i).style.backgroundColor = "#7BFD76";
			trueAnswer.item(i).style.color = "black";
		}
		for(let i = 0; i < falseAnswerLength; i ++){
			falseAnswer.item(i).style.backgroundColor = "#FD7676";
			falseAnswer.item(i).style.color = "black";
		}
		for(let i = 0; i < checkedLength; i ++){
			checkedTrue.item(i).style.backgroundColor = "#7691fd";
			checkedTrue.item(i).style.color = "black";
		}

		let results = document.getElementById("results");
		results.innerHTML = "Έκανες " + checkedLength + " από τις " + trueAnswerLength + " ερωτήσεις σωστές";
	});
}
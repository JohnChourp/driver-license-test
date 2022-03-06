function testResults(){
	let trueAnswer = document.getElementsByClassName("true");
	let falseAnswer = document.getElementsByClassName("false");
	let trueAnswerLength = trueAnswer.length;
	
	//Ερώτηση 1
	falseAnswer.item(0).addEventListener('click' , function(){
		if(trueAnswer.item(0).classList.contains("checked")){
			trueAnswer.item(0).classList.remove("checked");
		}
	});
	
	trueAnswer.item(0).addEventListener('click' , function(){
		if(trueAnswer.item(0).classList.contains("checked")){
		
		}else{
			trueAnswer.item(0).classList.add("checked");
		}
	});
	//Ερώτηση 1
	
	//Ερώτηση 2
	falseAnswer.item(1).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checked")){
			trueAnswer.item(1).classList.remove("checked");
		}
	});
	
	falseAnswer.item(2).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checked")){
			trueAnswer.item(1).classList.remove("checked");
		}
	});
	
	trueAnswer.item(1).addEventListener('click' , function(){
		if(trueAnswer.item(1).classList.contains("checked")){
		
		}else{
			trueAnswer.item(1).classList.add("checked");
		}
	});
	//Ερώτηση 2
	
	//Ερώτηση 3
	falseAnswer.item(3).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checked")){
			trueAnswer.item(2).classList.remove("checked");
		}
	});
	
	falseAnswer.item(4).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checked")){
			trueAnswer.item(2).classList.remove("checked");
		}
	});
	
	trueAnswer.item(2).addEventListener('click' , function(){
		if(trueAnswer.item(2).classList.contains("checked")){
		
		}else{
			trueAnswer.item(2).classList.add("checked");
		}
	});
	//Ερώτηση 3
	let done = document.getElementById("done");
	done.addEventListener('click' , function(){
		let checkedLength = document.getElementsByClassName("checked").length;
		alert("Έκανες " + checkedLength + " από τις " + trueAnswerLength + " ερωτήσεις σωστές");
	});
}
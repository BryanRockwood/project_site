const rankings= ['Josh Allen', 'Patrick Mahomes', 'Mac Jones', 'Jalen Hurts'];

//const resp = document.createElement("p");
//const textResp = document.createTextNode("test");
//const newEle = document.getElementById("AinputResult");



function playerCompare(){
	let playerA  = document.getElementById("playerA").value;
	let playerB = document.getElementById("playerB").value;
	let playerAVal = -1;
	let playerBVal = -1;

	
	// loop through our rankings array to find names, and assign values to names
	for (i =0; i<rankings.length; i++){
		
		if (rankings[i].toString() === playerA){
			playerAVal = i
		} 
//		else if(playerAVal === -1){
//			playerAVal = playerBVal + 1
//		}

		if (rankings[i].toString() === playerB){
			playerBVal = i
		}
	}

// check to see if either of the values is empty
	if (playerAVal === -1 || playerBVal === -1){
		document.getElementById("AinputResult").innerHTML = "";
		let para = document.getElementById("AinputResult");
		let error = "Did you Forget to Add a Player?";
		para.insertAdjacentText("afterbegin", error)
	}else if (playerAVal < playerBVal && playerAVal !== -1){
		document.getElementById("AinputResult").innerHTML = playerA;
	}else if (playerAVal > playerBVal && playerBVal !== -1){
		document.getElementById("AinputResult").innerHTML = playerB;
	}

	else{
		document.getElementById("AinputResult").innerHTML = "";
		let para2 = document.getElementById("AinputResult");
		let error2 = "Go with your gut";
		para2.insertAdjacentText("afterbegin", error2)


	//		resp.appendChild(textResp);

	//		newEle = playerB

		}

}


//	debugging comments
  
//	document.getElementById("inputResult").innerHTML = playerAVal;
//	document.getElementById("inputResultB").innerHTML = playerBVal;


//	document.getElementById("inputResult").innerHTML = rankings[2].toString();
//	document.getElementById("inputResultB").innerHTML = playerA;


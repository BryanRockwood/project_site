const rankings= ['Josh Allen', 'Patrick Mahomes', 'Mac Jones', 'Jalen Hurts'];
const resp = document.createElement("p");
const textResp = document.createTextNode("test");
//resp.appendChild(textResp);
const newEle = document.getElementById("inputResult");



function playerCompare(){
	let playerA  = document.getElementById("playerA").value;
	let playerB = document.getElementById("playerB").value;
	let playerAVal = 0;
	let playerBVal = 0;

	
	// loop through our rankings array to find names, and assign values to names
	for (i =0; i<rankings.length; i++){
		
		if (rankings[i].toString() === playerA){
			playerAVal = i
		}
		if (rankings[i].toString() === playerB){
			playerBVal = i
		}
	}

	if (playerAVal < playerBVal){
		document.getElementById("inputResult").innerHTML = playerA;
	} else {
		document.getElementById("inputResult").innerHTML = playerB;
	}
//	else{
//
//			newEle.appendChild(resp);

//		}
}


//	debugging comments
  
//	document.getElementById("inputResult").innerHTML = playerAVal;
//	document.getElementById("inputResultB").innerHTML = playerBVal;


//	document.getElementById("inputResult").innerHTML = rankings[2].toString();
//	document.getElementById("inputResultB").innerHTML = playerA;



const rankings2= ['Josh Allen', 'Patrick Mahomes', 'Mac Jones', 'Jalen Hurts', 'Jordan Love','Marcus Mariota'];

//already created search function
function autocompleteSearch(){
	let playerA  = document.getElementById("playerAAuto").value;
	let playerB = document.getElementById("playerBAuto").value;
	let playerAVal = -1;
	let playerBVal = -1;

	
	// loop through our rankings array to find names, and assign values to names
	for (i =0; i<rankings.length; i++){
		
		if (rankings2[i].toString() === playerA){
			playerAVal = i
		} 
		if (rankings2[i].toString() === playerB){
			playerBVal = i
		}
	}

// check to see if either of the values is empty
	if (playerAVal === -1 || playerBVal === -1){
		document.getElementById("ACResult").innerHTML = "";
		let para = document.getElementById("ACResult");
		let error = "Did you Forget to Add a Player?";
		para.insertAdjacentText("afterbegin", error)
	}else if (playerAVal < playerBVal && playerAVal !== -1){
		document.getElementById("ACResult").innerHTML = playerA;
	}else if (playerAVal > playerBVal && playerBVal !== -1){
		document.getElementById("ACResult").innerHTML = playerB;
	}

	else{
		document.getElementById("ACResult").innerHTML = "";
		let para2 = document.getElementById("ACResult");
		let error2 = "Go with your gut";
		para2.insertAdjacentText("afterbegin", error2)

		}

}
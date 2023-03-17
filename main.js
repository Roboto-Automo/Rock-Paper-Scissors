// Define variables
var choices = ["rock", "paper", "scissors"];
var result = document.getElementById("result");
var compy = document.getElementById("compy");


document.getElementById("rock"). addEventListener("click", function() {
	play("rock");style.backgroundColor;
});

document.getElementById("paper").addEventListener("click", function() {
	play("paper");style.backgroundColor;
});
document.getElementById("scissors").addEventListener("click", function() {
	play("scissors");style.backgroundColor;
});




function play(playerChoice) {
	
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	
	if (playerChoice === computerChoice) {
		result.innerHTML = "Man and Machine are as one!";
	} else if ((playerChoice === "rock" && computerChoice === "scissors") || 
			   (playerChoice === "paper" && computerChoice === "rock") || 
			   (playerChoice === "scissors" && computerChoice === "paper")) {
		result.innerHTML = "You win Nob Head!";
	} else {
		result.innerHTML = "How could you let a machine beat you?!! YOU FILTHY APE!!";
	}
	
	if (computerChoice === "rock"){
		compy.innerHTML = "Computer picks Rock!"
	}else if (computerChoice === "paper") {
		compy.innerHTML = "Computer picks Paper!"
	}else if (computerChoice === "scissors"){
		compy.innerHTML = "Computer picks Scissors!"
	}

}





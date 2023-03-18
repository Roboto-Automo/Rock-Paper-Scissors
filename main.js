// Define variables
var choices = ["rock", "paper", "scissors"];
var result = document.getElementById("result");
var compy = document.getElementById("compy");


//below is code which uses an event listener to communicate with the buttons in the html with the 
//relevant tags. in the body of the event listener function the play function is given the relevant player choice argument.
// button:active in the style.css is also triggered when button is clicked to change the color of the button to indicate a choice.
document.getElementById("rock"). addEventListener("click", function() {
	play("rock");
});

document.getElementById("paper").addEventListener("click", function() {
	play("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
	play("scissors");
});




function play(playerChoice) {
	
	// the code below assigns an array to the variable computerChoice. The array calls a random value each time.
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	

	//The code below is the main logic for 'rock paper scissors' where the result of each possibility is communicated to the <p></p> element with the id="result"
	if (playerChoice === computerChoice) {
		result.innerHTML = "Man and Machine are as one!";
	} else if ((playerChoice === "rock" && computerChoice === "scissors") || 
			   (playerChoice === "paper" && computerChoice === "rock") || 
			   (playerChoice === "scissors" && computerChoice === "paper")) {
		result.innerHTML = "You win Nob Head!";
	} else {
		result.innerHTML = "How could you let a machine beat you?!! YOU FILTHY APE!!";
	}
	
	//code below creates a message in the html index indicating computer choice 
	//compy.innerHTML communicates the string to the <p></p> code in the html file with the id="compy"
	if (computerChoice === "rock"){
		compy.innerHTML = "Computer picks Rock!"
	}else if (computerChoice === "paper") {
		compy.innerHTML = "Computer picks Paper!"
	}else if (computerChoice === "scissors"){
		compy.innerHTML = "Computer picks Scissors!"
	}

}

console.log(result)
console.log(compy)



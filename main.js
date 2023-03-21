// Define variables
var choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;


var playerName = localStorage.getItem("playerName");
var cageEnrage = ["Con Air Was Too Cheesy!", "You Overacted in The Wicker Man!",
"You'll never be as good as John Travolta!", "National Treasure...More like Abortional Displeasure!", 
"You're only famous because you're Francis Ford Coppolla's nephew!", "oh no!" ]
var cageReact = ["How dare you!", "Not the beeeees!", "I'm gonna take your face OFF!", "I'm Nicolas FRIGGIN' Cage!",
 "AAAAAAAAAAH!", "AAAHGGAAHAHAHAHAHAHA!!!!!"]


var rageCount = -1

// intro text with Player Name interpolated into it
//let introText = document.createElement("p")
	// introText.textContent = `Welcome ${playerName}, to this magical game of...`
	intro.innerHTML = `Welcome ${playerName}, to this magical game of...`
	//document.getElementById("intro").appendChild(introText) 

function preventLink(event) {
    event.preventDefault();
    var nameField = document.getElementById("userInput").value;
    localStorage.setItem("playerName", nameField);
    window.location.href = "game.html";
}



function play(playerChoice) {
	
	
   
	// the code below assigns an array to the variable computerChoice. The array calls a random value each time.
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	

	//The code below is the main logic for 'rock paper scissors' where the result of each possibility is communicated to the <p></p> element with the id="result"
	if (playerChoice === computerChoice) {
		result.innerHTML = "Man and Machine are as one!";
	} else if ((playerChoice === "rock" && computerChoice === "scissors") || 
			   (playerChoice === "paper" && computerChoice === "rock") || 
			   (playerChoice === "spock" && computerChoice === "scissors") ||
			   (playerChoice === "spock" && computerChoice === "rock") ||
			   (playerChoice === "lizard" && computerChoice === "spock") ||
			   (playerChoice === "lizard" && computerChoice === "paper")
			   ) {
		result.innerHTML = "You have chosen wisely!";
		playerScore++;
		
			   } else if ((playerChoice === "spock" && computerChoice === "paper") || 
			(playerChoice === "spock" && computerChoice === "lizard")){
				computerScore++;
			     result.innerHTML = "Don't grieve, Admiral. It is logical. The needs of the many outweigh...the needs of one..."
				}
				//cage rage player choice logic
				else if (playerChoice === "cage"){
					computerChoice = "enrage"
					rageCount++
					result.innerHTML = cageReact[rageCount]
					 if (rageCount === 5){
						window.location = "cagerage.html";
					}
					if (rageCount === 6){
						count = 0
					}
					}
	 else {
		computerScore++;
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
	}else if (computerChoice === "spock"){
		compy.innerHTML = "Computer picks Spock!"
	}else if (computerChoice === "lizard"){
		compy.innerHTML = "Computer picks Lizard!"
		//cage rage computer choice logic picking item in array based on rageCount
	}else if (computerChoice === "enrage"){
		compy.innerHTML = cageEnrage[rageCount]
	}
	
	let scoreupdate = document.querySelector('#playerScore');
	let scoreupdate2 = document.querySelector('#computerScore');
 
	  scoreupdate.innerHTML = playerScore;
	 scoreupdate2.innerHTML = computerScore;

}


//below is code which uses an event listener to communicate with the buttons in the html with the 
//relevant tags. in the body of the event listener function the play function is given the relevant player choice argument.
// button:active in the style.css is also triggered when button is clicked to change the color of the button to indicate a choice.

const myParagraph = document.querySelector('#battle');

document.getElementById("rock"). addEventListener("click", function() {
	play("rock"); battle.style.display = 'none';
});

document.getElementById("paper").addEventListener("click", function() {
	play("paper");battle.style.display = 'none';
});
document.getElementById("scissors").addEventListener("click", function() {
	play("scissors");battle.style.display = 'none';
});
document.getElementById("spock"). addEventListener("click", function() {
	play("spock"); battle.style.display = 'none';
});

document.getElementById("lizard").addEventListener("click", function() {
	play("lizard");battle.style.display = 'none';
});
document.getElementById("cage").addEventListener("click", function() {
	play("cage");battle.style.display = 'none';
});
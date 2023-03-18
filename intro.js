
let userInput;

function storeInput(event) {
    event.preventDefault();
    userInput = document.getElementById("userInput").value;
    window.location.href = "game.html";
}
//----- Player Selection -----//

// Get the button selection.
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Add event listener to the buttons.
rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorsBtn.addEventListener("click", scissors);

// Execute an action based on the player selection.
function rock(){
    console.log("player chose rock.")
};

function paper(){
    console.log("player chose paper.")
};

function scissors(){
    console.log("player chose scissors.")
};

// PSUEDOCODE //
// 1. Write a function that will return a random index of an array.
//Declare an array for the game choices
let gameChoices = ['Rock', 'Paper', 'Scissors'];
//Get a random choice
const computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
//Log the function for testing
console.log(computerSelection);

// 2. Write a function that will return the winner of the game.
//Determine the winner
function playRound(computerSelection, playerSelection) {
    if (playerSelection === "Paper" && (computerSelection === "Rock" || computerSelection === "Scissors")) {
        return "You win! Paper beats Rock.";
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "Draw! Try again.";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You lose! Scissors beats Paper.";
    }
};

//Declare the player's choice
const playerSelection = "Paper";

//Log the results
console.log(playRound(computerSelection, playerSelection));



// PSUEDOCODE //
// 1. Take in a user's input
// Use event listener to get a user's input


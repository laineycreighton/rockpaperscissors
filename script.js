//----- Computer Selection -----//

//Declare an array for the game choices
let gameChoices = ['Rock', 'Paper', 'Scissors'];

//Get a random choice
const computer = gameChoices[Math.floor(Math.random() * gameChoices.length)];

// Display computer selection.
console.log("Computer:");
console.log(computer);
console.log(" ")





//----- Player Selection -----//

// Get the button selection.
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// Add event listener to the buttons.
rockBtn.addEventListener("click", rock);
paperBtn.addEventListener("click", paper);
scissorsBtn.addEventListener("click", scissors);





//----- Decide Winner -----//

// Rock Chosen
function rock() {
    if (computer === "Scissors") {
        console.log("You win!");
    } else if (computer === "Paper") {
        console.log("You lose.")
    } else {
        console.log("Draw! Try again.")
    }
};

// Paper Chosen
function paper() {
    if (computer === "Rock") {
        console.log("You win!");
    } else if (computer === "Scissors") {
        console.log("You lose.")
    } else {
        console.log("Draw! Try again.")
    }
};

//Scissors Chosen
function scissors() {
    if (computer === "Paper") {
        console.log("You win!");
    } else if (computer === "Rock") {
        console.log("You lose.")
    } else {
        console.log("Draw! Try again.")
    }
};
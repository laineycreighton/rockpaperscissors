//----- Computer & Player Choices -----//

// Declare an array for the computer's choices.
let computerChoices = ['Rock', 'Paper', 'Scissors'];

// Get the buttons for the player's choices.
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");





//----- Play The Game -----//

// Get the player's selection.
rockBtn.addEventListener("click", () => checkResult('Rock'));
paperBtn.addEventListener("click", () => checkResult('Paper'));
scissorsBtn.addEventListener("click", () => checkResult('Scissors'));

// Check the results.
function checkResult(player) {

    // Get the computer's selection.
    const computer = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Display the computer and player selections.
    console.log("Computer: ", computer);
    console.log("Player: ", player);

    // Determine the winner.
    if(computer === player){
        console.log("Draw! Try again.")
    } else if (
        (computer === 'Rock' && player === 'Scissors') ||
        (computer === 'Paper' && player === 'Rock') ||
        (computer === 'Scissors' && player === 'Paper')
    ){
        console.log("You lose.")
    } else {
        console.log("You win!")
    }
};
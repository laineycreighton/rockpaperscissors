// PSUEDOCODE //
// 1. Write a function that will return a random index of an array.
    //Declare an array for the game choices
    let gameChoices = ['Rock', 'Paper', 'Scissors'];
    //Get a random choice
    const getComputerChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    //Log the function for testing
    console.log(getComputerChoice);

// 2. Write a function that will return the winner of the game.
    function playRound(playerSelection, computerSelection){
        
    }
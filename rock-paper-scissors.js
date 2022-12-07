// Create a function called getComputerChoice that gets the computers random choice of Rock, paper or scissors (RPS)

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

// Create a function called playerSelection that gets the players input for RPS

function playerSelection() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();

    while(choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Please input rock, paper or scissors")
        choice = prompt("Choose rock, paper or scissors").toLowerCase();
    }  
}


// Create function playRound that takes getComputerChoice and playerSelection as inputs and plays one round of RPS and return a string that declares the winner of the round
function playRound(computerSelection, playerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return "You win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            computerScore++;
        return "You lose! Paper beats Rock";
        } else {
            return "You draw! Rock matches Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You win! Scissors beats paper";
        } else {
            return "You draw! Scissors matches Scissors";
        }
    } else {
        if (computerSelection === "rock") {
            playerScore++;
            return "You win! Paper beats Rock";
        } else if(computerSelection === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper";
        } else {
            return "You draw! Paper matches Paper";
        }
    }
}
let playerScore = 0;
let computerScore = 0;



// Create a function that uses the result of playRound to do 5 rounds and report a winner or loser at the end

function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound(getComputerChoice(),"scissors"));
    }
    if (playerScore > computerScore) {
        if (playerScore-computerScore == 1) {
            return "You win by 1 point!";
        } else {
            return `You win by ${playerScore-computerScore} points!`;
        }
        
    } else if (playerScore < computerScore) {
        if (computerScore-playerScore == 1) {
            return "You lose by 1 point!";
        } else {
            return `You lose by ${computerScore-playerScore} points!`;
        }
        
    } else {
        return "It is a draw!";
    }
}

console.log(game());
console.log(playerScore);
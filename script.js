const computerChoices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * 3)].toLowerCase();
}

let playerScore = 0;
let computerScore = 0;
let numberTie = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === 'paper') {
        playerScore += 1;
    }
    if (playerSelection === "paper" && computerSelection === 'scissors') {
        playerScore += 1;
    }
    if (playerSelection === "scissors" && computerSelection === 'rock') {
        playerScore += 1;
    }

    if (playerSelection === "rock" && computerSelection === 'scissors') {
        computerScore += 1;
    }
    if (playerSelection === "paper" && computerSelection === 'rock') {
        computerScore += 1;
    }
    if (playerSelection === "scissors" && computerSelection === 'paper') {
        computerScore += 1;
    }

    if (playerSelection === "rock" && computerSelection === 'rock') {
        numberTie += 1;
    }
    if (playerSelection === "paper" && computerSelection === 'paper') {
        numberTie += 1;
    }
    if (playerSelection === "scissors" && computerSelection === 'scissors') {
        numberTie += 1;
    }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerChoices[Math.floor(Math.random() * 3)].toLowerCase();
     playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        console.log("Your Score: " + playerScore + " Computer Score: "  + computerScore + " You Win!")
    } else {
        console.log("Your Score: " + playerScore + " Computer Score: " + computerScore + " Ties: " + numberTie + " You Lose!");
    }
}

console.log(game());
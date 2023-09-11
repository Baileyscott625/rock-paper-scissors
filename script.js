const computerChoices = ['Rock', 'Paper', 'Scissors']

// function for random computer choice

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * 3)].toLowerCase();
}

let playerScore = 0;
let computerScore = 0;
let numberTie = 0;
 
// Function to play a round

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

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

let playerSelection = document.querySelectorAll('.btn');
let computerSelection = getComputerChoice();

// Content made with DOM manipulation

const container = document.querySelector('#container');

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const rock = document.createElement('button');
rock.classList.add('btn', 'rock');
rock.textContent = "Rock";
rock.addEventListener('click', function () {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection)
    yourScore.innerText = "Your Score: " + playerScore
    opponent.innerText = "Computer Score: " + computerScore;
    ties.innerText = "Ties: " + numberTie;
    alertWinner();
    return yourScore + opponent + ties;
});
buttons.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('btn', 'paper');
paper.textContent = "Paper";
paper.addEventListener('click', function () {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection)
    yourScore.innerText = "Your Score: " + playerScore
    opponent.innerText = "Computer Score: " + computerScore;
    ties.innerText = "Ties: " + numberTie;
    alertWinner();
    return yourScore + opponent + ties;
});
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('btn', 'scissors');
scissors.textContent = 'scissors';
scissors.addEventListener('click', function () {
    playRound(playerSelection, computerSelection)
    yourScore.innerText = "Your Score: " + playerScore
    opponent.innerText = "Computer Score: " + computerScore;
    ties.innerText = "Ties: " + numberTie;
    alertWinner();
    return yourScore + opponent + ties;
});
buttons.appendChild(scissors);

container.appendChild(buttons)

const score = document.createElement('div')

const yourScore = document.createElement('h1');
yourScore.classList.add('yourScore');
score.appendChild(yourScore);

const opponent = document.createElement('h1');
opponent.classList.add('opponent');
score.appendChild(opponent);

const ties = document.createElement('h1');
ties.classList.add('ties');
score.appendChild(ties);

container.appendChild(score);

function alertWinner() {
    if (playerScore === 5) {
        alert("You Win!")
    }

    if (computerScore === 5) {
        alert("You Lose!")
    }
}


// function for changing playerSelection and running playRound











/*function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerChoices[Math.floor(Math.random() * 3)].toLowerCase();
     playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        console.log("Your Score: " + playerScore + " Computer Score: "  + computerScore + " You Win!")
    } else {
        console.log("Your Score: " + playerScore + " Computer Score: " + computerScore + " Ties: " + numberTie + " You Lose!");
    }
}*/

//console.log(game());
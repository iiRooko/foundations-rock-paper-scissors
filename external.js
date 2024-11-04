/*console.log("Hello World!")*/

// Code for computer choice to return rock,paper,scissors //
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
    }
}
/*console.log(getComputerChoice())*/

// Code for human choice prompt //
function getHumanChoice() {
    let getHumanChoice = prompt("What do you choose?");

    if (getHumanChoice.toLowerCase() === "rock") {
        alert("You chose rock!");
    }
    
    else if (getHumanChoice.toLowerCase() === "paper") {
        alert("You chose paper");
    }

    else if (getHumanChoice.toLowerCase() === "scissors") {
        alert("You chose scissors");
    }
    return getHumanChoice;
}

// console.log(getHumanChoice()) //

// Code for players scores //
let humanScore = 0;
let computerScore = 0;
// console.log(humanScore) //
// console.log(computerScore) //




function playGame() {
    // Code for round based scoring //
    function playRound(humanChoice, computerChoice) {
        if (humanChoice > computerChoice) {
            humanScore++;
            console.log("You Win!");
        }
        else if (humanChoice < computerChoice) {
            computerScore++;
            console.log("You Lose!");
        }
        else {
            console.log("It's a tie!")
        }
        return humanScore || computerScore;
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}

const gameOverComputer = (computerScore >= 5)
const gameOverHuman = (humanScore >= 5)

function newGameOver(gameOverComputer, gameOverHuman) {
    if (gameOverComputer === true) {
        console.log("Game Over! You lost!");
    }
    else if (gameOverHuman === true) {
        console.log("Game Over! You Won!");
    }
}

playGame();
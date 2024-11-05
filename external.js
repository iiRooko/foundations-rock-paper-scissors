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
    return getHumanChoice.toLowerCase();
}

// console.log(getHumanChoice()) //

// Code for players scores //
let humanScore = 0;
let computerScore = 0;
// console.log(humanScore) //
// console.log(computerScore) //


// Code for round based scoring //
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        console.log("You Win!");
    }
    else {
        computerScore++;
        console.log("You Lose!")
    }
}

function checkGameOver() {
    if (computerScore >= 5) {
        console.log("Game Over! You Lost!");
        return true;
    }
    else if (humanScore >= 5) {
        console.log("Game Over! You Won!");
        return true;
    }
    return false;
}

function playGame() {
    while (!checkGameOver()) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`Computer chose ${computerSelection}`);
        console.log(`You Chose ${humanSelection}`);

        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
}

playGame();
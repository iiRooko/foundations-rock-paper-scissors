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
}
// console.log(getHumanChoice()) //

// Code for players scores //
let humanScore = 0;
let computerScore = 0;
// console.log(humanScore) //
// console.log(computerScore) //
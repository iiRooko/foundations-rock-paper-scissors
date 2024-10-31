/*console.log("Hello World!")*/

/* Code for computer choice to return rock,paper,scissors */
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

/* Code for human choice prompt */


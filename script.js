alert("Let's play rock-paper-scissors")

let roundCount = 1;
function playerSelection() {
    let pick = prompt("Round no. " + roundCount + " Choose between: Rock - Paper - Scissors");
    pick = pick.toLowerCase();
    while (pick != "rock" && pick != "paper" && pick != "scissors") {
        pick = prompt("Invalid! Choose between the 3: Rock - Paper - Scissors");
        pick = pick.toLowerCase();
    }
    roundCount++;
    return pick
}

function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    let getIndex = Math.floor(Math.random() * pick.length);
    let answer = pick[getIndex];
    return answer
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw!";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw!";
    }
    else {
        return "You Win!";
    }
}

function game() {
    let player = playerSelection();
    let computerSelection = getComputerChoice();
    return playRound(player, computerSelection);
}

//alert(game());

let playerScore = 0;
let computerScore = 0;
for (let i = 1; i <= 5; i++) {

    if (game() === "You Win!") {
        playerScore++;
    }
    else {
        computerScore++
    }
}

if (playerScore > computerScore) {
    alert("You Win! " + playerScore + " - " + computerScore)
}
else {
    alert("You Lose! " + playerScore + " - " + computerScore)
}
alert("Let's play rock-paper-scissors")

function playerSelection(playerSelect) {
    let pick = playerSelect;
    pick = pick.toLowerCase();
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


const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "Rock") {
            let winner = playRound(playerSelection("Rock"), getComputerChoice());
            if (winner === "You Win!") {
                playerScore++;
            }
            else {
                computerScore++;
            }
        }
        else if (button.textContent === "Paper") {
            let winner = playRound(playerSelection("Paper"), getComputerChoice());
            if (winner === "You Win!") {
                playerScore++;
            }
            else {
                computerScore++;
            }
        }
        else if (button.textContent === "Scissors") {
            let winner = playRound(playerSelection("Scissors"), getComputerChoice());
            if (winner === "You Win!") {
                playerScore++;
            }
            else {
                computerScore++;
            }
        }

        const disScore = document.getElementById("score");
        disScore.textContent = playerScore + " - " + computerScore;
        if (playerScore === 5 || computerScore === 5) 
        {
            let result = playerScore === 5 ? "You win!" : "You lose!";
            buttons.forEach((button) => {button.disabled = true;});

            const disResult = document.getElementById("result")
            disResult.textContent = result;
        }

    });
});








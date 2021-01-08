function getRandomNumber() {
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
}

function computerPlay() {
    let playOptions = ["rock", "paper", "scissors"];
    let choise = playOptions[getRandomNumber()];
    console.log(`Computer choise: ${choise}`);
    return choise;
}

function playerPlay() {
    let playerChoise;
    document.getElementById("rockBtn").addEventListener("click", function () {
        playerChoise = "rock";
    });
    document.getElementById("paperBtn").addEventListener("click", function () {
        playerChoise = "paper";
    });
    document
        .getElementById("scissorsBtn")
        .addEventListener("click", function () {
            playerChoise = "scissors";
        });
    return playerChoise;
}

function chooseWinner(player, computer) {
    let winner;
    if (player === "rock") {
        if (computer === "rock") {
            winner = "Tie";
        } else if (computer === "paper") {
            winner = "Computer";
        } else if (computer === "scissors") {
            winner = "Player";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            winner = "Player";
        } else if (computer === "paper") {
            winner = "Tie";
        } else if (computer === "scissors") {
            winner = "Computer";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            winner = "Computer";
        } else if (computer === "paper") {
            winner = "Player";
        } else if (computer === "scissors") {
            winner = "Tie";
        }
    }
    return winner;
}

function playRound(playerSelection, computerSelection) {
    alert(`The winner is: ${chooseWinner(playerSelection, computerSelection)}`);
    document.getElementById("playBtn").style.display = 'none';
    document.getElementById("againBtn").style.display = "block";
    document.getElementById("againBtn").style.margin = "0 auto";
}

function game() {
    let playerSelection;
    const computerSelection = computerPlay();
    if (playerSelection == undefined) {
        console.log("Choose a weapon and click play");
    }
    document.getElementById("rockBtn").addEventListener("click", function () {
        playerSelection = "rock";
        console.log(`Player choise: ${playerSelection}`);
    });
    document.getElementById("paperBtn").addEventListener("click", function () {
        playerSelection = "paper";
        console.log(`Player choise: ${playerSelection}`);
    });
    document
        .getElementById("scissorsBtn")
        .addEventListener("click", function () {
            playerSelection = "scissors";
            console.log(`Player choise: ${playerSelection}`);
        });

    document.getElementById("playBtn").addEventListener("click", function () {
        playRound(playerSelection, computerSelection);
    });
}
document.getElementById("againBtn").addEventListener("click", function () {
    location.reload();
});

game();

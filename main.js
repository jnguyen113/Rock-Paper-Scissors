const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
let playerSelection = undefined;
let computerSelection = undefined;

let userScore = 0;
const userCounter = document.getElementById("user-score");
let compScore = 0;
const compCounter = document.getElementById("comp-score");


rock.addEventListener('click', function () {
    let playerSelection = 'rock';
    let computerSelection = compTurn();
    if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        userScore++;
        userCounter.innerHTML = userScore;
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        alert('You Lose,' + " Computer chose " + computerSelection);
        compScore++;
        compCounter.innerHTML = compScore;
    } else {
        alert('Tied with ' + computerSelection);

    }
    winner(userScore, compScore);
});


paper.addEventListener('click', function () {
    let playerSelection = 'paper';
    let computerSelection = compTurn();
    if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        alert('You Win,' + " Computer chose " + computerSelection);
        userScore++;
        userCounter.innerHTML = userScore;
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        alert('You Lose,' + " Computer chose " + computerSelection);
        compScore++;
        compCounter.innerHTML = compScore;
    } else {
        alert('Tied with ' + computerSelection);
    }
    winner(userScore, compScore);
});

scissors.addEventListener('click', function () {
    let playerSelection = 'scissors';
    let computerSelection = compTurn();
    if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        alert('You Win,' + " Computer chose " + computerSelection);
        userScore++;
        userCounter.innerHTML = userScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        alert('You Lose,' + " Computer chose " + computerSelection);
        compScore++;
        compCounter.innerHTML = compScore;
    } else {
        alert('Tied with ' + computerSelection);
    }
    winner(userScore, compScore);
});
function compTurn() {
    const options = ["Rock", "Paper", "Scissors"];
    const compPlay = Math.floor(Math.random() * 3);
    return options[compPlay];

}

function winner(userScore, compScore) {
    if (userScore === 3) {
        alert('You Win');
    }
    if (compScore === 3) {
        alert('You Lose');
    }
}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors");
    console.log("You will be playing against a computer.");
    console.log("Good Luck!");
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 || computerScore < 3) {
        const userTurn = prompt("Rock, Paper, or Scissors?");
        const computerTurn = compTurn();
        if ((userTurn === "Rock" && computerTurn === "Scissors") || (userTurn === "Scissors" && computerTurn === "Paper") || (userTurn === "Paper" && computerTurn === "Rock")) {
            console.log("You win with " + userTurn + " Computer chose " + computerTurn);
            playerScore++;
        }

        if ((userTurn === "Rock" && computerTurn === "Paper") || (userTurn === "Scissors" && computerTurn === "Rock") || (userTurn === "Paper" && computerTurn === "Scissor")) {
            console.log("You lost with " + userTurn + " Computer chose " + computerTurn);
            computerScore++;
        }
        if ((userTurn === "Rock" && computerTurn === "Rock") || (userTurn === "Scissors" && computerTurn === "Scissors") || (userTurn === "Paper" && computerTurn === "Paper")) {
            console.log("Tie with " + computerTurn)
        }
    }
    if (playerScore >= 3) {
        alert("You Win!");
    } else {
        alert("Computer Won");
    }

}
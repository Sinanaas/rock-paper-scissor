const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playerChoice() {
    return document.querySelector('#playerChoice').value.toLowerCase();
}

function duel(computerChoice, playerChoice) {
    console.log(computerChoice, playerChoice);
    if (computerChoice === playerChoice) {
        return document.getElementById('result').textContent = "It's a tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return document.getElementById('result').textContent = "You win!";
    } else {
        return document.getElementById('result').textContent = "You lose";
    }
}
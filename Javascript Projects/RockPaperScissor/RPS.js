const playerChoice = prompt("Choose rock, paper, or scissors:");

const choices = ["rock", "paper", "scissors"];
const index = Math.floor(Math.random() * choices.length);
const computerChoice = choices[index];

const playerDisplay = document.querySelector('.player');
const computerDisplay = document.querySelector('.computer');
const resultDisplay = document.querySelector('.result');

playerDisplay.textContent = playerChoice;
computerDisplay.textContent = computerChoice;

const playerChoiceLower = playerChoice.toLowerCase();
const computerChoiceLower = computerChoice.toLowerCase();

if (playerChoiceLower === computerChoiceLower) {
    resultDisplay.textContent = "Game Draw!";
} else if (playerChoiceLower === "paper") {
    if (computerChoiceLower === "scissors") {
        resultDisplay.textContent = "Computer Wins!";
    } else {
        resultDisplay.textContent = "Player Wins!";
    }
} else if (playerChoiceLower === "rock") {
    if (computerChoiceLower === "paper") {
        resultDisplay.textContent = "Computer Wins!";
    } else {
        resultDisplay.textContent = "Player Wins!";
    }
} else if (playerChoiceLower === "scissors") {
    if (computerChoiceLower === "rock") {
        resultDisplay.textContent = "Computer Wins!";
    } else {
        resultDisplay.textContent = "Player Wins!";
    }
}

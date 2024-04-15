const choices = ["rock", "paper", "scissors"];

document.querySelector('button').addEventListener('click',function(){
const playerChoice = document.querySelector('#userchoice').value.toLowerCase();
if (!choices.includes(playerChoice)) {
    alert("Error: Invalid choice");
    return;
}
const index = Math.floor(Math.random() * choices.length);
const computerChoice = choices[index].toLowerCase();

const playerDisplay = document.querySelector('.player');
const computerDisplay = document.querySelector('.computer');
const resultDisplay = document.querySelector('.result');
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

playerDisplay.textContent = capitalize(playerChoice);
computerDisplay.textContent = capitalize(computerChoice);

if (playerChoice === computerChoice) {
    resultDisplay.textContent = "Game Draw!😒";
} else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
        resultDisplay.textContent = `Computer Wins! 🤖`;
    } else {
        resultDisplay.textContent = `Player Wins!👑`;
    }
} else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
        resultDisplay.textContent = `Computer Wins! 🤖`;
    } else {
        resultDisplay.textContent = `Player Wins!👑`;
    }
} else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
        resultDisplay.textContent = `Computer Wins! 🤖`;
    } else {
        resultDisplay.textContent = `Player Wins!👑`;
    }
}});

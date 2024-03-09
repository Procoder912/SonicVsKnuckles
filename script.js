let rock = document.querySelector("#button1");
let paper = document.querySelector("#button2");
let scissors = document.querySelector("#button3");

let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultText = document.querySelector("#resultText");

// document.addEventListener("click", function (event) {

// });

let player;
let computer;

rock.addEventListener("click", function () {
    player = "rock";
    playGame();
});

paper.addEventListener("click", function () {
    player = "paper";
    playGame();
});

scissors.addEventListener("click", function () {
    player = "scissors";
    playGame();
});

function playGame() {
    computerTurn()
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner(player, computer);
};

function checkWinner(player, computer) {
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      return "Player wins!";
    } else if (
      (computer === "rock" && player === "scissors") ||
      (computer === "scissors" && player === "paper") ||
      (computer === "paper" && player === "rock")
    ) {
      return "Computer wins!";
    } else if (player === computer) {
      return "It's a tie!";
    } else {
      return "Invalid input: error?";
    }
  }

function computerTurn() {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  switch (randomNum) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}

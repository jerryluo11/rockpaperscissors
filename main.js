console.log("Hello World");

function getComputerChoice() {
  const output = Math.floor(3 * Math.random()) + 1;
  if (output == 1) {
    return "rock";
  } else if (output == 2) {
    return "paper";
  } else if (output == 3) {
    return "scissors";
  }
}
function playRound(playerSelection, computerSelection) {
  console.log("Player selection: " + playerSelection);
  console.log("Computer selection: " + computerSelection);
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "rock") {
      return "draw";
    } else if (computerSelection == "paper") {
      return "computer";
    } else if (computerSelection == "scissors") {
      return "player";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "rock") {
      return "player";
    } else if (computerSelection == "paper") {
      return "draw";
    } else if (computerSelection == "scissors") {
      return "computer";
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "rock") {
      return "computer";
    } else if (computerSelection == "paper") {
      return "player";
    } else if (computerSelection == "scissors") {
      return "draw";
    }
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt("Rock, paper, or scissors?");
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "player") {
      playerWins++;
    } else if (result == "computer") {
      computerWins++;
    }
    alert(
      "The computer played " + computerSelection + "." + "\nWinner: " + result
    );
  }
  console.log("Player: " + playerWins);
  console.log("Computer: " + computerWins);
}

game();

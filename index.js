const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function winner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = winner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It is a tie";
  } else if (result == "player") {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper or Scissors?");
    if (choice == null) {
      continue;
    }
    const choiceLowerCase = choice.toLowerCase();
    if (options.includes(choiceLowerCase)) {
      validatedInput = true;
      return choiceLowerCase;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("hola");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("");
    if (winner(playerSelection, computerSelection) == "player") {
      scorePlayer++;
    } else if (winner(playerSelection, computerSelection) == "computer") {
      scoreComputer++;
    }
  }
  if (scorePlayer > scoreComputer) {
    console, log("You win!");
  } else {
    console.log("You lose!");
  }
}

game();

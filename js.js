
let youWin = 0
let youLost = 0

function playRound(){

let humanChoice = prompt("What do you pick?");

humanChoice = humanChoice.toLowerCase();

let computerChoice = compChoice();

  if (computerChoice == humanChoice) { 
    alert("Both the same! Play again!")
  }
  else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")){
    youWin+=1;
    return alert(`You win! ${humanChoice} beats ${computerChoice}.`);
  }
  else {
    youLost+=1;
    return alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}


function compChoice(){

  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
  }
  else if (computerChoice == 1){
    computerChoice = "paper";
  }
  else if (computerChoice == 2){
    computerChoice = "scissors";
  }
  return computerChoice;
}


function playGame(){

  while (youLost<5 && youWin<5) {
    playRound();
  }
  if (youWin==5){
    alert("You won the game, Congrats!");
  }
  else if (youLost==5){
    alert("You lost the game!");
  }
}

playGame();

play some.
function playRound(humanChoice, computerChoice) {

    humanChoice === computerChoice ? alert("It's a Tie"):
    humanChoice === 'rock' && computerChoice === 'paper' ? alert("You lose!"):
    humanChoice === 'paper' && computerChoice === 'scissors' ? alert("You lose!"):
    humanChoice === 'scissors' && computerChoice === 'rock' ? alert("You lose!"):
    alert("You win!");

    let result;
    
    if (humanChoice === computerChoice) {
      return result="It's a Tie";
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      return result="You lose!";
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      return result="You lose!";
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      return result="You lose!";
    } else {
      return result="You win!"};
}


function playGame() {

    function getHumanChoice() {  //then prompt function for human response
    return prompt("So, what's your choice - rock, paper, scissors?","")
    }

    function getComputerChoice() {      // created computer response
    const choice = Math.floor(Math.random() * 3)
    return choice == 0 ? "rock":
          choice == 1 ? "paper":
          "scissors";
    }      

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    if (result == "You lose!"){
       computerScore ++;
    } else if (result == "You win!"){
       humanScore ++;
    } else {
      // do nothing
    }    
}

let humanScore = 0
let computerScore = 0

for (let i=0; i<5; i++) {
    playGame();
}

console.log(`Your Score: ${humanScore}`)
console.log(`Computer Score: ${computerScore}`)

if (humanScore==computerScore) {
  console.log("It's a Draw")
} else if (humanScore>computerScore) {
  console.log("You Won This Round")
} else if (humanScore<computerScore) {
console.log("You Lost This Round")
} else {
  console.log("Some Issue")
};


// now we need to run all this 5 times so i ll try to put all these in for loop
  // put 
// one winner is chosen after every round of 5 times 
  // create a function that adds score for winner
  // the high scorer will be declared as the winnwe
// winner gets one point and add that point to scores and declare a winner
  //
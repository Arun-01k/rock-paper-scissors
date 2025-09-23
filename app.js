function playRound(humanChoice, computerChoice) {  //decides the game logic and console.logs and returns result

    let result;
    
    if (humanChoice === computerChoice) {
      result="It's a Tie";
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      result="You lose!";
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      result="You lose!";
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      result="You lose!";
    } else {
      result="You win!"};

    return result;
};


let humanScore = 0
let computerScore = 0

function updateScores(result){

  if (result == "You lose!"){
    computerScore ++;
  } else if (result == "You win!"){
    humanScore ++;
  } else {
    // do nothing
  } 

  return {humanScore, computerScore};
};

function getComputerChoice() {      // created computer response
const choice = Math.floor(Math.random() * 3)
return choice == 0 ? "rock":
      choice == 1 ? "paper":
      "scissors";
};   

const main = document.querySelector("#main");

const rock = document.createElement("button"); //created buttons for human selection
const paper = document.createElement("button");
const scissors = document.createElement("button");

// rock.classList.add("rockid");
// paper.classList.add("paperid");
// scissors.classList.add("scissorsid");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

// const buttons = document.querySelectorAll("button");
// buttons.forEach(btn => {
//   btn.style.padding = "20px";
//   btn.style.fontSize = "30px";
//   btn.style.margin = "4px";
// });

main.appendChild(scissors);
main.appendChild(paper);
main.appendChild(rock);

const currentround = document.createElement("p"); // adds p tag for current round display
currentround.textContent = "Current Round: ";
document.body.appendChild(currentround);

const scores = document.createElement("a");  // 'a' tag for p tag above
currentround.appendChild(scores);

const announceWinner = document.createElement("p"); // another p tag for announcing winner
document.body.appendChild(announceWinner);

function displayScoreDom(){ // update score after each click/round 
  scores.textContent = `Your Score: ${humanScore}  Computer Score: ${computerScore}`;
}

let roundPlayed = 0;
totalRounds = 0;

function clearAnounceWinner(){
  if (totalRounds%6 === 0){
    announceWinner.textContent = '';
  }
}

function referee(){  // announce winner after 5 rounds and resets score

  totalRounds++;
  clearAnounceWinner()
  if (roundPlayed === 5){
    let dec;
    if (humanScore==computerScore) {
      dec = "It's a Tie"
    } else if (humanScore>computerScore) {
      dec = "You Won This Round"
    } else if (humanScore<computerScore) {
      dec = "You Lost This Round"
    } else {
      dec = "Some Issue"
    }

    announceWinner.textContent = dec;
    roundPlayed = 0;
    humanScore = 0;
    computerScore = 0;
  }
};

rock.addEventListener("click", () =>{   // button to select the choices
  result = playRound("rock", getComputerChoice());
  updateScores(result);
  displayScoreDom();
  roundPlayed++;
  referee();

});

paper.addEventListener("click", () =>{  // button to select the choices
  result = playRound("paper", getComputerChoice());
  updateScores(result);
  displayScoreDom();
  roundPlayed++;
  referee();
});

scissors.addEventListener("click", () =>{    // button to select the choices
  result = playRound("scissors", getComputerChoice());
  updateScores(result);
  displayScoreDom();
  roundPlayed++;
  referee();
});
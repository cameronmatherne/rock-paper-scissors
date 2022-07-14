
let computerRoundsWon = 0;
let userRoundsWon = 0;
let roundsPlayed = 0;

const score = document.querySelector('.score');
const scoreMessage = document.querySelector('.scoreMessage');
const finalScore = document.querySelector('.finalScore');

const click = new Audio("sounds/click.wav")
scoreMessage.textContent = ''


score.innerHTML ='USER SCORE: ' + userRoundsWon + "      " + 'COMPUTER SCORE: ' + computerRoundsWon;
score.style.color = "rgb(177, 59, 59)";

const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');

btnOne.addEventListener('click', () => {
    playRound('rock', computerPlay())
    playAudio();
}); 

btnTwo.addEventListener('click', () => {
    playRound('paper', computerPlay())
    playAudio();
}); 

btnThree.addEventListener('click', () => {
    playRound('scissors', computerPlay())
    playAudio();

}); 

function playAudio() {
    var audio = new Audio("sounds/click.wav");
    audio.play();
}

function computerPlay() {
    let rock = "rock"; 
    let paper = "paper";
    let scissors = "scissors";

    let rand = Math.floor(Math.random() * 3)

    if (rand == 1){
        return rock;
    }
    else if (rand == 2) {
        return paper;
    }
    else {
        return scissors; 
    }
}

function getUserSelection() {
   let selection = prompt("Rock, paper, or scissors?")
   final = selection.toLowerCase()
   return final;
}

function updateScore() {
    score.innerHTML  ='USER SCORE: ' + userRoundsWon + "    " + 'COMPUTER SCORE: ' + computerRoundsWon;
}

function resetGame() {
    const resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Reset game?";
    document.getElementById("lowerHalf").appendChild(resetBtn);   
    resetBtn.style.fontSize = '48px';
    resetBtn.style.marginTop = '30px';

    resetBtn.addEventListener('click', () => {
        document.location.reload();
    }); 

}
function playRound(userSelection, computerSelection) {

    if (userSelection == "rock" && computerSelection == "paper") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        updateScore();

    } else if (userSelection == "rock" && computerSelection == "scissors") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
       updateScore();

    } else if (userSelection == "paper" && computerSelection == "rock") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
        updateScore();

    } else if (userSelection == "paper" && computerSelection == "scissors") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        updateScore();

    } else if (userSelection == "scissors" && computerSelection == "rock") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        updateScore();

    } else if (userSelection == "scissors" && computerSelection == "paper") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
        updateScore();

    } else if (userSelection == computerSelection) {
        scoreMessage.textContent = ("Round is a draw.")
        updateScore();

    }

    if (userRoundsWon == 3) {
        finalScore.textContent ="User has won";
        resetGame();
    }
    if (computerRoundsWon == 3) {
        finalScore.textContent = "Computer has won";
        resetGame();
    }

}


let computerRoundsWon = 0;
let userRoundsWon = 0;
let roundsPlayed = 0;

const score = document.querySelector('.score');
const scoreMessage = document.querySelector('.scoreMessage');
const finalScore = document.querySelector('.finalScore');
scoreMessage.textContent = ''

score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;


const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');

btnOne.addEventListener('click', () => {
    playRound('rock', computerPlay())
}); 

btnTwo.addEventListener('click', () => {
    playRound('paper', computerPlay())

}); 

btnThree.addEventListener('click', () => {
    playRound('scissors', computerPlay())

}); 

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

function playRound(userSelection, computerSelection) {

    if (userSelection == "rock" && computerSelection == "paper") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == "rock" && computerSelection == "scissors") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == "paper" && computerSelection == "rock") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == "paper" && computerSelection == "scissors") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == "scissors" && computerSelection == "rock") {
        scoreMessage.textContent = ("Computer wins round.")
        computerRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == "scissors" && computerSelection == "paper") {
        scoreMessage.textContent = ("User wins round.")
        userRoundsWon++
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    } else if (userSelection == computerSelection) {
        scoreMessage.textContent = ("Round is a draw.")
        score.textContent ='User score: ' + userRoundsWon + "    " + 'Computer Score: ' + computerRoundsWon;

    }

    if (userRoundsWon == 3) {

        finalScore.textContent ="User has won";
    }
    if (computerRoundsWon == 3) {
        finalScore.textContent = "Computer has won";
    }

}






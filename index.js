
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
        console.log("Computer wins round.")
        computerRoundsWon++

    } else if (userSelection == "rock" && computerSelection == "scissors") {
        console.log("User wins round.")
        userRoundsWon++

    } else if (userSelection == "paper" && computerSelection == "rock") {
        console.log("User wins round.")
        userRoundsWon++

    } else if (userSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer wins round.")
        computerRoundsWon++

    } else if (userSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer wins round.")
        computerRoundsWon++

    } else if (userSelection == "scissors" && computerSelection == "paper") {
        console.log("User wins round.")
        userRoundsWon++

    } else if (userSelection == computerSelection) {
        console.log("Round is a draw.")

    }

}

let computerRoundsWon = 0
let userRoundsWon = 0

function mainGame() {
    for(let i=0; i <5; i++) {
        playRound(getUserSelection(), computerPlay()) 
    }
    alert("FINAL SCORE: User: " + userRoundsWon + " Computer: " + computerRoundsWon)
}
// To display or to hide rules
function hideShow() {
    var x = document.querySelector(".rule-message-box")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else x.style.display = "none"
}

var playerScore = document.getElementById("player-score")
playerScore.innerHTML = 0
var computerScore = document.getElementById("computer-score")
computerScore.innerHTML = 0
var tieScore = document.getElementById("tie-score")
tieScore.innerHTML = 0
var playerChoice = ""
var computerChoice = Math.floor(Math.random() * 3) //randomize a number from 0 up to 3 but not 3.

// functionality for when player click on rock image
var rockOption = document.querySelector(".rock")
rockOption.addEventListener("click", function () {
    var computerChoice = Math.floor(Math.random() * 3);
    var computerPick = document.getElementById('computer-choice')
    // if statement to display the correct image for computer's choice. 
    if (computerChoice == 0) {
        computerPick.setAttribute('src', 'rock.jpg')
        document.getElementById('computer-message').innerText = "Computer picked ROCK"
    } else if (computerChoice == 1) {
        computerPick.setAttribute('src', 'paper.jpg')
        document.getElementById('computer-message').innerText = "Computer picked PAPER"
    } else {
        computerPick.setAttribute('src', 'scissor.jpg')
        document.getElementById('computer-message').innerText = "Computer picked SCISSOR"
    }
    playerChoice = 0;
    document.getElementById('player-message').innerText = "You picked ROCK"
    // comparing and scoring according
    if (computerChoice == playerChoice) {
        tieScore.innerText++
        document.querySelector(".winner-loser").innerText = "It is a Tie!"
    } else if (computerChoice == 1) {
        computerScore.innerText++
        document.querySelector(".winner-loser").innerText = "Computer Win!"
    } else {
        playerScore.innerText++
        document.querySelector(".winner-loser").innerText = "You Win!"
    }
})
// functionality for when player click on paper image
var paperOption = document.querySelector(".paper")
paperOption.addEventListener("click", function () {
    var computerChoice = Math.floor(Math.random() * 3);
    var computerPick = document.getElementById('computer-choice')
    if (computerChoice == 0) {
        computerPick.setAttribute('src', 'rock.jpg')
        document.getElementById('computer-message').innerText = "Computer picked ROCK"

    } else if (computerChoice == 1) {
        computerPick.setAttribute('src', 'paper.jpg')
        document.getElementById('computer-message').innerText = "Computer picked PAPER"
    } else {
        computerPick.setAttribute('src', 'scissor.jpg')
        document.getElementById('computer-message').innerText = "Computer picked SCISSOR"
    }
    playerChoice = 1;
    document.getElementById('player-message').innerText = "You picked PAPER"
    if (computerChoice == playerChoice) {
        tieScore.innerText++
        document.querySelector(".winner-loser").innerText = "It is a Tie!"
    } else if (computerChoice == 2) {
        computerScore.innerText++
        document.querySelector(".winner-loser").innerText = "Computer Win!"
    } else {
        playerScore.innerText++
        document.querySelector(".winner-loser").innerText = "You Win!"
    }
})
// functionality for when player click on scissor image
var scissorOption = document.querySelector(".scissor")
scissorOption.addEventListener("click", function () {
    var computerChoice = Math.floor(Math.random() * 3);
    var computerPick = document.getElementById('computer-choice')
    if (computerChoice == 0) {
        computerPick.setAttribute('src', 'rock.jpg')
        document.getElementById('computer-message').innerText = "Computer picked ROCK"
    } else if (computerChoice == 1) {
        computerPick.setAttribute('src', 'paper.jpg')
        document.getElementById('computer-message').innerText = "Computer picked PAPER"
    } else {
        computerPick.setAttribute('src', 'scissor.jpg')
        document.getElementById('computer-message').innerText = "Computer picked SCISSOR"
    }
    playerChoice = 2;
    document.getElementById('player-message').innerText = "You picked SCISSOR"
    if (computerChoice == playerChoice) {
        tieScore.innerText++
        document.querySelector(".winner-loser").innerText = "It is a Tie!"
    } else if (computerChoice == 0) {
        computerScore.innerText++
        document.querySelector(".winner-loser").innerText = "Computer Win!"
    } else {
        playerScore.innerText++
        document.querySelector(".winner-loser").innerText = "You Win!"
    }
})
// reset button, which reset all score being tracked. 
var resetBtn = document.querySelector(".reset").addEventListener("click", function () {
    playerScore.innerText = "0"
    computerScore.innerText = "0"
    tieScore.innerText = "0"
})
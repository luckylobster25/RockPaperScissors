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
var computerChoice = Math.floor(Math.random() * 3)

var rockOption = document.querySelector(".rock")
rockOption.addEventListener("click", function () {
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
    playerChoice = 0;
    document.getElementById('player-message').innerText = "You picked ROCK"
    if (computerChoice == playerChoice) {
        tieScore.innerText++
    } else if (computerChoice == 1) {
        computerScore.innerText++
    } else {
        playerScore.innerText++
    }
})
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
    } else if (computerChoice == 2) {
        computerScore.innerText++
    } else {
        playerScore.innerText++
    }
})
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
    } else if (computerChoice == 0) {
        computerScore.innerText++
    } else {
        playerScore.innerText++
    }
})

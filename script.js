function computerRandomMove() {
    const options =["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function playerHasWon(player, computer) {
    return ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper") );
}
// function playerComputerTie(player, computer) {
//     return (player === computer);
// }
let playerScore = 0;
let computerScore = 0;
function playerComputerMove(playerOption) {
    const computerResult = computerRandomMove();
    if (playerHasWon(playerOption, computerResult)){
        playerScore++;
        return `Player wins! ${playerOption} beats ${computerResult}`;
    } else if(playerOption === computerResult){
        return `It's tie! Both chose ${playerOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${playerOption}`;
    }
}
const playerScores = document.querySelector('.player-scores');
const computerScores = document.querySelector('.computer-scores');
const resultMessage = document.querySelector('.results-msg');
const winnerMessage = document.querySelector('.winner-msg');
const playerChoice = document.querySelector('.player-option');

function showResult(playerOption){
    resultMessage.innerText = playerComputerMove(playerOption);
    playerScores.innerText = playerScore;
    computerScores.innerText = computerScore;
    if (playerScore === 3 || computerScore === 3){
        winnerMessage.innerText = `${(playerScore === 3)? "Player":"Computer"} has won the game!`;
        playerChoice.style.display = "none";
        resetButton.style.display = "block";
    }
}

function resetGame() {
    resultMessage.innerText = "";
    winnerMessage.innerText = "";
    playerScore = 0;
    computerScore = 0;
    playerScores.innerText = playerScore;
    computerScores.innerText = computerScore;
    playerChoice.style.display = "block";
    resetButton.style.display = "none";
}
const rockButton = document.querySelector('.rock-btn');
const paperButton = document.querySelector('.paper-btn');
const scissorsButton = document.querySelector('.scissors-btn');
const resetButton = document.querySelector('.reset-btn');

rockButton.addEventListener('click', function(){
    showResult("Rock");
})
paperButton.addEventListener('click', function(){
    showResult("Paper");
})
scissorsButton.addEventListener('click', function(){
    showResult("Scissors");
})
resetButton.addEventListener("click", resetGame);
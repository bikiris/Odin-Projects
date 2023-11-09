function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;
    switch (choice) {
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "rock";
            break;
        case 3: 
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    if(playerSelection == computerSelection) return "Draw";
    if((playerSelection == "ROCK" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "ROCK")) return "Lose";
    return "Win";
}

function game(){
    const buttonChoice = document.querySelector('.buttons');
    let playerChoice = 'null';
    const choice = document.querySelector('.display');
    const playerScore = document.querySelector('.playerScore');
    let ps = 0;
    const computerScore = document.querySelector('.computerScore');
    let cs = 0;
   
    buttonChoice.addEventListener('click', (event)=>{
        playerChoice = event.target.id;
        choice.textContent = 'You choose ' + playerChoice;
        const result = playRound(playerChoice,getComputerChoice());
        if(result=='Win'){
            ps++;
        }else if(result=='Lose'){
            cs++;
        }
        playerScore.textContent = 'Your score is ' + ps;
        computerScore.textContent = 'Computer score is ' + cs;
    });
    

}
game();


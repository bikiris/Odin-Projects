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
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Pick rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("You " + result);
        if(result == "Win"){
            playerScore++;
        }else if(result == "Lose"){
            computerScore++;
        }
        console.log("Your score is: " + playerScore + "\nComputer score is: " + computerScore);
    }
}
game();


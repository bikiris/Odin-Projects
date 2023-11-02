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
    if(playerSelection == "ROCK"){
        if(computerSelection == "PAPER") return "Lose";
        return "Win";
    }else if(playerSelection == "PAPER"){
        if(computerSelection == "SCISSORS") return "Lose";
        return "Win";
    }else if(computerSelection == "ROCK") return "Lose";

    return "Win";
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Pick rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        console.log("You picked " + playerSelection);
        console.log("Computer picked " + computerSelection);
        console.log("You " + playRound(playerSelection, computerSelection));
    }
}
game();


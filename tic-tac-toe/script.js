function Cell(){
  let value = 0;

  const setValue = (player) => {
    value = player;
  }

  const getValue = () => value;

  return { setValue, getValue };
}


function Gameboard(){
  //initialize empty board
  const rows = 3;
  const cols = 3;
  const board = [];

  const getBoard = () => board;

  const addToken = (player, row, col) => {
    if(board[row][col].getValue() != 0) {
      return false;
    }else{
      board[row][col].setValue(player);
    }
    return true;
  }

  const printBoard = () => {
    let b = ""
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        b += board[i][j].getValue() + " ";
      }
      b += "\n";
    }
    console.log(b);
  }

  const reset = () => {
    for(let i = 0; i < rows; i++){
      board[i] = [];
      for(let j = 0; j < cols; j++){
        board[i].push(Cell()); 
      }
    }
  }

  //initialize
  reset();
  return { getBoard, addToken, printBoard, reset };
}


function GameController(PlayerOne, PlayerTwo){
  const board = Gameboard();
  let winner = false;
  
  const players = [
    {
      name: PlayerOne,
      token: 1
    },
    {
      name: PlayerTwo,
      token: -1
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  const getActivePlayer = () => activePlayer;

  const printRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
  }

  const playRound = (row, col) => {
    //check if the game is finished
    if(winner) return false;
    //need check if token is valid
    if(!board.addToken(getActivePlayer().token, row, col)){
      console.log("Invalid play, try again");
      return false;
    }else if(checkWinner()){
      console.log(`${getActivePlayer().name} has won`);
    }else{
      switchPlayerTurn();
      printRound();
    }
    return true;
  }

  const checkWinner = () => {
    const tempBoard = board.getBoard();
    const rows = tempBoard.length;
    const cols = tempBoard[0].length;

    //row checker
    for(let i = 0; i < rows; i++){
      let sum = 0;
      for(let j = 0; j < cols; j++){
        sum += tempBoard[i][j].getValue();
      }
      if(sum === getActivePlayer().token * rows) {
        winner = true;
        return true;
      }
    }
    
    //col checker
    for(let j = 0; j < cols; j++){
      let sum = 0;
      for(let i = 0; i < rows; i++){
        sum += tempBoard[i][j].getValue();
      }
      if(sum === getActivePlayer().token * rows) {
        winner = true;
        return true;
      }
    }

    //top left diag checker
    sum = 0;
    for(let i = 0; i < rows; i++){
      sum += tempBoard[i][i].getValue();
    }
    if(sum === getActivePlayer().token * rows) {
      winner = true;
      return true;
    }
  
    //bottom left diag checker
    sum = 0;
    for(let i = 0; i < rows; i++){
      sum += tempBoard[i][rows-i-1].getValue();
    }
    if(sum === getActivePlayer().token * rows) {
      winner = true;
      return true;
    }

    return false;
  }

  const reset = () => {
    winner = false;
    board.reset();
  }

  const getBoard = () => {
    return board.getBoard();
  }
  
  return { playRound, getActivePlayer, getBoard, checkWinner };
}


function ScreenController(){
  const game = GameController("PlayerOne" ,"PlayerTwo");
  const boardDiv = document.querySelector(".board");
  const turnDiv = document.querySelector(".turn");

  const updateScreen = () => {
    //clear the board
    boardDiv.textContent = "";

    //get the newest board
    const board = game.getBoard();
    const playerTurn = game.getActivePlayer();

    //display active player
    turnDiv.textContent = `It is ${playerTurn.name}'s turn`;
    
    //render board
    board.forEach((row, i) => {
      row.forEach((item, j) => {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.textContent = item.getValue();
        boardDiv.appendChild(cell);
      })
    })

    //check winner
    if(game.checkWinner()){
      turnDiv.textContent = `${playerTurn.name} has won the game!`
    }
  }

  function clickEventHandler(e) {
    const selectedRow = e.target.dataset.row;
    const selectedCol = e.target.dataset.col;

    //make sure the board is selected
    if(!selectedRow) return;

    if(game.playRound(selectedRow, selectedCol)){
      updateScreen();
    }
    
  }
  boardDiv.addEventListener("click", clickEventHandler);

  //initialize
  updateScreen();
}

ScreenController();
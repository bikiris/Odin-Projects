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

  for(let i = 0; i < rows; i++){
    board[i] = [];
    for(let j = 0; j < cols; j++){
      board[i].push(Cell()); 
    }
  }
  
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

  return { getBoard, addToken, printBoard };
}


function GameController(PlayerOne, PlayerTwo){
  const board = Gameboard();

  
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
    //need check if token is valid
    if(!board.addToken(getActivePlayer().token, row, col)){
      console.log("Invalid play, try again");
      return;
    }
    if(checkWinner()){
      announceWinner();
    }else{
      switchPlayerTurn();
      printRound();
    }
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
        return true;
      }
    }

    //top left diag checker
    sum = 0;
    for(let i = 0; i < rows; i++){
      sum += tempBoard[i][i].getValue();
    }
    if(sum === getActivePlayer().token * rows) {
      return true;
    }
  
    //bottom left diag checker
    sum = 0;
    for(let i = 0; i < rows; i++){
      sum += tempBoard[i][rows-i-1].getValue();
    }
    if(sum === getActivePlayer().token * rows) {
      return true;
    }

    return false;
  }

  const announceWinner = () => {
    console.log(`${getActivePlayer().name} has won`);
    reset();
  }

  
  const reset = () => {
    //reset board
  }
  
  return { playRound, getActivePlayer, printRound };
}

const game = GameController('one' , 'two');

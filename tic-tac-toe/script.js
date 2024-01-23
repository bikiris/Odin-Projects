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
    if(board[row][col].getValue != 0){
      console.log("This cell is used");
    }else{
      board[row][col].setValue(player);
    }
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

  return{ getBoard, addToken, printBoard }
}
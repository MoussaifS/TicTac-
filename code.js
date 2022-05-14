let div = document.querySelectorAll(".box")

const Gameboard = () => {
  let gameboard = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  let EmptyGameboard = [[], [], []]
  let name = "duck"
  let health = [3, 4]
  return { gameboard, name, health };
};

let test = Gameboard();
let EmptyGameboard = [[0,0,0], [0,0,0], [0,0,0]]

div.forEach(box => box.addEventListener("click", function (e) {
  box.textContent = "X"
  box.style.cssText = "pointer-events: none; background-color: rgba(180, 133, 133, 0.514);"
  fillGameboard(parseInt(e.target.id))
  // console.log(EmptyGameboard)
}, false))

function fillTile(row, value, index){
  row[index] = value
  checkWin()
}

function fillGameboard(index) {
  switch (index) {
    case 0:
    case 1:
    case 2:
      fillTile(EmptyGameboard[0], 'x', index)
      break;
    case 3:
    case 4:
    case 5:
      index -= 3
      fillTile(EmptyGameboard[1], 'x', index)
      break;
    case 6:
    case 7:
    case 8:
      index -= 6
      fillTile(EmptyGameboard[2], 'x', index)
      break;
  }
}

// Three win conditions:
// Row, Column, and Cross
function checkRowCondition(){
  gameboard = EmptyGameboard

  for (let i  = 0; i < gameboard.length; i++){
    let row = gameboard[i]
    let points = 0

    for (let j = 0; j < row.length; j++){
      value = row[j]

      if(value == 'x'){
        points++
      }
    }

    if(points == 3){
      return true
    }
  }

  return false
}
function arrayColumn(arr, n){
  return arr.map(x => x[n])
}

function checkColumn(){
  // Get the board
  for(i = 0; i < 3; i++){
    column = arrayColumn(EmptyGameboard, i)
    console.log(column)
  }
}



function checkWin() {
 if(checkRowCondition() || checkColumn()){
   console.log("You won")
  //  document.location.reload(true)
 }
 
}
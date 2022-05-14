  const e = (name , age) => {
  const sayHello = () => console.log("Hello");
  // should be { } because it is an object
  return {name , age , sayHello};
  // also return {name: name ,age: age ,sayHello: sayHello}
};

let div = document.querySelectorAll(".box")

const Gameboard = () => {
    let gameboard  = [[0,1,2] , [3,4,5] , [6,7,8]] ;
    let EmptyGameboard = [[],[],[]]
    let name = "duck"
    let health = [3,4]
    return {gameboard , name , health};
};
let test = Gameboard();


// for(let i = 0; i < test.gameboard.length; i++) {
  
  
    
//   test.gameboard[i].forEach(function(item){ 
//     console.log(item)

//    });

// }

console.log(test.gameboard[0][0])

let EmptyGameboard = [[,],[,],[,]]

div.forEach(box => box.addEventListener("click", function(e)
  {box.textContent = "X"
    console.log(typeof e.target.id )
    box.style.cssText = "pointer-events: none; background-color: rgba(180, 133, 133, 0.514);" 
    fillGameboard(parseInt(e.target.id)) 
    console.log(EmptyGameboard)
},false
))

function fillGameboard(index) {
    switch(index){
      case 0: 
      case 1: 
      case 2: 
      EmptyGameboard[0].splice(index, 0 , 'x')

      break;
      case 3: 
      case 4: 
      case 5: 
      EmptyGameboard[1].splice(index, 0 , 'x')
      break; 
      case 6: 
      case 7: 
      case 8: 
      EmptyGameboard[2].splice(index, 0 , 'x')
      break;
    }
}

console.log("++++++++++++++++++++++++++++++++++++++")

const win = [
  //row
  [0,1,2],
  [3,4,5],
  [6,7,8],
  // column
  [0,3,6],
  [1,4,7],
  [2,5,8],

  // cross
  [0,4,8],
  [2,4,6]
]

function youWon (gameboard){
  for(let i = 0; i < gameboard.length; i++) {
  
    for(let j = 0; j < gameboard[i].length; j++) {
      
       console.log(chunked[i][j])
    }
 }
}


// fillGameboard(4)
// fillGameboard(3)
// fillGameboard(8)
// fillGameboard(1)
// fillGameboard(2)

// fillGameboard(7)
console.log(EmptyGameboard)
console.log("++++++++++++++++++++++++++++++++++++++")
// Player = () => { 
//      let move.addEventListener 
// }

console.log(div)




const Player = () => {
  
}


console.log("this is a test gameboard")


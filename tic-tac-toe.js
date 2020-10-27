
function checkGameStatus(){
//Check Rows
for(let i = 0; i < 9; i+=3){
    if(squareValues[i]!== ''
    && squareValues[i] === squareValues[i + 1]
    && squareValues[i] === squareValues[i + 2]){
        gameStatus = squareValues[i];
        
        break;
    }
} 
    // check columns
    for(let i = 0; i < 3; i+=1){
    if(squareValues[i]!== ''
    && squareValues[i] === squareValues[i + 3]
    && squareValues[i] === squareValues[i + 6]){
        gameStatus = squareValues[i];
    
    }
    //check diagonals
    if(squareValues[0] !==''
    && squareValues[0] === squareValues[4]
    && squareValues[0] === squareValues[8]){
    gameStatus = squareValues[0]
    }
     if(squareValues[2] !==''
    && squareValues[2] === squareValues[4]
    && squareValues[2] === squareValues[6]){
    gameStatus = squareValues[2]
    }
  if(gameStatus !==''){
      document
      .getElementById('game-status')
      .innerHTML = `Winner:${gameStatus.toUpperCase()}`
      document.getElementById('new-game').disabled = false;
  }

  //Check for a tie
  let boardIsFilled = true;
  for(let i = 0;i < 9; i++){
    if(squareValues[i] === ''){
        boardIsFilled = false;
    }
  }
  if(boardIsFilled) gameStatus = 'Nobody'

    
}
}





let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = ''

window.addEventListener("DOMContentLoaded", (event) => {
  document
    .getElementById("tic-tac-toe-board")
    .addEventListener("click", (event) => {
      const targetId = event.target.id;

      if (!targetId.startsWith("square-")) return;

      const squareIndex = Number.parseInt(targetId[targetId.length - 1]);

      if (squareValues[squareIndex] !== "") return;

      const img = document.createElement("img");
      img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;
      event.target.appendChild(img);

      squareValues[squareIndex] = currentPlayerSymbol;

      if (currentPlayerSymbol === "x") {
        currentPlayerSymbol = "o";
      } else {
        currentPlayerSymbol = "x";
      }
      checkGameStatus()
    });
    document.getElementById("new-game")
.addEventListener("click", (e) => {
    gameStatus = "";
    document
    .getElementById('game-status')
    .innerHTML = ''
    for(let i = 0; i < 9; i+=1){
        document.getElementById(`square-${i}`)
        .innerHTML = ''
    }
    currentPlayerSymbol = "x";
    document.getElementById('new-game').disabled = true;
    squareValues = ["", "", "", "", "", "", "", "", ""];
    

})
});

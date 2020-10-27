let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];

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
    });
});

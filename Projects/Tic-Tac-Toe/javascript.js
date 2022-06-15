/*
  Author: 		    Deepkumar Patel
  File name: 	    index.html
  Date Created:	  25th june 2021
  Date Updated:   30th june 2021
  Purpose: 		    make Tic-Tac-Toe game using unobtrusive javascript
  Description:
                  Javascript.js is used to interact with the visitors
*/

//make player1 and assign a string "o" so everytime player1 clicks, it prints O in the box
const player1 = "O";

//make player2 and assign a string "X" so everytime player1 clicks, it prints X in the box
const player2 = "X";

//make variable currentPlayer to get to know whose turn it is in the future(Game will always start with player1)
let currentPlayer = player1;
//get the whole container of box using document.getElementById(Inside this element there are total 9 divs which i will use to create a border)
const board = document.getElementById("boxes");
//getElementByClassName will give HTML collection but i want array so Array.from will convert HTMLCollection to array
const boxes = Array.from(document.getElementsByClassName("box"));

//button for the player to reset the game
const button = document.getElementById("button");

//get element by id playtest so that we can change the html/css
const result = document.getElementById("result");

//array of total 9 elements to check the win
const arryToCheckWin = [null, null, null, null, null, null, null, null, null];


//Function to make the border of the boxes
const drawBorders = () => {
  boxes.forEach((box, index) => {

    //variable border to store the css
    let border = "";
    if (index > 5) {
      border += "border-top: 3px solid #ffd166;";
    }
    if (index % 3 === 2) {
      border += "border-left: 3px solid #ffd166;";
    }
    if (index < 3) {
      border += "border-bottom: 3px solid #ffd166;";
    }
    if (index % 3 === 0) {
      border += "border-right: 3px solid #ffd166;";
    }

    /*We can use this one too, if we don't want to style too much
    if(index<=8){
      border += "border:3px solid #ffd166;";
    }*/
    box.style = border;
    box.addEventListener("click", boxClicked);
  });
};
document.addEventListener('DOMContentLoaded', drawBorders, false);
function boxClicked(h) {
  const id = h.target.id;

  //if the arryToCheckWin is not NULL then this will be true
  if (!arryToCheckWin[id]) {
    arryToCheckWin[id] = currentPlayer;
    h.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      if (currentPlayer == "O") {
        result.style = "color:#00FFC8; visibility: visible;";
      }
      else {
        result.style = "color:#ef476f; visibility: visible;";
      }
      result.innerHTML = `${currentPlayer} wins!!`;
      boxes.forEach((box, index) => {
        if (arryToCheckWin[index] == "X" || arryToCheckWin[index] == "O") {

        }
        else {
          box.addEventListener('click', function () { box.innerHTML = "" });
        }

      })
      return;
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

//Function to check if the player has won or not using if else statement and arrayToCheck array
const hasPlayerWon = (currentPlayer) => {

  if (arryToCheckWin[0] === currentPlayer) {
    if (arryToCheckWin[4] === currentPlayer && arryToCheckWin[8] === currentPlayer) {
      return true;
    }
    if (arryToCheckWin[2] === currentPlayer && arryToCheckWin[1] === currentPlayer) {
      return true;
    }
    if (arryToCheckWin[3] === currentPlayer && arryToCheckWin[6] === currentPlayer) {
      return true;
    }

  }

  if (arryToCheckWin[4] === currentPlayer) {
    if (arryToCheckWin[2] === currentPlayer && arryToCheckWin[6] === currentPlayer) {
      return true;
    }
    if (arryToCheckWin[3] === currentPlayer && arryToCheckWin[5] === currentPlayer) {
      return true;
    }
    if (arryToCheckWin[1] === currentPlayer && arryToCheckWin[7] === currentPlayer) {
      return true;
    }
  }


  if (arryToCheckWin[8] === currentPlayer) {
    if (arryToCheckWin[7] === currentPlayer && arryToCheckWin[6] === currentPlayer) {
      return true;
    }
    if (arryToCheckWin[2] === currentPlayer && arryToCheckWin[5] === currentPlayer) {
      return true;
    }
  }


};

//add functionality for reset button
/*button.addEventListener("click", () => {
  
  //if user clicks button then all the elements inside arrayToCheckWin will be null(As it was before the game started)
  arryToCheckWin.forEach((checkWin, index) => {
    arryToCheckWin[index] = null;
  });

  //This will clear all the x's and o's inside a box
  boxes.forEach((box) => {
    box.innerText = "";

  });
  
  // This will clear who won and make the visibility of the h2 tag hidden
  result.innerHTML = "TEMP_TEXT";
  result.style = "visibility:hidden;";
  currentPlayer = player1;
});*/
button.addEventListener("click", () => {
  location.reload();
});
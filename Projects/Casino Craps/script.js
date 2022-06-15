/*
  Author: 		  Deepkumar Patel
  File name: 	  script.js
  Date Created:	  27th june 2021
  Date Updated:   30th june 2021
  Purpose: 		  make Casino Craps game using unobtrusive javascript
  References:
        No References
  Description:
        script.js is used to interact with the visitors
*/

//whenever user clicks the button 'roll the dice', rollDice function will be called using addEventListener
click.addEventListener('click',rollDice,true);

//whenever user clicks the button 'reset', reset function will be called using addEventListener
button.addEventListener('click',reset,true);

// get element by ID totalScore and store it in totalScore variable
let totalScore = document.getElementById('totalScore');

// get element by ID result and store it in totalScore variable
let result = document.getElementById('result');

//get element by ID dice1 and store it in box1 variable
box1 = document.getElementById('dice1');

//get element by ID dice2 and store it in box2 variable
box2 = document.getElementById('dice2');

//get element by ID total and store it in boxTotal
boxTotal = document.getElementById('total');

// boolean variable point and assign true in it
let point=true;
let playerPoint;
var resultstring;

//variables to keep track of wins and losses
let win=0, loss=0;

//change the color of result according to player score
let resultColor = 0;

//variables to store random number between 1 to 6
let number1, number2;

//addition of number1 and number2 will be stored here
let total;
function rollDice(){

    //generating 2 random numbers between 1 to 6
    number1 = Math.floor(Math.random() * 6) + 1;
    number2 = Math.floor(Math.random() * 6) + 1;

    //add number 1 into number 2 and store it in total
    total = number1 + number2;

    //change the innerHTML of number 1, number2 and total
    box1.innerHTML = number1;
    box2.innerHTML = number2;
    boxTotal.innerHTML = total;

    //logic of the game
    if (point) {
        if (total == 2 || total == 3 || total == 12) {
            loss++;
            resultstring = "That's craps. You loss! <br> To start game roll the disc";
            resultColor = -1;

        } else if (total == 7 || total == 11) {
            win++;
            resultColor = 1;
            resultstring = "That's natural. You win! <br> To start game roll the disc";

        } else {
            playerPoint = total;
            resultstring = "your point: " + playerPoint;
            point = false;
        }
    } else {
        if (total == 7) {
            loss++;
            point = true;
            resultstring = "That's craps. You loss! <br> To start game roll the disc";
            resultColor = -1;
            playerPoint = undefined;
        } else if (total == playerPoint) {
            win++;
            point = true;
            resultstring = "That's natural. You win! <br> To start game roll the disc";
            resultColor = 1;
            playerPoint = undefined;
        }
    }
    result.innerHTML = resultstring;
    result.style = "visibility:visible";

    //change the color to blue if player wins, red if player looses and yellow if its point
    if(resultColor == 1){
        result.style.color = "#00bbf9";
        resultColor = 0;
    }
    else if(resultColor == -1){
        result.style.color = "#ef476f";
        resultColor = 0;
    }
    else{
        result.style.color = "#ffd166";
    }

    totalScore.style = 'visibility:visible';

    /*if the score is in the player's favor then the color will be blue, 
     red if the score is not in his favor and yellow if it is tie */
    if(win>loss){
        totalScore.style.color = "#00bbf9";
    }else if(win<loss){
        totalScore.style.color = "#ef476f";
    }else if(win == loss){
        totalScore.style.color = "#ffd166";
    }
    else{
        totalScore.style.color = "#c4fff9"
    }
    totalScore.innerHTML = 'Win: ' + win + 'loss: ' + loss;
    
}

//make everything default(The way it was when script ran)
function reset(){
    resultstring = "";
    number1 =0;
    number2 = 0;
    total = 0;
    win = 0;
    loss = 0;
    result.style = "visibility:hidden";
    totalScore.innerHTML = 'Win: ' + win + 'loss: ' + loss;
    playerPoint = undefined;
    point = true;
    box1.innerHTML = "";
    box2.innerHTML = "";
    boxTotal.innerHTML = "";
    resultColor = 0;
}
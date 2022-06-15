/*
  Author: 		  Deepkumar Patel
  File name: 	  javascript.js
  Date Created:	  12th june 2021
  Date Updated:   19th june 2021
  Purpose: 		  make Rock, Paper, Scissor, Lizard, Spock game using unobtrusive javascript
  Copyright: 
        This work is the property of Deepkumar Patel(Me).
  References:
        No References
  Description:
        Javascript.js is used to interact with the visitors
*/

//Declaring variables

//userID to store the input
let userID;

//computerID to store the computer generated input
let computerID;

//totalScore to store the total score of the match
let totalScore;

//result to show the result of the match
let result = '';

//It is used to store the button
let button;

//variable for ID result
let varForIDResult;
/*Making an object to structure the data*/
const SHAPES = {
    Rock: {Lizard: 'crushes', Scissor: 'breaks'},
    Paper: {Spock: 'disproves', Rock: 'covers'},
    Scissor: {Paper: 'cuts', Lizard: 'decapitates'},
    Lizard: {Paper: 'eats', Spock: 'poisons'},
    Spock: {Rock: 'vaporizes', Scissor: 'breaks'},
};

//This is just a temporary variable used in control statement to style the output
let css = 0;
//score to calculte how many times computer/ user won before hitting reset button
let score = [0,0];

//initFunction will be called after DOMContent is loaded
document.addEventListener( 'DOMContentLoaded', initFunction, false );


function initFunction(){
    console.log("Hello professor, Hope you are having a great day");
    let userSelection = document.getElementsByClassName('images');

    /*This for loop will identify what user selected from the given 
      options(Stone, Paper, Scissor, Lizard or Spock)*/
    for(let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener('click', function() {

            //This will store the id of the selected element by user
            userID = userSelection[i].id;

            /*Math.random will generate number from 0.0 to 1.0 excluding 1.0
            Multiply the genereated number with 5
            Math.random will return the largest integer less than or equal to a given number.
             So if we get 2.58 then it will become 2*/
            computerID = Math.floor(Math.random() * 5);

            //According to the number, Switch case will assign the values to computerID
            switch (computerID) { 
              case 0: computerID = "Rock"; 
                break; 
              case 1: computerID = "Paper"; 
                break; 
              case 2: computerID = "Scissor"; 
                break; 
              case 3: computerID = "Lizard";
                break;
              case 4: computerID = "Spock"; 
                break; 
            }

            //checkwinner function is called to see the who won
            checkWinner();

            /*If User clicks the reset button then score and visibility of the div
               which has the id scoreAndReset will be hidden*/
            
            button = document.getElementById('button');
            button.addEventListener('click', function(){
                score = [0,0];
                document.getElementById('scoreAndReset').style.visibility = 'hidden';
            }, false);
        });
    }
}
function checkWinner(){
    
    //From the whole block, updateScore method is called once regardless of the output
    /*If the data structure of the dictionary matches, then user wins otherwise it will
      go in else block*/
    if (userID in SHAPES[computerID]) {
        result = 'Player Wins: ' + userID + ' ' + SHAPES[userID][computerID] +
              ' ' + computerID + '.';
        score[0] += 1;
        css = 1;
        updateScore();
    }
    
    //if the value of the userID and computerID is same then it's a tie
    else if (userID == computerID) {
        result = 'Tie game.';
        css = 0;
        updateScore(); 
    } else {
        result = 'AI Wins: '+computerID + ' ' + SHAPES[computerID][userID] +
            ' ' + userID + '.';
        score[1] += 1;
        css = -1;
        updateScore();
    }
    varForIDResult = document.getElementById('result');
    if(css == 1){
        varForIDResult.style.color = "#00bbf9";
    }
    else if(css == -1){
        varForIDResult.style.color = "#ef476f";
    }
    else{
        varForIDResult.style.color = "#ffd166";
    }

    //change the inner text of the h3 tag using getElementById
    varForIDResult.innerText = result;
}
/*function checkWinner(){

    if(userID == 'Rock') {

        if(computerID == 'Scissor' || computerID == 'Lizard'){
            result = 'Player Wins: '+userID + ' ' + SHAPES[userID][computerID] +
                        ' ' + computerID + '.';      
            score[0] += 1;
            updateScore();
        }
        else{
            result = 'AI Wins: ';
            result += (computerID + ' ' + SHAPES[computerID][userID] +
                ' ' + userID + '.');
            score[1] += 1;
            updateScore();
            
        }
    }
    else if(userID == 'Paper') {

        if(computerID == 'Rock' || computerID == 'Spock'){
            result = 'Player Wins: '+userID + ' ' + SHAPES[userID][computerID] +
                        ' ' + computerID + '.';      
            score[0] += 1;
            updateScore();
        }
        else{
            result = 'AI Wins: ';
            result += (computerID + ' ' + SHAPES[computerID][userID] +
                ' ' + userID + '.');
            score[1] += 1;
            updateScore();
            
        }
    }
    else if(userID == 'Scissor') {

        if(computerID == 'Paper' || computerID == 'Lizard'){
            result = 'Player Wins: '+userID + ' ' + SHAPES[userID][computerID] +
                        ' ' + computerID + '.';      
            score[0] += 1;
            updateScore();
        }
        else{
            result = 'AI Wins: ';
            result += (computerID + ' ' + SHAPES[computerID][userID] +
                ' ' + userID + '.');
            score[1] += 1;
            updateScore();
            
        }
    }
    else if(userID == 'Lizard') {

        if(computerID == 'Spock' || computerID == 'Paper'){
            result = 'Player Wins: '+userID + ' ' + SHAPES[userID][computerID] +
                        ' ' + computerID + '.';      
            score[0] += 1;
            updateScore();
        }
        else{
            result = 'AI Wins: ';
            result += (computerID + ' ' + SHAPES[computerID][userID] +
                ' ' + userID + '.');
            score[1] += 1;
            updateScore();
            
        }
    }
    else if(userID == 'Spock') {

        if(computerID == 'Rock' || computerID == 'Scissor'){
            result = 'Player Wins: '+userID + ' ' + SHAPES[userID][computerID] +
                        ' ' + computerID + '.';      
            score[0] += 1;
            updateScore();
        }
        else{
            result = 'AI Wins: ';
            result += (computerID + ' ' + SHAPES[computerID][userID] +
                ' ' + userID + '.');
            score[1] += 1;
            updateScore();
            
        }
    }
    

    document.getElementById('result').innerText = result;
}*/

function updateScore(){
    totalScore = document.getElementById('totalScore');

    /*If the player is winning, then the text will be blue
      If the player is losing, then the text will be red
      If the score of the player and AI is equal then the text will bw yellow
    */
    if(score[0]==score[1]){
        totalScore.style.color = '#ffd166';
    }else if(score[0]>=score[1]){
        totalScore.style.color = '#00bbf9';
    }else{
        totalScore.style.color = '#ef476f';
    }
    //makes innerHTML of the totalScore blank
    totalScore.innerHTML = ' ';

    //prints the score 
    totalScore.innerHTML += 'Player wins : '+score[0] +' '+ ' computer wins : '+score[1];

    //makes element whose id is scoreAndReset visible
    document.getElementById('scoreAndReset').style.visibility = 'visible';
}


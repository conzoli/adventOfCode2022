import {testInputs} from "./dataDayTwo.js";
import {Inputs} from "./dataDayTwo.js";


const CalcGameScore = (inputA, inputB) => {

   let gameScore = 0;

   // shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
   //  outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won)
   // my input is inButB

   //X for Rock, Y for Paper, and Z for Scissors.

   // Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock

   if (inputA === "A"){
    // ROCK

        if(inputB === "Z"){
            //won 
            gameScore = 3 + 0;
        }

        if(inputB === "Y") {
            gameScore = 2 + 6;
        }

        if(inputB === "X") {
            gameScore = 1 + 3;
        }
   }

   if (inputA === "B"){
    // Paper

        if(inputB === "Z"){ 
            gameScore = 3 + 6;
        }

        if(inputB === "Y") {
            gameScore = 2 + 3;
        }

        if(inputB === "X") {
            gameScore = 1 + 0;
        }
   }

   if (inputA === "C"){
    // Sissors

        if(inputB === "Z"){ 
            gameScore = 3 + 3;
        }

        if(inputB === "Y") {
            gameScore = 2 + 0;
        }

        if(inputB === "X") {
            gameScore = 1 + 6;
        }
   }

   return gameScore;

}




console.log(CalcGameScore("A", "Y"));
console.log(CalcGameScore("B", "X"));
console.log(CalcGameScore("C", "Z"));

const inputArray = Inputs;

let finalScore = 0;
let roundTwoScore = 0;

for (let i = 0; i < inputArray.length; i++) {

    finalScore += CalcGameScore(inputArray[i][0],inputArray[i][1] );


    // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win.

    if(inputArray[i][1] === "X" ){
        //lose
        if(inputArray[i][0] === "A" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Z")
        }
        if(inputArray[i][0] === "B" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "X")
        }
        if(inputArray[i][0] === "C" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Y")
        }
        
    }
    if(inputArray[i][1] === "Y" ){
        //draw
        
        if(inputArray[i][0] === "A" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "X")
        }
        if(inputArray[i][0] === "B" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Y")
        }
        if(inputArray[i][0] === "C" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Z")
        }
        
    }

    if(inputArray[i][1] === "Z" ){
        //Win
        if(inputArray[i][0] === "A" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Y")
        }
        if(inputArray[i][0] === "B" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "Z")
        }
        if(inputArray[i][0] === "C" ){
            roundTwoScore += CalcGameScore(inputArray[i][0], "X")
        }
        
    }
    

}

console.log( `Final Score: ${finalScore}`);
console.log( `Round 2 Score: ${roundTwoScore}`);


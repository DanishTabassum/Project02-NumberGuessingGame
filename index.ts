#! /usr/bin/env node
import inquirer from "inquirer";
let correctAnswer = 0;
let wrongAnswer = 0;

while (true){
    console.clear();
    console.log ("Welcome to number guessing game");
    console.log ("You are required to guess the number, which I have picked.");
    console.log ("If you guessed it correct you get ONE POINT.");
    console.log ("If you guessed it wrong, there will be a deduction of ONE POINT from your TOTAL SCORE");
    console.log ("If you have given 3 wrong answer, the game will end");
    
    const myNumber = await inquirer.prompt([{
    message:"Guess the number which i have selected beteween (1 to 5)", type:"number", name:"guessedNumber"
},]);
let maxNum = Math.floor(5);
let minNum = Math.ceil(1);
let guessMyNumber = Math.floor(Math.random()* (maxNum - minNum) + 1)
if (myNumber.guessedNumber === guessMyNumber){
    console.log("You have guessed it right!");
    console.log("My number was:",guessMyNumber);
        correctAnswer++;
    console.log("Your score is:",correctAnswer);
    console.log("Your wrong answer till now:",wrongAnswer);
}
else {
    wrongAnswer++;
}
if (wrongAnswer === 3){
    console.log("My number was:",guessMyNumber);
    console.log("Your total correct answers were:",correctAnswer);
    console.log("Your total wrong answers were:",wrongAnswer);
    console.log("FINAL SCORE:", correctAnswer-wrongAnswer);
    console.log("You are out of lives");
    console.log("GAME OVER!");
    break;
}
console.log("My number was:",guessMyNumber);
console.log("Your total correct answers were:",correctAnswer);
console.log("Your total wrong answers were:",wrongAnswer);

const contGame = await inquirer.prompt([{
    message:"Do you want to continue", type:"confirm", name:"continue"
},])
    console.clear();
    
    if (!contGame.continue){
    console.log("My number was",guessMyNumber);
    console.log("Your total correct answers were:",correctAnswer);
    console.log("Your total wrong answers were:",wrongAnswer);
    console.log("Your final score is: ",correctAnswer-wrongAnswer);
    console.log("Thankyou for playing the game");
    break;
}
}
const goLower = "Go lower!";
const goHigher = "Go higher!";
const correct = "correct";

function getNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function isHigherOrLower(userNumber, computerNumber) {
    if (userNumber > computerNumber) {
        return goLower;
    } else if (userNumber < computerNumber) {
        return goHigher;
    } 
    return correct;
}

function askAndReturnInput() {
    var readline = require('readline-sync');

    var userNumber = readline.question("Guess the number that I have in mind: ");
    if (isNaN(userNumber)) {
        console.log("Please enter a valid number");
        return askAndReturnInput();
    }
    return userNumber;
}

console.log("Let's play a game!  I will call this game 'HighLow'!");
console.log("I will think of a number between 1 and 100.  You will try to guess it!");
var computerNumber = getNumber();
console.log("I have thought of a number.  Guess it!");
var found = false;
var numTries = 0;
while (!found) {
    var userNumber = askAndReturnInput();
    var result = isHigherOrLower(userNumber, computerNumber);
    if (result == correct) {
        found = true;
    } else {
        console.log("Try again!  " + result);
    }
    numTries++;
}

console.log("You got it in " + numTries + " tries!");

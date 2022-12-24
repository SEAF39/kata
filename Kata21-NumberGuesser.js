let prompt = require("prompt-sync")();

// Generate a random number for the user to guess
let target = Math.floor(Math.random() * 100);

let attempts = 0;
let alreadyGuessed = [];

while (true) {
  let answer = prompt("Guess a number: ");

  // Validate that the answer is a number
  if (!Number.isInteger(+answer)) {
    console.log("Not a number! Try again!");
    continue;
  }

  // Check if the number has already been guessed
  if (alreadyGuessed.includes(+answer)) {
    console.log("Already guessed! Try again!");
    continue;
  }

  // Add the number to the list of already guessed numbers
  alreadyGuessed.push(+answer);
  attempts++;

  // Check if the guess is correct
  if (+answer === target) {
    console.log(`You got it! You took ${attempts} attempts!`);
    break;
  } else if (+answer > target) {
    console.log("Too high! Try again!");
  } else {
    console.log("Too low! Try again!");
  }
}

const squareCode = function(message) {
  // Remove spaces from the message
  message = message.replace(/ /g, '');

  // Determine the number of rows and columns needed to create a square grid that can fit the message
  const sqrt = Math.ceil(Math.sqrt(message.length));

  // Initialize the grid
  const grid = [];
  for (let i = 0; i < sqrt; i++) {
    grid.push([]);
  }

  // Add each character to the grid
  let charIndex = 0;
  for (let row = 0; row < sqrt; row++) {
    for (let col = 0; col < sqrt; col++) {
      if (charIndex < message.length) {
        grid[row][col] = message[charIndex];
        charIndex++;
      } else {
        // If there are no more characters to add, add a space
        grid[row][col] = ' ';
      }
    }
  }

  // Initialize the encoded message
  let encodedMessage = '';

  // Iterate through the grid and build the encoded message by reading each column from top to bottom
  for (let col = 0; col < sqrt; col++) {
    for (let row = 0; row < sqrt; row++) {
      encodedMessage += grid[row][col];
    }
    encodedMessage += ' ';
  }

  return encodedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

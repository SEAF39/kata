const blocksAway = function(directions) {
  // Initialize the final position with 0 blocks east and north
  const finalPosition = {east: 0, north: 0};

  // Initialize the current direction to north
  let currentDirection = "north";

  // An array of directions to use when turning left or right
  const directionsArray = ["north", "east", "south", "west"];

  // Iterate through the directions
  for (let i = 0; i < directions.length; i++) {
    const element = directions[i];
    // If the element is a string, update the current direction
    if (typeof element === "string") {
      if (element === "left") {
        // Turn left by moving to the previous direction in the directionsArray
        const currentIndex = directionsArray.indexOf(currentDirection);
        currentDirection = directionsArray[(currentIndex + directionsArray.length - 1) % directionsArray.length];
      } else if (element === "right") {
        // Turn right by moving to the next direction in the directionsArray
        const currentIndex = directionsArray.indexOf(currentDirection);
        currentDirection = directionsArray[(currentIndex + 1) % directionsArray.length];
      }
    } else {
      // If the element is a number, update the final position
      if (currentDirection === "north") {
        finalPosition.north += element;
      } else if (currentDirection === "east") {
        finalPosition.east += element;
      } else if (currentDirection === "south") {
        finalPosition.north -= element;
      } else if (currentDirection === "west") {
        finalPosition.east -= element;
      }
    }
  }

  return finalPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// Output: {east: 1, north: 3}

console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
// Output: {east: 3, north: 3}

console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

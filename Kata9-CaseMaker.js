const camelCase = function(input) 
 // Your code here
{
  // Split the input string into an array of words
  const words = input.split(' ');

  // Iterate over the array of words
  for (let i = 1; i < words.length; i++) {
    // Capitalize the first letter of each word, except for the first one
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the array of words back into a string
  return words.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));



const numberOfVowels = function(data) {
  // Put your solution here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let word = data.split("");
  
  let output = [];
  
    for (let letter of word) {
      for(vowel of vowels) {
        if (vowel === letter){
          output.push(letter);
        }
      }
     
  }
  return output.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

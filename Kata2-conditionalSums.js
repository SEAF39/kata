const conditionalSum = function(values, condition) {
  // Your code here
  let output = 0;
  for (value of values){
    if ((condition === "even" && value%2 === 0) || (condition === "odd" && value%2 !== 0)){
      output += value;
    }
  }
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
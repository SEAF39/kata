
const sumLargestNumbers = function(data) {
  // Put your solution here
  let number1 = data[0];
  let number2 = data[0];
  for(let number of data){
    if (number>=number1){
      number2 = number1;
      number1 = number;
    }else if(number>=number2){
      number2 = number;
    }
  }
  return number1+number2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
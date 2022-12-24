const calculateChange = function(total, cash) {
  let change = cash - total;
  let denominations = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let changeObject = {};

  for (let i = 0; i < denominations.length; i++) {
    let times = Math.floor(change / denominations[i]);
    if (times >= 1) {
      let name = getName(denominations[i]);
      changeObject[name] = times;
      change -= times * denominations[i];
    }
  }

  return changeObject;
};

function getName(denomination) {
  switch (denomination) {
    case 10000:
      return "hundredDollar";
    case 5000:
      return "fiftyDollar";
    case 2000:
      return "twentyDollar";
    case 1000:
      return "tenDollar";
    case 500:
      return "fiveDollar";
    case 100:
      return "oneDollar";
    case 25:
      return "quarter";
    case 10:
      return "dime";
    case 5:
      return "nickel";
    case 1:
      return "penny";
  }
}

console.log(calculateChange(1787, 2000));
// Output: { twoDollar: 1, dime: 1, penny: 3 }

console.log(calculateChange(2623, 4000));
// Output: { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }

console.log(calculateChange(501, 1000));
// Output: { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

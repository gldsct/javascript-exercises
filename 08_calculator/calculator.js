const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
	return array.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentItem) => {
    return accumulator * currentItem;
  }, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  let factorialResult = 1;
  for (let i = num; i > 1; i--) {
    factorialResult = factorialResult * i;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

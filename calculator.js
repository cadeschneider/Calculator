const add = function(input1, input2) {
	return input1 + input2
};

const subtract = function(input1, input2) {
	return input1 - input2
};

const sum = function(array1) {
	return array1.reduce((total, value) => total + value, 0);
};

const multiply = function(array1) {
  prodArray = array1.reduce((total, value) => total * value, 1);
  return prodArray;
};

const power = function(input1, input2) {
	return input1 ** input2
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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

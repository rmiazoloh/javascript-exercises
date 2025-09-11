const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item,0);
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item,1);
};

const power = function(a,b) {
	const result = Math.pow(a, b)
  return result
};

const factorial = function(a) {
  let result = [];
  for (let i = 1; i <= a; i++){
      result.push(i);
  }
  return multiply(result);	
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

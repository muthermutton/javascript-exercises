const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  array.forEach((item) =>{
    total += item;
  });
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach((item) => {
    total *= item;
  })
  return total;
};

const power = function(a, b) {
	let result = 1;
  for(let i = 0; i < b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let result = 1;
  for(let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
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

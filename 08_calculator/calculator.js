const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i< n; i++)
  {
    sum += arr[i];
  }
  return sum;
	
};

const multiply = function(arr) {
	let prod = 1;
  let n = arr.length;
  for (let i = 0; i<n; i++)
  {
    prod *= arr[i];
  }
  return prod;
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(num) {
	let prod = 1;
  for (let i = 1; i<=num; i++)
  {
    prod *= i;
  }
  return prod;
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

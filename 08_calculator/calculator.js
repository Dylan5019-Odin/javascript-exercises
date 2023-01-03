const add = function(x,y) {
	return (x + y);
};

const subtract = function(x,y) {
	return (x - y);
};

const sum = function(array) {
	let sum = 0;

  if (array.length > 0) {
    sum = array.reduce((partialSum, a) => partialSum + a, 0);
  }

  return sum;
};

const multiply = function(array) {
   
  let sum = array.reduce((a, b) => a * b, 1);

  return sum;


};

const power = function(x,y) {
	return (x ** y);
};

const factorial = function(x) {


  if (x === 0) {
    return 1;
  }


  for (let i = (x - 1); i >= 1; i--) {
     x = x * i;
  }

return x;

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

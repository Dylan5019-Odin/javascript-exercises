const fibonacci = function(x) {

    if (x<0) return 'OOPS';

    if (typeof x=='string') x = parseInt(x);

    const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);
    return fib(x);
};

// Do not edit below this line
module.exports = fibonacci;

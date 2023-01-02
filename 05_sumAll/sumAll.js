const sumAll = function(x, y) {

    if (x < 0 || y < 0  || typeof x != 'number' || typeof y != 'number') {
        return 'ERROR';
    }


    let sum = 0;
    let max = x > y ? x : y;
    let min = x < y ? x : y;
    let range = max - min + 1;

    for (let i = 0; i < range; i++) {
        sum+= (max - i);
       }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const palindromes = function (str) {
    let isPalindrom = false;

    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
    let reverse =  str.split('').reverse().join('');
  

    return reverse == str ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

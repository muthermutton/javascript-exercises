const reverseString = function(str) {
    let splitString = str.split('');
    let reversed = splitString.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;

const sumAll = function(min, max) {
    if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    if (min < 0 || max < 0) return "ERROR";

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    let finalSum = 0;

    for (let i = min; i <= max; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    // count = parseInt(count);
    if (count === 0) return 0;
    let a = 0;
    let b = 1;

    for (i = 1; i < count; i++){
        let temp = b;
        b = a + b;
        a = temp;
 }

 return b;
};

// Do not edit below this line
module.exports = fibonacci;

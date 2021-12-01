const getTheTitles = function(array) {
    const newArr = [];
    array.forEach(function(book) {
        newArr.push(book.title);
    })
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;

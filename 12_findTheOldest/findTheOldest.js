const findTheOldest = function(arr) {
    let age1 = 0;
    let age2 = 0;
    let oldest = {};

    arr.forEach((person, index) => {
        if (!arr[index].yearOfDeath){
            let year = new Date().getFullYear();
            age1 = year - arr[index].yearOfBirth;
        }else {
            age1 = arr[index].yearOfDeath - arr[index].yearOfBirth;
        };
        if (age1 > age2) {
            age2 = age1;
            oldest = person;
        };
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

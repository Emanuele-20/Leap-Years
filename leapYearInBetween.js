const leapYear = require('./leapYear')

let newArray = []

function leapYearInBetween(yearStart, yearEnd){
    for(let i = yearStart; i < yearEnd + 1; i++){
        if(leapYear(i)){
            newArray.push(i)
        };
    };
    return newArray
};

module.exports = leapYearInBetween;


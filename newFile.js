function leapYear(year){
    if (year % 400 === 0){
        return true
    } else if (year % 100 === 0 && year % 400 !== 0){
        return false
    } else if (year % 4 === 0 && year % 100 !== 0){
        return true
    } else if (year % 4 !== 0){
        return false
    };
};

function leapYearInBetween(yearStart, yearEnd){
    let newArray = []
    for(let i = yearStart; i < yearEnd + 1; i++){
        if(leapYear(i)){
            newArray.push(i)
        };
    };
    console.log(newArray);
};

//Write a program that when given a year, will return the closest leap year (this could be before or after the given year)

function closestLeap(selection){
    if (leapYear(selection)){
        return `${selection} is a leap year itself`
    } else if (leapYear(selection + 1)){
        return `${(selection + 1)} is the nearest leap year`
    } else if (leapYear(selection - 1)){
        return `${(selection -1)} is the nearest leap year`
    } else {
        return `Your closest leap year is either ${selection + 2} or ${selection -2}`
    };
};


module.exports = leapYear;
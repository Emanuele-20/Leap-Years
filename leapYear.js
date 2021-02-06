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
    let newArray2 = []

    if (yearStart === yearEnd) {
        return 'The range must be composed by two different years'
    } else if ((((yearEnd === (yearStart + 1))) && (!leapYear(yearStart)) && (!leapYear(yearEnd)))){
        return 'No leap years in this range'
    } else if (((!leapYear(yearStart)) && (!leapYear(yearEnd)))){
                for(let i = yearStart; i < (yearEnd + 1) ; i++){                 
                    if(leapYear(i)){
                        newArray2.push(i)
                    };
                } return (newArray2.length === 0 ? 'No leap years in this range' : newArray2)
    } else if (((yearEnd === (yearStart + 1)) && (leapYear(yearStart)) && (!leapYear(yearEnd)))) {
        return `${yearStart}`
    } else if (((yearEnd === (yearStart + 1)) && (!leapYear(yearStart)) && (leapYear(yearEnd)))) {
        return `${yearEnd}`
    } else {
            for(let i = yearStart; i < (yearEnd + 1)  ; i++){                 
                        if(leapYear(i)){
                            newArray.push(i)
                        };
                };
                return newArray;
    };
}


function closestLeapYear(year){
    return leapYear(year + 1) ? `${year + 1} is the closest leap year`
        : leapYear(year - 1) ? `${year - 1} is the closest leap year`
        : leapYear(year + 2) && (!leapYear(year - 2)) ? `${year + 2} is the closest leap year`
        : leapYear(year -2) && (!leapYear(year + 2))  ? `${year - 2} is the closest leap year`
        : leapYear(year + 3) && (!leapYear(year -3))  ? `${year + 3} is the closest leap year`
        : leapYear(year - 3) && (!leapYear(year + 3)) ? `${year - 3} is the closest leap year`
        : leapYear(year + 4) && leapYear(year - 4) ? `${year + 4} and ${year - 4} are either the closest leap years`
        : 'This year is a leap year itself'
}



module.exports.leapYear = leapYear;
module.exports.closestLeapYear = closestLeapYear;
module.exports.leapYearInBetween = leapYearInBetween



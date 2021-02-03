const leapYear = require('./leapYear');

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
 
module.exports = leapYearInBetween;

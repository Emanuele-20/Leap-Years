const leapYear = require('./leapYear');

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

module.exports = closestLeapYear;
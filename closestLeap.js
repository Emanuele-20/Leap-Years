const leapYear = require('./leapYear')

function closestLeap(selection){
    if (leapYear(selection)){
        return `${selection} is a leap year itself`
    } else if (leapYear(selection + 1)){
        return `${(selection + 1)} is the nearest leap year`
    } else if (leapYear(selection - 1)){
        return `${(selection -1)} is the nearest leap year`
    } else {
        return `Your closest leap year is either ${selection + 2} and ${selection -2}`
    };
};

module.exports = closestLeap;
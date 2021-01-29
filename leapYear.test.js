const leapYear = require('./leapYear');
const leapYearInBetween = require('./leapYearInBetween');
const closestLeap = require('./closestLeap');


describe("Leap Year", () => {
    it('Return true if year is divisible by 400', () => {
        expect(leapYear(2000)).toBe(true)
    });
    it('Return true if year is divisible by 400', () => {
        expect(leapYear(1600)).toBe(true)
    });
    it('Return false if year is divisible by 100 but not by 400', () => {
        expect(leapYear(1700)).toBe(false)
    });
    it('Return true if year is divisible by 4 and not by 100', () => {
        expect(leapYear(2004)).toBe(true)
    });
    it('Return false if year is not divisible by 4', () =>{
        expect(leapYear(2009)).toBe(false)
    });
})


describe('Leap Year in Between', () => {
    it('Return all the leaps years in between a range of years', () => {
        expect(leapYearInBetween(1990,2010)).toContain(1992, 1996, 2000, 2004, 2008)
    })
})

describe('Closest Leap Year', () => {
    it('Return the same year if it is leap year itself', () => {
        expect(closestLeap(2000)).toBe('2000 is a leap year itself')
    });
    it('Return the closest leap year rounded up', () =>{ 
        expect(closestLeap(1999)).toBe('2000 is the nearest leap year')
    });
    it('Return the closest leap year rounded down', () => {
        expect(closestLeap(2001)).toBe('2000 is the nearest leap year')
    });
    it('Return the closest leap year rounded up or down if it is in the middle', () => {
        expect(closestLeap(2002)).toBe('Your closest leap year is either 2004 and 2000')
    });
})
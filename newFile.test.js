const leapYear = require('./newFile')

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

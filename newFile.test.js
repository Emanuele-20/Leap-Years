const leapYear = require('./newFile')

describe("Leap Year", () => {
    it('Return true if year is divisible by 400', () => {
        expect(leapYear(2000)).toBe(true)
    });
    it('Return true if year is divisible by 400', () => {
        expect(leapYear(1600)).toBe(true)
    });
})
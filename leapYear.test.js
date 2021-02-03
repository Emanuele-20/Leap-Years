const leapYear = require('./leapYear');
const leapYearInBetween = require('./leapYearInBetween');
const closestLeapYear = require('./closestLeapYear')


describe("Leap Year", () => {
    it('Return true if year is divisible by 400', () => {
        expect(leapYear(2000)).toBe(true)
    });
    it('Return false if year is divisible by 100 but not by 400', () => {
        expect(leapYear(1700)).toBe(false);
    });
    it('Return false if year is divisible by 100 but not by 400', () => {
        expect(leapYear(1800)).toBe(false);
    });
    it('Return false if year is divisible by 100 but not by 400', () => {
        expect(leapYear(1900)).toBe(false);
    });
    it('Return true if year is divisible by 4 and not by 100', () => {
        expect(leapYear(2004)).toBe(true)
    });
    it('Return true if year is divisible by 4 and not by 100', () => {
        expect(leapYear(2008)).toBe(true)
    });
    it('Return true if year is divisible by 4 and not by 100', () => {
        expect(leapYear(2012)).toBe(true)
    });
    it('Return false if year is not divisible by 4', () =>{
        expect(leapYear(2009)).toBe(false)
    });
    it('Return false if year is not divisible by 4', () =>{
        expect(leapYear(2010)).toBe(false)
    });
    it('Return false if year is not divisible by 4', () =>{
        expect(leapYear(2011)).toBe(false)
    });
})



describe('Leap Year in Between', () => {
    it('The range must be composed from two different years', () => {
        expect(leapYearInBetween(1992,1992)).toContain('The range must be composed by two different years')
    });
    it('Smallest range of leap year, where the first is leap and the second is not', () => {
        expect(leapYearInBetween(1992,1993)).toBe('1992')
    });
    it('Smallest range of leap year, where the second is leap and the first is not', () => {
        expect(leapYearInBetween(1995,1996)).toBe('1996')
    });
    it('Smallest range of leap year, neither of 2 number in a range is leap', () => {
        expect(leapYearInBetween(1990,1991)).toBe('No leap years in this range')
    });
    it('Return all the leaps years in between a range of years, 3 years range', () => {
        expect(leapYearInBetween(1995,1997)).toContain(1996)
    });
    it('Return all the leaps years in between a range of years, large size range', () => {
         expect(leapYearInBetween(1650,2000)).toContain(1652, 1656, 1660, 1664, 1668, 1672, 1676, 1680,
             1684, 1688, 1692, 1696, 1704, 1708, 1712, 1716,
             1720, 1724, 1728, 1732, 1736, 1740, 1744, 1748,
             1752, 1756, 1760, 1764, 1768, 1772, 1776, 1780,
             1784, 1788, 1792, 1796, 1804, 1808, 1812, 1816,
             1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848,
             1852, 1856, 1860, 1864, 1868, 1872, 1876, 1880,
             1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916,
             1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948,
             1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980,
             1984, 1988, 1992, 1996, 2000)
     });

})



describe('Return the closest leap year', () => {
    it('Return the same year if the year is leap itself', () => {
        expect(closestLeapYear(1896)).toBe('This year is a leap year itself')
    })
    it('Check if the next year is a leap year', () => {
        expect(closestLeapYear(1903)).toBe('1904 is the closest leap year')
    })
    it('Check if the year before is a leap year', () => {
        expect(closestLeapYear(1929)).toBe('1928 is the closest leap year')
    })
    it('Check if the closest leap year is two year after and not two year before', () => {
        expect(closestLeapYear(1902)).toBe('1904 is the closest leap year')
    })
    it('Check if the closest leap year is two year less and not two year after', () => {
        expect(closestLeapYear(1898)).toBe('1896 is the closest leap year')
    })
    it('Check if the closest leap year is 3 year after and not 3 year before', () =>{
        expect(closestLeapYear(1901)).toBe('1904 is the closest leap year')
    })
    it('Check if the closest leap year is 3 year before and not 3 year after', () =>{
        expect(closestLeapYear(1899)).toBe('1896 is the closest leap year')
    })
    it('Check if the closest leaps year are either 4 year after and 4 year before', () =>{
        expect(closestLeapYear(1900)).toBe('1904 and 1896 are either the closest leap years')
    })


})
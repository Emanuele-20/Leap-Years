# Leap Years

## REQUIREMENTS
A simple tool that will tell you whether a year is a leap year

* All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)

- All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)

- All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)

- All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
## ACCEPTANCE CRITERIA
```
> leap_year?(2000) => true
> leap_year?(1970) => false
> leap_year?(1900) => false
> leap_year?(1988) => true
> leap_year?(1500) => false
```

## Extension Options
- Write a program that takes a start year and an end year and returns an array of all the leap years between.

- Write a program that when given a year, will return the closest leap year (this could be before or after the given year)



### Input / Output Scheme
|  Input  |  Output  |
| :--:    |   :--:   |
|   2000  |  TRUE   |
|   1700  |    FALSE |
|   2004  |   TRUE  |
|   2009  |   FALSE  |


#### CLASSES/METHODS/TESTS
- leapYear(year)
- leapYearInBetween(yearStart, yearEnd)
- closestLeap(selection)


















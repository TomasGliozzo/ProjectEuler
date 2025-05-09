/**
 ***** Problem 19: Counting Sundays *****
 * You are given the following information, but you may prefer to do some research for yourself.
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

 function countingSundays(firstYear, lastYear){
    let countOfSundays = 0;
    let daysOfMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
    let dayOfWeek = firstDayOfYear(firstYear); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    for(let year = firstYear; year <= lastYear; year++){
        for(let month = 0; month < 12; month++){

            if(dayOfWeek  % 7 == 0) countOfSundays++;

            dayOfWeek = (dayOfWeek + daysOfMonths[month]) % 7;
            
            if(month == 1 && leapYear(year)) dayOfWeek++; // February && leap year: add one more day
        }
    }

    return countOfSundays;
}

function leapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0 && year % 400 != 0){
            return false
        }
        return true
    }
    return false
}

function firstDayOfYear(year){
    let day = 1; // 1 Jan 1900 was Monday (reference day)
    for(let i = 1900; i < year; i++){
        if(leapYear(i)){
            day += 366 % 7;
        }
        else{
            day += 365 % 7;
        } 
    }
    return day % 7;
}

//TESTS LEAP YEAR
/*
console.log(1900, leapYear(1900)); //false
console.log(2000, leapYear(2000)); //true
console.log(1904, leapYear(1904)); //true
console.log(1901, leapYear(1901)); //false
*/

//TESTS COUNTING SUNDAYS
console.log(countingSundays(1943,1946)) //6
console.log(countingSundays(1995,2000)) //10
console.log(countingSundays(1901,2000)) //171



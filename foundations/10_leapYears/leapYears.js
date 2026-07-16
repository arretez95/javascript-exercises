const leapYears = function(year) {
    const yearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const yearDivisiblebyFourHundred = year % 400 === 0;

    if (yearDivisibleByFour && (!isCentury || yearDivisiblebyFourHundred)) {
        return true
    } else {
        return false
    }
};

console.log( leapYears(1900) )
console.log( leapYears(1985) )

// Do not edit below this line
module.exports = leapYears;

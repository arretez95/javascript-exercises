const leapYears = function(year) {
    return (year % 4) === 0 ? true : false
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0 ? true : false
        } else {
            return true
        }
    }
};

console.log( leapYears(2000) )
console.log( leapYears(1985) )

// Do not edit below this line
module.exports = leapYears;

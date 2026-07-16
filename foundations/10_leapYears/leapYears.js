const leapYears = function(year) {
    return (year % 4) === 0 ? true : false
};

console.log( leapYears(2000) )
console.log( leapYears(1985) )

// Do not edit below this line
module.exports = leapYears;

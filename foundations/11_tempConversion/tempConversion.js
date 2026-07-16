const convertToCelsius = function(temp) {
  // celsius = (fahrenheit - 32) * (5/9)
  let fToC = (temp - 32) * (5/9)
   if (fToC - Math.floor(fToC) != 0) {
    return fToC.toFixed(1)
  } else {
    return fToC
  }
};

const convertToFahrenheit = function(temp) {
  // fahrenheit = celsius * 9/5 + 32
  let cToF = (temp * 9/5  + 32) 
  if (cToF - Math.floor(cToF) != 0) {
    return cToF.toFixed(1)
  } else {
    return cToF
  }
};

console.log( convertToCelsius(100) )
console.log( convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

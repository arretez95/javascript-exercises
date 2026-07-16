const convertToCelsius = function(temp) {
  // celsius = (fahrenheit - 32) * (5/9)
  return ((temp - 32) * (5/9)).toFixed(1)
};

const convertToFahrenheit = function(temp) {
  // fahrenheit = celsius * 9/5 + 32
  return (temp * 9/5  + 32).toFixed(1)
};

console.log( convertToCelsius(32))
console.log( convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

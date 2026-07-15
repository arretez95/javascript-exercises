const reverseString = function(string) {
    let str = string.split('')
    str.reverse()
    let newStr = str.join('')
    return newStr
};


console.log(reverseString("hello"))
// Do not edit below this line
module.exports = reverseString;

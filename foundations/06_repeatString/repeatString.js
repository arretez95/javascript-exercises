const repeatString = function(string, num) {
    let repeat;
    for ( let i = 0; i < num; i++) {
        repeat += string;
    }
    return repeat
};

console.log(repeatString("hey",3))

// Do not edit below this line
module.exports = repeatString;

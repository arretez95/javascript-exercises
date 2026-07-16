const sumAll = function(x, y) {
    if ( !x || !y || x < 0 || y < 0 ) return "ERROR"
    
    let a = Math.min(x, y)
    let b = Math.max(x, y)
    let arr = [];

    arr = Array.from( {length: b - a},
                (v, i) => a + i,
    )
    return arr
};

console.log( sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;

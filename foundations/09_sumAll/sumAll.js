const sumAll = function(x, y) {
    if ( !x || !y || x < 0 || y < 0 ) return "ERROR"
    if (typeof x != "number" || typeof y != "number") return "ERROR"
    if ( (x - Math.floor(x) != 0 || y - Math.floor(y) != 0)) return "ERROR"

    let a = Math.min(x, y)
    let b = Math.max(x, y)
    let arr = [];

    arr = Array.from( {length: b - a + 1},
                (v, i) => a + i,
    )
    
    return arr.reduce( (v, i) => v + i, 0)
};

console.log( sumAll(1, 4))
console.log(sumAll(1, 4000))

// Do not edit below this line
module.exports = sumAll;

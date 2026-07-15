const removeFromArray = function(arr, ...el) {
    let newArr = []
    for (const arg of el) {
        let index = arr.indexOf(el)
        newArr = arr.splice(index, 1)
    }
    return newArr    
};

console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;

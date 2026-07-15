const removeFromArray = function(arr, el) {
    let index = arr.indexOf(el)
    arr.splice(index, 1)
    return arr
};

console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;

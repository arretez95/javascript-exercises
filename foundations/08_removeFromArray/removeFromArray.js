/* const removeFromArray = function(arr, ...el) {
    for (const arg of el) {
        let index = arr.indexOf(el) - 1
        arr.splice(index, 1)
        index = ""
    }
    return arr
}; */
const removeFromArray = function(arr, ...el) {
    let newArr = [];
    arr.forEach( item => {
        if (!el.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(removeFromArray([1,2,3,4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;

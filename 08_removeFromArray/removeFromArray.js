const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (let element of array){
        if(!args.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;

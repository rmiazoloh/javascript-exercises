const createFibonnaci = function(r){
    // Create fibonnaci suite table
    let arr = [];
    for (let i = 2; i <= r; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}
const fibonacci = function(r) {
    if (r < 0){
        return 'OOPS';
    }else {
        if (isNaN(r)) r = Number(r);
    }
    let newArr = createFibonnaci(r);
    return newArr[r];
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;

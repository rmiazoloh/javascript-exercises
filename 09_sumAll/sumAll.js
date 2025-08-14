const sumAll = function(a, b) {
    let result = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a > 0 && b > 0){
        if (a < b){
            for (let i = a; i <= b; i++){
                result += i;
            }
        }
        else {
            for (let i = b; i <= a; i++){
                result += i;
            }
        }
        return result;
    }
    else {
        return 'ERROR';
    }

};
console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;

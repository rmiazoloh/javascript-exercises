const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let finalString = '';
    for (let i = 0; i < num; i++){
        finalString += word;
    }
    return finalString;
};

//console.log(repeatString('hi',4));

// Do not edit below this line
module.exports = repeatString;

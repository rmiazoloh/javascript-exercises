const reverseString = function(sentence) {
    return sentence
    .split("")
    .reverse()
    .join("");

};
console.log(reverseString('Hello World'));
// Do not edit below this line
module.exports = reverseString;

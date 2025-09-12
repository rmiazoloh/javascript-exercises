const palindromes = function (str) {
    // Only alphanumeric characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;

};

palindromes('racecar!');
// Do not edit below this line
module.exports = palindromes;

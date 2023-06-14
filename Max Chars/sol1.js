const maxChars = (str) => {
    let charMap = {};
    let max = 0;
    let maxChar = '';
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            maxChar = char;
            max = charMap[char];
        }
    }
    return maxChar;
};

console.log(maxChars('abbc'));

module.exports = maxChars;
const reverseString = (str) => {
    return str.split('').reverse().join('');
};

console.log(reverseString('apple'));

module.exports = reverseString;
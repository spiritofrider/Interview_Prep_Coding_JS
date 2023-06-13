const reverseString3 = (str) => {
    return str.split('').reduce((rev,char) => char + rev, '');
};

console.log(reverseString3('apple'));

module.exports = reverseString3;
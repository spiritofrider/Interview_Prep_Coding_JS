const reverseString2 = (str) => {
    let rev = '';
    for (char of str) {
        rev = char + rev;
    }
    return rev;
};

console.log(reverseString2('home'));

module.exports = reverseString2;
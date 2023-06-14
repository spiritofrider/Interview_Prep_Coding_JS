const palindrome2 = (str) => {
    return str.split('').every((char,i) => {
        return char === str[str.length - i - 1];
    }) 
}

console.log(palindrome2('abba'));

module.exports = palindrome2;
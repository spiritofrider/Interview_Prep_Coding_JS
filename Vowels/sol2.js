const vowels = (str) => {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

console.log(vowels('Hello There!'));

module.exports = vowels;
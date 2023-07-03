const vowels = (str) => {
    let count = 0;
    let checker = ['a', 'e', 'i', 'o', 'u'];

    for(let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count+=1;
        }
    }
    return count
};

console.log(vowels('Hello there!'));

module.exports = vowels;
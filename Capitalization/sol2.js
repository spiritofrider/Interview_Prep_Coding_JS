const capitalization2 = (str) => {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
};

console.log(capitalization2('hello what are you doing'));

module.exports = capitalization2;
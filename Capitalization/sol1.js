const capitalization = (str) => {
    const wordArray = str.split(' ');
    // const newArray = [];
    let capitalized = '';

    for (let word of wordArray) {
        // newArray.push(word[0].toUpperCase()+word.slice(1));
        capitalized += ' ' + word[0].toUpperCase()+word.slice(1);
    }

    // return newArray.join(' ');
    return capitalized.trim();
};

console.log(capitalization('what'));

module.exports = capitalization;
const reverseInt = (inte) => {
    let reversed = inte.toString().split('').reverse().join('');
    if (inte < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
};

console.log(reverseInt(-5930));

module.exports = reverseInt;
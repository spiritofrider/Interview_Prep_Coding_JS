const reverseInt2 = (inte) => {
    let reversed = inte.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(inte);
};

console.log(reverseInt2(-5930));

module.exports = reverseInt2;
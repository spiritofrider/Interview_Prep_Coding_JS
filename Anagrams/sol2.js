const checkAnagaram = (strA, strB) => {
    return cleanString(strA) === cleanString(strB);
};

const cleanString = (str) => {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

console.log(checkAnagaram('rail safety!', 'fairy tales'));

module.exports = checkAnagaram;
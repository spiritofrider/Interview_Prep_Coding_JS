const checkAnagaram = (strA, strB) => {
    const aCharMap = buildCharMap(strA);
    const bCharMap = buildCharMap(strB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let el in aCharMap) {
        if (aCharMap[el] !== bCharMap[el]) {
            return false;
        }
    }

    return true;
};

const buildCharMap = (str) => {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(checkAnagaram('rail safety!','fairy tales'));

module.exports = checkAnagaram;
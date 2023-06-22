const stairs = (n, row=0, stairStr='') => {
    if (n === row) {
        return;
    }

    if (stairStr.length === n) {
        console.log(stairStr);
        return stairs(n,row+1);
    }

    if(stairStr.length <= row) {
        stairStr += '#';
    } else {
        stairStr += ' ';
    }

    return stairs(n,row,stairStr);
};

stairs(5);

module.exports = stairs;
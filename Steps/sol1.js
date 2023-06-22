const stairs = (n) => {
    for (let row = 0; row < n; row++) {
        let stairstr = '';
        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stairstr += '#'
            } else {
                stairstr += ' ';
            }
        }
        console.log(stairstr);
    }
};

stairs(10);

module.exports = stairs;
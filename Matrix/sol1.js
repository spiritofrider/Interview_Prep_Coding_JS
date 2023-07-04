const matrix = (n) => {
    let counter = 1;
    let results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    for(let i = 0; i < results.length; i++) {
        for (let j = 0; j < results.length; j++) {
            results[i][j] = counter;
            counter++;
        }
    }

    return results;

};

console.log(matrix(2));

module.exports = matrix;
const chunkArray = (arr,chunkSize) => {
    const chunked = [];
    for (let element of arr) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === chunkSize) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
};

console.log(chunkArray([1,2,3,4,5,6,7,8], 3));

module.exports = chunkArray;
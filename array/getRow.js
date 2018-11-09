/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var base = [[1]], p = 0;
    while (p < rowIndex) {
        base.push(getNextLayer(base[p]));
        p++;
    }
    return base[rowIndex];
};

var getNextLayer = (arr) => {
    var len = arr.length, res = [];
    for (var i = 0; i < len + 1; i++) {
        res[i] = (arr[i - 1] || 0 ) + (arr[i] || 0 );
    }
    return res;
};

console.log(getRow([3]));

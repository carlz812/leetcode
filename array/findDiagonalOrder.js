/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    let res = [];

    const n = matrix.length;
    if (!n) {
        return res;
    }
    const m = matrix[0].length;
    for (let sum = 0; sum < m + n - 1; sum++) {
        let col = [];
        for (let y = 0; y < n; y++) {
            let x = sum - y;
            if (x < 0) {
                continue;
            }
            let item = matrix[y][x];
            if (item !== undefined) {
                col.push(item);
            }
        }
        res = sum % 2 === 1 ? res.concat(col) : res.concat(col.reverse());
    }
    return res;
};

console.log(findDiagonalOrder([[1, 2], [3, 4]]));

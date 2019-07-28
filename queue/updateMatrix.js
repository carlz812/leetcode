/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    var rLen = matrix.length;
    var cLen = matrix[0].length;

    var copyMatrix = [];
    var direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    var queue = [];

    matrix.forEach((row, r) => {
        copyMatrix[r] = [];
        row.forEach((val, c) => {
            copyMatrix[r][c] = val;
            if (val === 0) {
                queue.push([r, c]);
            }
        })
    })

    while (queue.length) {
        var curr = queue.shift();

        direction.forEach((dir) => {
            var ii = dir[0] + curr[0];
            var jj = dir[1] + curr[1];
            if (ii < 0 || jj < 0 || ii >= rLen || jj >= cLen || matrix[ii][jj] === 0) {
                return;
            }
            copyMatrix[ii][jj] = copyMatrix[curr[0]][curr[1]] + 1;
            matrix[ii][jj] = 0;
            queue.push([ii, jj]);
        })
    }
    return copyMatrix;
};

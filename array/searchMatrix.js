/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = matrix.length - 1;
    var col = 0;

    while (row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else { // found it
            return true;
        }
    }

    return false;
};


var mat = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
tar = 15

console.log(searchMatrix(mat, tar));

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let length = matrix.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[length - j - 1][length - i - 1];
            matrix[length - j - 1][length - i - 1] = tmp;
        }
    }

    // console.log(matrix);
    // 调换列元素
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length / 2; j++) {
            let tmp = matrix[j][i];
            matrix[j][i] = matrix[length - j - 1][i];
            matrix[length - j - 1][i] = tmp;
        }
    }
    // console.log(matrix)
};

rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]);
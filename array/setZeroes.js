/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rowZero = [], colZero = [];
    matrix.forEach((arr, row) => {
        arr.forEach((num, col) => {
            if (!num) {
                if (rowZero.indexOf(row) === -1) rowZero.push(row);
                if (colZero.indexOf(col) === -1) colZero.push(col);
            }
        });
    });
    matrix.forEach((arr, row) => {
        arr.forEach((num, col) => {
            if (rowZero.indexOf(row) !== -1) {
                arr[col] = 0;
            } else if (colZero.indexOf(col) !== -1) {
                arr[col] = 0;
            }

        });
    });
    return matrix;
};

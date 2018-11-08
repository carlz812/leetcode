/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let point = 0,
        res = [],
        type = 'row',
        len = matrix.length;

    while (matrix[0] && matrix[0][0] !== undefined) {
        console.log(type);
        if (type === 'row') {
            res = res.concat(matrix.shift());
            type = 'down';
        } else if (type === 'down') {
            res = res.concat(matrix.map(row => row.pop()));
            type = 'rowBottom';
        } else if (type === 'up') {
            res = res.concat(matrix.map(row => row.shift()).reverse());
            type = 'row';
        } else if (type === 'rowBottom') {
            res = res.concat(matrix.pop().reverse());
            type = 'up';
        }
        console.log(matrix);
    }
    return res;
};


console.log(spiralOrder([

]));
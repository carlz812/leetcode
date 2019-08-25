/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    var n = matrix.length;
    var lo = matrix[0][0],
        hi = matrix[n - 1][n - 1];
    while (lo < hi) {
        var mid = (hi + lo) >> 1;
        var count = 0,
            j = matrix[0].length - 1;
        for (var i = 0; i < matrix.length; i++) {
            while (j >= 0 && matrix[i][j] > mid) {
                j--;
            }
            count += (j + 1);
        }
        if (count < k)
            lo = mid + 1;
        else
            hi = mid;
    }
    return lo;
};

var matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
    ],
    k = 8;
console.log(kthSmallest(matrix, k));

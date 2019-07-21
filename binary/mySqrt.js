/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x <= 1) {
        return x;
    }
    var n = Math.floor(x / 2);
    while (n * n > x) {
        n = n / 2;
    }
    n = 2*n;
    while (n * n > x) {
        n--;
    }
    return n;
};

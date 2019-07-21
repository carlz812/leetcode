/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x <= 1) {
        return x;
    }
    var start = 0,
        n = Math.floor(x / 2);


    while (n * n < x) {
        n = Math.floor(n / 2);
    }

};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 递归方法
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return inner((1 / x), -n);
    } else {
        return inner(x, n);
    }
};

var inner = function (x, n) {
    if (n === 1) {
        return x;
    }
    var half = inner(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
};

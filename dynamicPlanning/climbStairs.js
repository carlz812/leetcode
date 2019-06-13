/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var a = 1;
    var b = 2;
    var temp = 0;

    if (n < 1) {
        return 0;
    }

    if (n < 2) {
        return 1;
    }

    if (n < 3) {
        return 2;
    }

    for (var i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return temp;
};

climbStairs(4);
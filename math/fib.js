/**
 * @param {number} N
 * @return {number}
 */
/* 递归方法 */
var fib = function (N) {
    var map = [];
    if (N < 2) {
        return N;
    }

    function inner(n) {
        if (n < 3) {
            return 1;
        }
        return map[n] || (map[n] = fib(n - 1) + fib(n - 2));
    }

    return inner(N);
};

/* 迭代方法 */
var fib2 = function (N) {
    if (N == 0 || N == 1) {
        return N;
    }
    var x = 0,
        y = 1,
        z = 1,
        i = 0,
        end = N - 2;

    while (i <= end) {
        z = x + y;
        x = y;
        y = z;
        i++;
    }
    return z;
};

console.log(fib2(10));
/**
 * @param {number} num
 * @return {boolean}
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 1) {
        return true;
    }
    var n = Math.floor(num / 2);
    while (n * n >num) {
        n = Math.floor(n / 2);
    }
    n = 2*n;
    while (n * n > num) {
        n--;
    }
    return n * n === num;
};
console.log(isPerfectSquare(100))
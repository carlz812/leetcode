/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    var tem = Math.log10(n) / Math.log10(3);
    return !!n && Math.floor(tem) === tem;
};
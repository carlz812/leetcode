/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    var binary = n.toString(2);
    return parseInt(new Array(32 - binary.length).fill(0).concat(binary.toString().split('')).reverse().join(''), 2)
};
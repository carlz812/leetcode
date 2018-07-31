/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var numString = x.toString().split(''),
        ans = 0;

    if (numString[0] === '-') {
        numString.shift();
        ans = -parseInt(numString.reverse().join(''), 10)
    } else {
        ans = parseInt(numString.reverse().join(''), 10)
    }

    if (ans < Math.pow(-2, 31) || ans > (Math.pow(2, 31) - 1)) {
        ans = 0
    }

    return ans
};
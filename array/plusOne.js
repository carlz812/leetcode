/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var plus = 1;

    for (var i = digits.length - 1; i >= 0; i--) {
        if (plus === 0) {
            return digits
        }
        var temp = digits[i] + plus;
        plus = Math.floor(temp / 10);
        digits[i] = temp % 10
    }

    if (plus !== 0) {
        var result = new Array(digits.length + 1).fill(0);
        result[0] = 1;
        return result
    }

    return digits;
};
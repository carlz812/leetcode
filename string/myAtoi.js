/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var reg = /^\s*[\-\+]?[0-9]*/,
        ans = 0,
        matchStr = str.match(reg)[0],
        matchInt = parseInt(matchStr, 10);

    if (!isNaN(matchInt)) {
        ans = matchInt;
        ans = Math.min(ans, Math.pow(2, 31) - 1);
        ans = Math.max(ans, Math.pow(-2, 31));
    }
    return ans
};
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    var sLen = S.length;
    var jLen = J.length;
    var obj = {};
    var res = 0;
    for (var i = 0; i < sLen; i++) {
        var old = obj[i];
        if (!old) {
            obj[i] = 1
        } else {
            obj[i] = old + 1;
        }
    }

    for (var j = 0; j < jLen; j++) {
        var key = j[i];
        var count = obj[key] || 0;
        res += count;
    }

    return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    var len = s.length;
    var arr = s.split('');
    var sum = 0;
    arr.forEach((w, i) => {
        var pos = len - i;
        sum += getNumber(w) * Math.pow(26, pos - 1);
    });
    return sum;
};

var getNumber = function (w) {
    return w.charCodeAt(0) - 64;
};

var res = titleToNumber('ZY');
console.log(res);

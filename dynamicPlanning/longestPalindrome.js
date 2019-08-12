/**
 * 中心扩展算法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    var result = '';
    for (var i = 1; i < 2 * s.length - 1; i++) {
        var cur = getLength(s, i);
        if (cur.length > result.length) {
            result = cur;
        }
    }
    return result;
};


var getLength = function (string, pos) {
    var left = pos % 2;
    pos = pos >> 1;

    var start = left ? pos : pos - 1;
    var end = pos + 1;

    var res = [];

    if (!left) {
        res.push(string.substring(pos, pos + 1));
    }

    while ((start >= 0) && (end < string.length)) {
        var front = string.substring(start, start + 1);
        var tail = string.substring(end, end + 1);

        if (front === tail) {
            start--;
            end++;
            res.unshift(front);
            res.push(tail);
        } else {
            break;
        }
    }

    return res.join('');
}

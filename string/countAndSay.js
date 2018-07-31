/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n <= 0) return "";
    var res = "1";
    while (--n) {
        var cur = "";
        for (var i = 0; i < res.length; ++i) {
            var cnt = 1;
            while (i + 1 < res.length && res[i] === res[i + 1]) {
                ++cnt;
                ++i;
            }
            cur += cnt.toString() + res[i];
        }
        res = cur;
    }
    return res;
};
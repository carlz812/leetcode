/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var len = s.length,
        i = 0,
        ans = -1;

    while (i < len) {
        var ele = s[i];
        var temp = s.slice(0, i).concat(s.slice(i + 1, len));
        if (temp.indexOf(ele) === -1) {
            ans = i;
            break
        } else {
            i++
        }
    }
    return ans;
};
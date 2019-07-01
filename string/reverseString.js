/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    var start = 0, end = s.length - 1;

    while (start < end) {
        var temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
};
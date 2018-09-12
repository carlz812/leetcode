/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var arr = s.split('')
    let start = 0,
        max = arr.length ? 1 : 0,
        pos = 1;
    while (pos <= arr.length ) {
        let exist = arr.slice(start, pos),
            gap = exist.length;
        if (exist.indexOf(arr[pos]) === -1) {
            pos++;
        } else {
            start++;
        }
        max = Math.max(max, gap);
    }
    return max;
};
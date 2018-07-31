/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var i = 1,
        prefix = strs[0];

    while (i < strs.length) {
        var curr = strs[i];

        if (curr.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1)
        } else {
            i++;
        }
    }
    return prefix || '';
};
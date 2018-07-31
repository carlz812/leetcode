/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if(!needle){
        return 0
    }
    var len = haystack.length,
        splitArr = haystack.split(needle),
        index = splitArr[0].length;

    return index <= len - 1 ? index : -1
};
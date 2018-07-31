/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var reg = /[a-zA-Z0-9]/;
    return s.split('').filter(ele => {
        return reg.test(ele)
    }).every((ele, index, arr) => {
        return ele.toLowerCase() === arr[arr.length - index -1].toLowerCase()
    })
};
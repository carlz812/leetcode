/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var manachered = `$${s} `.split('').join('#');
    var middle = 1, len = 0;
    for (var i = 1; i < manachered.length - 2; i++) {
        var j = 1;
        while (j < i) {
            if (manachered[i - j] === manachered[i + j]) {
                if (len < j) len = j, middle = i;
                j++;
            } else {
                break;
            }
        }
    }
    let longestString = manachered.slice(middle - len, middle + len + 1);
    // console.log(middle, len, longestString);
    return longestString.replace(/[\$\#]/g, '')
};

var res = longestPalindrome('cbbd');

console.log(res);
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function (str) {

    return str.split(/ +/).reverse().filter(item => item).join(' ');
};

var str = ' ';

console.log(reverseWords(str).length);
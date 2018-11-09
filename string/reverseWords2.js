/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').map(ele => ele.split('').reverse().join('')).join(' ');
};

var s = 'Let\'s take LeetCode contest';

console.log(reverseWords(s));


"s'teL ekat edoCteeL tsetnoc"
"s'teL ekat edoCteeL tsetnoc"
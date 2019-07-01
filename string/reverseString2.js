/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('');
    var sliceArr = [];
    while (s.length > k) {
        sliceArr.push(s.splice(0, k));
    }
    sliceArr.push(s);
    return sliceArr
        .map((arr, index) => index % 2
            ? arr.join('')
            : reverseString(arr).join('')
        )
        .join('');
};

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

var s = 'abcdefghijklm', k = 4;
var res = reverseStr(s, k);
console.log(res);
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var vowelsReg = /[aeiouAEIOU]/;
    var arr = s.split('');
    var start = 0, end = arr.length - 1;
    while (start < end) {
        if (vowelsReg.test(arr[start]) && vowelsReg.test(arr[end])) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        } else if (vowelsReg.test(arr[start])) {
            end--;
        } else if (vowelsReg.test(arr[end])) {
            start++;
        } else {
            start++;
            end--;
        }
    }
    return arr.join('');
};

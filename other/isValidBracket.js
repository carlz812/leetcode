/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var couple = {
        '{': '}',
        '}': '{',
        '[': ']',
        ']': '[',
        '(': ')',
        ')': '('
    }
    var arr = s.split('');
    let front = [];
    arr.forEach(item => {
        var last = front.pop();
        if (item !== couple[last]) {
            front.push(last, item);
        }
    })
    return !front.pop();
};

isValid("");
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
        // console.log(item, couple[last])
        if (item === couple[last]) {
            console.log(item, couple[last])
        } else {
            console.log('push', last, item);
            front.push(last, item);
        }
    })
    console.log(front);
    console.log(!front.pop());
    return !front.pop();
};

isValid("");
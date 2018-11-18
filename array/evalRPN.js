/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    var reg = /^[\+\-\*\/]$/;
    var calc = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return parseInt(a / b, 10);
        }
    };
    var stack = [];
    tokens.forEach(item => {
        if (reg.test(item)) {
            let [a, b] = stack.splice(-2);
            let res = calc[item](a, b);
            stack.push(res);
        } else {
            stack.push(Number(item));
        }
    });
    return stack[0];
};


console.log(evalRPN(["2", "1", "+", "3", "*"]));

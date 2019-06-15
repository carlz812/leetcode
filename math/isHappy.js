/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
    var repeatSet = {};
    var circle = function (n) {
        if (n === 1) {
            return true;
        }
        var arr = `${n}`.split('');
        var res = 0;
        arr.forEach(num => {
            res += (num * num);
        });
        if (!repeatSet[res]) {
            repeatSet[res] = true;
        } else {
            return false;
        }
        return circle(res);
    };
    return circle(n);
};

var res = isHappy(2);
console.log(res);
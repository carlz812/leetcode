/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var aLen = a.length,
        bLen = b.length;

    var iterator = aLen > bLen ? a : b;
    var carry = 0;
    var res = iterator.map((num, index) => {
        let sum = Number(a[index] || 0) + Number(b[index] || 0) + Number(carry);
        carry = sum > 1 ? 1 : 0;
        console.log(sum, carry);
        return sum % 2;
    }).concat(carry).reverse();

    var unZero = 0;
    while (true) {
        if (res[unZero] !== 0) {
            break;
        }
        unZero++;
    }
    return res.splice(unZero).join('') || '0';
};

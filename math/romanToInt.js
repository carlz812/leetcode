/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    var replaceMapping = {
        IV: 'A',
        IX: 'B',
        XL: 'U',
        XC: 'H',
        CD: 'W',
        CM: 'Z',
    }
    Object.keys(replaceMapping).forEach(key => {
        s = s.replace(key, replaceMapping[key])
    })
    var mapping = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        A: 4,
        B: 9,
        U: 40,
        H: 90,
        W: 400,
        Z: 900,
    }
    return s
        .split('')
        .concat(0)
        .reduceRight((a, b) => {
            console.log(b, a);
            return mapping[b] + a;
        })
};

var ans = romanToInt('LVIII')

console.log(ans);
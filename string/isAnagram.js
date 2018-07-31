/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var arrS = s.split('').sort(),
        arrT = t.split('').sort();

    if (arrT.length !== arrS.length) {
        return false
    }
    return arrS.every((ele, index) => {
        return ele === arrT[index]
    })
};
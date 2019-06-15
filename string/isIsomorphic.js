/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length == 0) return true;

    var i = 0;

    while (i < s.length) {

        if (s.indexOf(s[i]) != t.indexOf(t[i]))
            return false;

        i++;
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'));
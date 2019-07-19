/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
    var res = {};
    strings.forEach(str => {
        var arr = str.split(''),
            len = arr.length,
            i = 1,
            gap = [],
            prev = arr[0],
            key = '-';

        while (i < len) {
            var curr = arr[i];
            var g = computeDistance(prev, curr);
            gap.push(g);
            prev = curr;
            i++;
        }
        key = gap.length ? gap.join('-') : key;
        res[key] ? res[key].push(str) : res[key] = [str];
    })
    return Object.keys(res).map(key => res[key]);
};


var getCharCode = function (l) {
    return l.charCodeAt(0);
}

function computeDistance(char1, char2) {
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);
    if (code2 - code1 > 0) {
        return code2 - code1;
    }
    return 26 + code2 - code1;
}

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        let key = s[i];
        if (map[key]) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    }
    var res = Object
        .keys(map)
        .map(key => Array(map[key]).fill(key).join(''))
        .sort((a, b) => b.length - a.length)
        .join('');

    console.log(res);
    return res;
};

frequencySort('cccaaaaadddde');
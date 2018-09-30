/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var res = {}
    var objArr = strs.map(letter => {
        return {
            ori: letter,
            sorted: letter.split('').sort().join('')
        }
    }).sort(function (a, b) {
        return a.sorted > b.sorted
    }).forEach(obj => {
        let key = obj.sorted;
        if (res[key]) {
            res[key].push(obj.ori);
        } else {
            res[key] = [obj.ori];
        }
    })
    return Object.keys(res).map(key => res[key]);
};
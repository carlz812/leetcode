/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    var Mapping = {};
    deadends.forEach(key=>{
        Mapping[key] = true;
    })
    var list = [];
    if (target == null || target.length == 0 || Mapping['0000']) {
        return -1;
    }

    list.push(["0000", 0]);
    while (list.length) {
        let [str, depth] = list.splice(0, 1)[0];
        if (str == target) {
            return depth;
        }
        if (!Mapping[str]) {
            Mapping[str] = true;
            list.push(...getNextList(str, depth));
        }
    }
    return -1;
}


var getNextList = function (str, depth) {
    var res = [];
    var chars = `${str}`.split('');

    for (var i = 0; i < chars.length; i++) {
        var num = Number(chars[i]);
        var newChars = chars.slice();
        newChars[i] = `${(num + 11) % 10}`; 
        res.push([`${newChars.join('')}`, depth + 1]);
        newChars[i] = `${(num + 9) % 10}`;
        res.push([`${newChars.join('')}`, depth + 1]);
    }
    return res;
}

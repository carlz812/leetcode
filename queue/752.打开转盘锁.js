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
    if (deadends.indexOf('0000') !== -1) {
        return -1
    }
    var q = [['0000', 0]]

    while (q.length) {
        const [node, step] = q.splice(0, 1)[0];
        for (var i = 0; i < 4; i++) {
            [1, -1].forEach(add => {
                var cur = `${node[i]}${(Number(node[i]) + add) % 10}${node[i + 1]}`;
                console.log(cur);
                console.log('node', node);
                if (cur == target) {
                    return step + 1
                }
                if (deadends.indexOf(cur) !== -1) {
                    q.push([cur, step + 1])
                    deadends.push(cur)
                }
            })
        }
    }
};

var a = ["0201","0101","0102","1212","2002"],
b = "0202"

console.log(openLock(a,b));
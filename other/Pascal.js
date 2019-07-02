/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows) {
        return [];
    }
    var ans = [[1]];
    for (var i = 1; i < numRows; i++) {
        let prevRow = ans[i - 1],
            currRow = [1];
        for (var j = 1; j < i; j++) {
            let prevLeft = parseInt(prevRow[j - 1], 10),
                rightLeft = parseInt(prevRow[j], 10);
            currRow[j] = prevLeft + rightLeft;
        }
        currRow.push(1);
        ans.push(currRow);
    }
    return ans;
};

/* 递归方案 */
var generate2 = function (numRows) {
    if (!numRows) {
        return [];
    }

    var map = {};

    function inner(m, n) {
        if (n <= 0) {
            return 0;
        }
        if (n === 1 || n === m) {
            return 1;
        } else {
            var key = `${m}_${n}`;
            return map[key] || (map[key] = inner(m - 1, n - 1) + inner(m - 1, n));
        }
    }

    var res = [];
    for (var i = 1; i <= numRows; i++) {
        var row = [];
        for (var j = 1; j <= i; j++) {
            row.push(inner(i, j));
        }
        res.push(row);
    }
    return res;
};

console.log(generate2(25));
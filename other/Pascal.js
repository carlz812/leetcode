/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if(!numRows){
        return []
    }
    var ans = [[1]]
    for (var i = 1; i < numRows; i++) {
        let prevRow = ans[i - 1],
            currRow = [1];
        for (var j = 1; j < i; j++) {
            let prevLeft = parseInt(prevRow[j - 1], 10),
                rightLeft = parseInt(prevRow[j], 10);
            currRow[j] = prevLeft + rightLeft;
        }
        currRow.push(1)
        ans.push(currRow)
    }
    return ans;
};

generate(0)
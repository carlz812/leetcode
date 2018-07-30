/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    return [
        checkCol(board),
        checkRow(board),
        checkSquare(board)
    ].every(dim => dim);
};

/**
 * 检查数独每列是否有重复的数字
 * @param board
 * @returns {boolean}
 */
function checkCol(board) {
    return board[0]
        .every((item, index) => board
            .map(col => col[index])
            .removeDot()
            .noDuplicated());
}

/**
 * 检查数独每行是否有重复的数字
 * @param board
 * @returns {boolean}
 */
function checkRow(board) {
    return board
        .every(col => col
            .removeDot()
            .noDuplicated())
}

/**
 * 检查数独每个小的 n*n 方格是否有重复的数字
 * @param board
 * @returns {boolean}
 */
function checkSquare(board) {
    let mLen = board.length,
        sLen = Math.sqrt(mLen),
        sBox = [];

    for (var s = 0; s < sLen; s++) {
        for (var r = 0; r < sLen; r++) {
            var flatten = board
                .slice(r * sLen, (r + 1) * sLen)
                .map(col => col.slice(s * sLen, (s + 1) * sLen))
                .reduce((a, b) => a.concat(b));

            sBox.push(flatten);
        }
    }

    return sBox.every(flatten => flatten
        .removeDot()
        .noDuplicated())
}

/**
 * 给数组去重
 * @param arr
 * @returns {Array}
 */
function getUnique(arr) {
    let uniqueArr = [];
    arr.forEach(item => {
        if (uniqueArr.indexOf(item) === -1) {
            uniqueArr.push(item)
        }
    });
    return uniqueArr;
}

/**
 * 判断当前数组是否有重复项
 * 如果有，返回 false
 * 没有，则返回 true
 * @returns {boolean}
 */
Array.prototype.noDuplicated = function () {
    let array = this,
        len = array.length;
    return getUnique(array).length === len;
};

/**
 * 去除数组中的 .
 * @returns {Array.<*>}
 */
Array.prototype.removeDot = function () {
    return this.filter(ele => ele !== '.');
};

let ans = isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]);

console.log(ans);


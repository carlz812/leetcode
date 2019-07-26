/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var SEA = '0';
    var DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    var m = grid.length;
    if (m == 0) return 0;
    var n = grid[0].length;

    var count = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var tar = grid[i][j];
            var queue = [];
            if (tar === SEA) {
                continue;
            }
            count++;
            queue.push([i, j]);

            while (queue.length) {
                var curr = queue.splice(0, 1)[0];
                DIRECTION.forEach(dir => {
                    var ii = dir[0] + curr[0];
                    var jj = dir[1] + curr[1];
                    if (ii < 0 || jj < 0 || ii >= m || jj >= n || grid[ii][jj] === SEA) {
                        return;
                    }
                    grid[ii][jj] = SEA;
                    queue.push([ii, jj]);
                })
            }
        }
    }

    return count;
};

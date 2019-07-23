/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

var splitArray = function (nums, m) {
    var n = nums.length;
    var f = [];
    var sub = [nums[0]];
    for (var i = 0; i <= n; i++) {
        f[i] = [];
        for (var j = 0; j <= m; j++) {
            f[i][j] = Number.MAX_SAFE_INTEGER;
        }
    }
    for (var i = 0; i < n; i++) {
        sub[i + 1] = sub[i] + nums[i];
    }
    f[0][0] = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= m; j++) {
            for (var k = 0; k < i; k++) {
                f[i][j] = Math.min(f[i][j], Math.max(f[k][j - 1], sub[i] - sub[k]));
            }
        }
    }
    return f[n][m];
};
var nums = [7, 2, 5, 2, 8, 10, 9, 14, 6, 2, 10, 7],
    m = 6;

console.log(splitArray(nums, m));
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

/*
思路

这个问题满足无后向性的特点。我们可以用动态规划来解决它。

无后向性的特点意味着，一旦当前状态确定了，它就不会被之后的状态影响。
在这个问题里面，如果我们在将 nums[0..i] 分成 j 份时得到了当前最小的分割数组的最大值，不论后面的部分怎么分割这个值不会受到影响。

算法

首先我们把 f[i][j] 定义为将 nums[0..i] 分成 j 份时能得到的最小的分割子数组最大值。
对于第 j 个子数组，它为数组中下标 k + 1 到 i 的这一段。
因此，f[i][j] 可以从 max(f[k][j - 1], nums[k + 1] + ... + nums[i]) 这个公式中得到。
遍历所有可能的 k，会得到 f[i][j] 的最小值。
整个算法那的最终答案为 f[n][m]，其中 n 为数组大小。
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

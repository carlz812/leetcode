/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    var res = Number.MAX_VALUE;
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        var sum = 0;
        for (var j = i; j < n; j++) {
            sum += nums[j];
            var len = j - i + 1
            if (sum < s) continue;
            if (len >= res) break;
            res = len;
            break;
        }
    }

    return res === Number.MAX_VALUE ? 0 : res;
};

var s = 7, nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(s, nums));

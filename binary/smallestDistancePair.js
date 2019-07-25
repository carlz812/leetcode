/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
    nums = nums.sort((a, b) => a - b);

    var lo = 0;
    var hi = nums[nums.length - 1] - nums[0];
    while (lo < hi) {
        var mi = (lo + hi) >> 1;
        var count = 0, left = 0;
        for (var right = 0; right < nums.length; ++right) {
            while (nums[right] - nums[left] > mi) left++;
            count += right - left;
        }
        if (count >= k) hi = mi;
        else lo = mi + 1;
    }
    return lo;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    var sorted = nums;
    sorted = sorted.sort((a, b) => a > b);
    var max = sorted.pop() || 0,
        secMax = sorted.pop() || 0;
    return max >= 2 * secMax
        ? nums.indexOf(max)
        : -1;
};

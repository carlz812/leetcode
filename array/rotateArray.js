/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var i = 1;
    while (i <= k) {
        var end = nums.splice(-1, 1)[0];
        nums.splice(0, 0, end);
        i++;
    }
};

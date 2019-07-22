/**
 * @param {number[]} nums
 * @return {number}
 */
/*
不能更改原数组（假设数组是只读的）。
只能使用额外的 O(1) 的空间。
时间复杂度小于 O(n2) 。
数组中只有一个重复的数字，但它可能不止重复出现一次。
*/
var findDuplicateSlow = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) {
            return nums[i];
        }
    }
};

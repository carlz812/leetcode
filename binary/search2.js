/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var start = 0, end = nums.length;
    while (end - start > 0) {
        var pos = start + Math.floor((end - start) / 2);
        if (nums[pos] > target) {
            end = pos;
        } else if (nums[pos] < target) {
            start = pos + 1;
        } else if (nums[pos] === target) {
            return pos;
        } else {
            return -1;
        }
    }
    return -1;
};

var nums = [-1, 0, 3, 5, 9, 12, 14, 15, 17, 24, 25, 26, 28, 29, 30, 31, 34, 35, 36],
    target = 28;

// var nums = [-1, 0, 3, 5, 9, 12];
// var target = 13;
console.log(search(nums, target));
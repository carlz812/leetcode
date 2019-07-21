/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var inner = function (start, end, target) {
        if (end - start === 0 || (end - start === 1 && nums[start] !== target)) {
            return -1;
        }
        var pos = start + Math.floor((end - start) / 2);
        if (nums[pos] > target) {
            return inner(start, pos, target);
        } else if (nums[pos] < target) {
            return inner(pos + 1, end, target);
        } else {
            return pos;
        }
    };

    return inner(0, nums.length, target);
};
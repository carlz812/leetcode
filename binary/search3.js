/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    var rePos = 0;

    while (rePos < nums.length - 1) {
        if (nums[rePos] < nums[rePos + 1]) {
            rePos++;
        } else {
            break;
        }
    }

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

    var front = inner(0, rePos + 1, target);
    return front === -1 ? inner(rePos + 1, nums.length, target) : front;
};

var nums = [1, 3],
    target = 3;

console.log(search(nums, target));
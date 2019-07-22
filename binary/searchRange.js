/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    var start = 0, end = nums.length, res = -1;
    while (start < end) {
        var pos = start + Math.floor((end - start) / 2);
        if (nums[pos] < target) {
            start = pos + 1;
        } else if (nums[pos] > target) {
            end = pos;
        } else if (nums[pos] === target) {
            res = pos;
            break;
        } else {
            return [-1, -1];
        }
    }
    if (res === -1) {
        return [-1, -1];
    }
    start = res;
    end = res;
    console.log(pos);
    while (nums[start] === nums[res]) {
        start--;
    }
    while (nums[end] === nums[res]) {
        end++;
    }
    return [start + 1, end - 1];
};

var num = [1], target = 1;
console.log(searchRange(num, target));
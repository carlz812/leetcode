/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    var i = 1, increasing = [nums[0]];

    while (i < nums.length) {
        increasing.slice().pop() < nums[i] ? 0 : increasing.pop();
        increasing.push(nums[i]);
        i++;
    }
    return count >= 3;
};

var res = increasingTriplet([5, 4, 7, 1, 1, 5, 5, 2, 5, 4]);

console.log(res);
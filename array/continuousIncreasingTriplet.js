/**
 * @param {number[]} nums
 * @return {boolean}
 */
var continuousIncreasingTriplet = function (nums) {
    var i = 1, count = 1;

    while (i < nums.length) {
        nums[i] > nums[i - 1] ? count++ : count = 1;
        if (count >= 3) {
            break;
        }
        i++;
    }
    return count >= 3;
};

var res = continuousIncreasingTriplet([5, 1, 5, 5, 2, 5, 4]);

console.log(res);
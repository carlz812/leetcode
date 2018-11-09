/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var strArr = nums.join('').split('0');
    var max = 0;
    strArr.forEach(num => {
        max = num.length > max ? num.length : max;
    });
    return max;
};

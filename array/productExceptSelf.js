/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var i = 0;
    var left = 1;
    var right = 1;
    var res = [];
    while (i < nums.length) {
        res[i] = left;
        left = left * nums[i];
        i++;
    }

    i--;
    while (i >= 0) {
        res[i] *= right;
        right = right * nums[i];
        i--;
    }

    return res;
};


console.log(productExceptSelf([1,2]));

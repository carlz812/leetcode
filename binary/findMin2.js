/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 0) {
        return null;
    }

    var rePos = 0;

    while (rePos < nums.length - 1) {
        if (nums[rePos] <= nums[rePos + 1]) {
            rePos++;
        } else {
            break;
        }
    }
    return rePos === nums.length - 1 ? nums[0] : Math.min(nums[0], nums[rePos + 1]);
};

console.log(findMin([]));
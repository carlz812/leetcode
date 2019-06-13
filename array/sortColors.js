/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var i = 0, count = 0;
    while (count < nums.length) {
        switch (nums[i]) {
            case 0: {
                let current = nums.splice(i, 1)[0];
                nums.splice(0, 0, current);
                i++;
                count++;
                break;
            }
            case 1: {
                i++;
                count++;
                break;
            }
            case 2: {
                let current = nums.splice(i, 1)[0];
                nums.splice(nums.length, 0, current);
                count++;
                break;
            }
        }
    }
    return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0, 2, 2, 1]));
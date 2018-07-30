/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let i = 0, len = nums.length - 1;
    while (i <= len) {
        if (nums[i] === 0) {
            console.log('i', i);
            nums.splice(i, 1);
            nums.splice(len, 0, 0);
            len--
        } else {
            i++
        }
    }
};
let ans = moveZeroes([1, 0, 0, 0, 1, 0, 3, 0, 12]);

console.log(ans);

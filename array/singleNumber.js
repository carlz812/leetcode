/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort();
    for (var i = 0; i < nums.length ; i = i + 2) {
        if (i + 1 >= nums.length ) {
            return nums[i];
        }
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

var ans = singleNumber([4,1,2,1,2]);
console.log(ans);
// console.log([1, 2, 2, 1].indexOf(2, 2));
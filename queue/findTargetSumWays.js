/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    var res = 0;
    var sum = 0;
    var len = nums.length;

    var inner = function (pos, sum) {
        var curr = nums[pos];
        if (pos < len - 1) {
            inner(pos + 1, sum + curr);
            inner(pos + 1, sum - curr);
        } else {
            if ((curr + sum) === S || (sum - curr) === S) {
                curr === 0 ? res += 2 : res++;
            }
            return;
        }
    }
    inner(0, sum);
    return res;
};



// var nums = [1, 1, 1, 1, 1], S = 3;
var nums = [1, 0], S = 1;
console.log(findTargetSumWays(nums, S));

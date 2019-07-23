/* wrong version */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    var sum = nums.reduce((a, b) => a + b);
    var max = Number.MIN_SAFE_INTEGER;

    var inner = function (s, m, sum, max) {
        var start = s;
        var lim = Math.floor(sum / m);
        var tempSum = 0;
        while (tempSum + nums[start] <= lim) {
            tempSum += nums[start];
            start++;
        }
        var nextSum = tempSum + nums[start];
        if (m === 2) {
            return Math.min(
                Math.max(max, tempSum, sum - tempSum),
                Math.max(max, nextSum, sum - nextSum));
        }
        return Math.min(
            inner(start, m - 1, sum - tempSum, Math.max(max, tempSum)),
            inner(
                start + 1,
                m - 1,
                sum - nextSum,
                Math.max(max, nextSum))
        );
    };

    return inner(0, m, sum, max);
};

var nums = [7, 2, 5, 2, 8, 10, 9, 14, 6, 2, 10, 7],
    m = 6;

console.log(splitArray(nums, m));
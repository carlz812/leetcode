/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    var prev = Number.MIN_SAFE_INTEGER,
        i = 1,
        curr = nums[0];

    while (i < nums.length) {
        var next = nums[i];
        if (curr > prev && curr > next) {
            break;
        } else {
            prev = curr;
            curr = next;
            i++;
        }
    }
    return i - 1;
};

console.log(findPeakElement([1, 2, 3, 5, 6, 7, 8]));
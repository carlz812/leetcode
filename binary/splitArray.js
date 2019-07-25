/* best version */
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    var l = 0;
    var r = 0;
    var n = nums.length;

    for (var i = 0; i < n; i++) {
        r += nums[i];
        if (l < nums[i]) {
            l = nums[i];
        }
    }
    var ans = r;
    while (l <= r) {
        var mid = (l + r) >> 1;
        var sum = 0;
        var cnt = 1;
        for (var i = 0; i < n; i++) {
            if (sum + nums[i] > mid) {
                cnt++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }
        if (cnt <= m) {
            ans = Math.min(ans, mid);
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
};

var nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6],
    m = 20;

console.log(splitArray(nums, m));

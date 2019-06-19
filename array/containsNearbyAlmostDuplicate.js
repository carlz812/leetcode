/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

/*

给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，
使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
*
* */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    var len = nums.length,
        res = false,
        i = 0;
    while (i < len) {
        let j = i + 1;
        while (j < len) {
            var tAbs = Math.abs(nums[i] - nums[j]);
            var kAbs = Math.abs(i - j);
            if ((kAbs <= k) && (tAbs <= t)) {
                res = true;
                break;
            }
            j++;
        }
        if (res) {
            break;
        }
        i++;
    }
    return res;
};

var res = containsNearbyAlmostDuplicate([1,2,3,1], 3, 0);
console.log(res);

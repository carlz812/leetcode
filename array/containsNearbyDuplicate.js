/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var len = nums.length,
        map = new Map(),
        i = 0,
        res = false;

    while (i < len) {
        var num = nums[i];
        var saved = map.get(num);
        if (!saved) {
            saved = [];
        } else {
            var last = saved.slice(-1);
            if ((i - last) <= k) {
                res = true;
                break;
            }
        }
        saved.push(i);
        map.set(num, saved);
        i++;
    }
    return res;
};

var res = containsNearbyDuplicate([99,99], 2);
console.log(res);
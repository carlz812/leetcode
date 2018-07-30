/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var unique = [],
        ans = false;

    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        if (unique.indexOf(item) === -1) {
            unique.push(item)
        } else {
            ans = true;
            break;
        }
    }
    return ans;
};
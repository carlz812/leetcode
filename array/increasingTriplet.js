/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    var m1 = Number.MAX_VALUE,
        m2 = Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (m1 >= num) m1 = num;
        else if (m2 >= num) m2 = num;
        else return true;
    }
    return false;
};

var res = increasingTriplet([1, 5, 4, 7, 3, 4, 7, 1]);

console.log(res);